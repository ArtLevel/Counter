import { ActionsType, ChangeSettingsOfCounter, CounterSettingsForAC, CounterSettingsT } from '../../types/types'

const initialState: CounterSettingsT = {
	maxValue: 5,
	minValue: 0,
	show: false
}


export const counterSettingsReducer = (state: CounterSettingsT = initialState, action: ActionsType): CounterSettingsT => {
	switch (action.type) {
		case 'CHANGE_SETTINGS_OF_COUNTER':
			return { ...state, ...action.payload }
		default:
			return state
	}
}

// ACTION CREATOR

export const ChangeSettingOfCounterAC = (newSettings: CounterSettingsForAC): ChangeSettingsOfCounter => ({
	type: 'CHANGE_SETTINGS_OF_COUNTER',
	payload: {
		...newSettings
	}
})

