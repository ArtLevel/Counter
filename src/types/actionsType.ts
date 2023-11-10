import { CounterSettingsForAC } from './counterTypes'

export type ChangeMaxValueOfCounterAT = {
	type: 'CHANGE_MAX_VALUE_OF_COUNTER',
	newMaxValue: number
}

export type ChangeMinValueOfCounterAT = {
	type: 'CHANGE_MIN_VALUE_OF_COUNTER',
	newMinValue: number
}

export type ChangeShowOfCounterAT = {
	type: 'CHANGE_SHOW_OF_COUNTER',
}

export type ChangeSettingsOfCounter = {
	type: 'CHANGE_SETTINGS_OF_COUNTER'
	payload: CounterSettingsForAC
}


export type IncrementCounterAT = {
	type: 'INCREMENT_COUNTER'
}

export type SetCounterValueSuccessAC = {
	type: 'SET_COUNTER_VALUE_SUCCESS'
	newScore: number
}

export type RemoveScoreCounterAT = {
	type: 'REMOVE_SCORE_COUNTER'
	minValue: number
}


export type ActionsType =
	ChangeMaxValueOfCounterAT
	| ChangeMinValueOfCounterAT
	| ChangeShowOfCounterAT
	| IncrementCounterAT
	| RemoveScoreCounterAT
	| SetCounterValueSuccessAC
	| ChangeSettingsOfCounter
