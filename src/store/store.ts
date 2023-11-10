import { applyMiddleware, combineReducers, createStore } from 'redux'
import { counterValueReducer } from './reducers/counterValueReducer'
import { counterSettingsReducer } from './reducers/counterSettingsReducer'
import thunk from 'redux-thunk'
import { loadState, saveState } from '../utils/localStorageUtils'

const rootReducers = combineReducers({
	counterValue: counterValueReducer,
	counterSettings: counterSettingsReducer
})

let preloadedState = loadState()

export const store = createStore(rootReducers, preloadedState, applyMiddleware(thunk))

export type AppRootStoreType = ReturnType<typeof rootReducers>

store.subscribe(() => {
	saveState(store.getState())
})

// @ts-ignore
window.store = store
