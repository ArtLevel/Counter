type ChangeMaxValueOfCounterAT = {
	type: 'CHANGE_MAX_VALUE_OF_COUNTER',
	newMaxValue: number
}

type ActionsType = ChangeMaxValueOfCounterAT

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
		default:
			return state
	}
}

