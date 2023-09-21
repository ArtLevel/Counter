type IncrementCounterAT = {
	type: 'INCREMENT_COUNTER'
}

type ActionsType = IncrementCounterAT

type CounterValueT = { value: number }

const initialState: CounterValueT = {
	value: 0
}

export const counterValueReducer = (state: CounterValueT = initialState, action: ActionsType): CounterValueT => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return { ...state, value: state.value + 1 }
		default:
			return state
	}
}

