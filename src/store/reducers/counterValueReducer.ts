import { ActionsType, IncrementCounterAT, RemoveScoreCounterAT, SetCounterValueSuccessAC } from '../../types/types'
import { AppRootStoreType } from '../store'
import { Dispatch } from 'redux'

export type CounterValueT = { score: number }

const initialState: CounterValueT = {
	score: 0
}

export const counterValueReducer = (state: CounterValueT = initialState, action: ActionsType): CounterValueT => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return { ...state, score: state.score + 1 }
		case 'REMOVE_SCORE_COUNTER':
			return { ...state, score: action.minValue }
		case 'SET_COUNTER_VALUE_SUCCESS':
			return { ...state, score: action.newScore }
		default:
			return state
	}
}

export const IncrementCounterAC = (): IncrementCounterAT => ({ type: 'INCREMENT_COUNTER' })
export const RemoveScoreCounterAC = (minValue: number): RemoveScoreCounterAT => ({
	type: 'REMOVE_SCORE_COUNTER',
	minValue
})

export const setCounterValueSuccessAC = (newScore: number): SetCounterValueSuccessAC => ({
	type: 'SET_COUNTER_VALUE_SUCCESS',
	newScore
})

// THUNK

export const IncrementCounterTC = () => (dispatch: Dispatch, getState: () => AppRootStoreType) => {
	const currentValue = getState().counterValue.score

	localStorage.setItem('value', JSON.stringify(currentValue + 1))
	dispatch(IncrementCounterAC())
}

export const RemoveScoreCounterTC = () => (dispatch: Dispatch, getState: () => AppRootStoreType) => {
	const minValue = getState().counterSettings.minValue

	localStorage.setItem('value', JSON.stringify(minValue))
	dispatch(RemoveScoreCounterAC(minValue))
}

export const setCounterValueFromLocalStorage = () => (dispatch: Dispatch) => {
	const value = localStorage.getItem('value')

	if (value) {
		dispatch(setCounterValueSuccessAC(JSON.parse(value)))
	}
}