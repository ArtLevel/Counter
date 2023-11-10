import { AppRootStoreType } from '../store/store'

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('app-state')
		if (serializedState !== null) {
			return JSON.parse(serializedState)
		}
	} catch (err) {
		console.error(err)
	}
}

export const saveState = (state: AppRootStoreType) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('app-state', serializedState)
	} catch (err) {
		console.error(err)
	}
}