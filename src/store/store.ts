import { combineReducers, createStore } from 'redux'
import { counterValueReducer } from './reducers/counterValueReducer'
import { counterSettingsReducer } from './reducers/counterSettingsReducer'

const rootReducers = combineReducers({
	counterValue: counterValueReducer,
	counterSettings: counterSettingsReducer
})

export const store = createStore(rootReducers)

export type AppRootStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store
