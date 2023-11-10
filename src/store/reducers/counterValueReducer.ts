import { ActionsType, ChangeScoreCounterAT, RemoveScoreCounterAT } from '../../types/types'

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
