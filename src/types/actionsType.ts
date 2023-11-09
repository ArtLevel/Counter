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

export type IncrementCounterAT = {
	type: 'INCREMENT_COUNTER'
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
