type ChangeMaxValueOfCounterAT = {
	type: 'CHANGE_MAX_VALUE_OF_COUNTER',
	newMaxValue: number
}

type ChangeMinValueOfCounterAT = {
	type: 'CHANGE_MIN_VALUE_OF_COUNTER',
	newMinValue: number
}

type ChangeShowOfCounterAT = {
	type: 'CHANGE_SHOW_OF_COUNTER',
	newShowValue: boolean
}


type ActionsType = ChangeMaxValueOfCounterAT | ChangeMinValueOfCounterAT | ChangeShowOfCounterAT

type CounterSettingsT = {
	maxValue: number
	minValue: number
	show: boolean
}

const initialState: CounterSettingsT = {
	maxValue: 5,
	minValue: 0,
	show: false
}

export const counterSettingsReducer = (state: CounterSettingsT = initialState, action: ActionsType): CounterSettingsT => {
	switch (action.type) {
		case 'CHANGE_MAX_VALUE_OF_COUNTER':
			return { ...state, maxValue: action.newMaxValue }
		case 'CHANGE_MIN_VALUE_OF_COUNTER':
			return { ...state, minValue: action.newMinValue }
		case 'CHANGE_SHOW_OF_COUNTER':
			return { ...state, show: action.newShowValue }
		default:
			return state
	}
}

