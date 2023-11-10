import { ActionsType, ChangeScoreCounterAT, RemoveScoreCounterAT } from '../../types/types'
import { AppRootStoreType } from '../store'
import { Dispatch } from 'redux'

export type CounterValueT = { score: number }

const initialState: CounterValueT = {
	score: 0
}

export const counterValueReducer = (state: CounterValueT = initialState, action: ActionsType): CounterValueT => {
	switch (action.type) {
		case 'CHANGE_SCORE_COUNTER':
			return { ...state, score: action.score }
		case 'REMOVE_SCORE_COUNTER':
			return { ...state, score: action.minValue }
		default:
			return state
	}
}

export const ChangeScoreCounterAC = (score: number): ChangeScoreCounterAT => ({ type: 'CHANGE_SCORE_COUNTER', score })
export const RemoveScoreCounterAC = (minValue: number): RemoveScoreCounterAT => ({
	type: 'REMOVE_SCORE_COUNTER',
	minValue
})

// THUNK

export const IncrementCounterTC = () => (dispatch: Dispatch, getState: () => AppRootStoreType) => {
	const currentValue = getState().counterValue.score

	localStorage.setItem('value', JSON.stringify(currentValue + 1))
	dispatch(ChangeScoreCounterAC(currentValue + 1))
}

export const RemoveScoreCounterTC = () => (dispatch: Dispatch, getState: () => AppRootStoreType) => {
	const minValue = getState().counterSettings.minValue

	localStorage.setItem('value', JSON.stringify(minValue))
	dispatch(RemoveScoreCounterAC(minValue))
}

export const setCounterValueFromLocalStorage = () => (dispatch: Dispatch) => {
	const value = localStorage.getItem('value')

	if (value) {
		dispatch(ChangeScoreCounterAC(JSON.parse(value)))
	}
}