import { applyMiddleware, combineReducers, createStore } from 'redux'
import { counterValueReducer } from './reducers/counterValueReducer'
import { counterSettingsReducer } from './reducers/counterSettingsReducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
	counterValue: counterValueReducer,
	counterSettings: counterSettingsReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store
