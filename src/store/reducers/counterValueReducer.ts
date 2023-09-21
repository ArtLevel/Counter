type IncrementCounterAT = {
	type: 'INCREMENT_COUNTER'
}

type RemoveScoreCounterAT = {
	type: 'REMOVE_SCORE_COUNTER'
	minValue: number
}

type ActionsType = IncrementCounterAT | RemoveScoreCounterAT

export type CounterValuesT = { score: number }

const initialState: CounterValuesT = {
	score: 0
}

export const counterValueReducer = (state: CounterValuesT = initialState, action: ActionsType): CounterValuesT => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			return { ...state, score: state.score + 1 }
		case 'REMOVE_SCORE_COUNTER':
			return { ...state, score: action.minValue }
		default:
			return state
	}
}

export const IncrementCounterAC = (): IncrementCounterAT => ({ type: 'INCREMENT_COUNTER' })
export const RemoveScoreCounterAC = (minValue: number): RemoveScoreCounterAT => ({
	type: 'REMOVE_SCORE_COUNTER',
	minValue
})