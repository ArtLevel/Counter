import { combineReducers, createStore } from 'redux'

const rootReducers = combineReducers({
	counterValue: {},
	counterOption: []
})

export const store = createStore(rootReducers)

export type AppRootStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store
