import { ActionsType, IncrementCounterAT, RemoveScoreCounterAT } from '../../types/types'

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
		default:
			return state
	}
}

export const IncrementCounterAC = (): IncrementCounterAT => ({ type: 'INCREMENT_COUNTER' })
export const RemoveScoreCounterAC = (minValue: number): RemoveScoreCounterAT => ({
	type: 'REMOVE_SCORE_COUNTER',
	minValue
})