import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../../store/store'
import {
	ChangeScoreCounterAC,
	CounterValueT,
	RemoveScoreCounterAC
} from '../../../../store/reducers/counterValueReducer'
import { CounterSettingsT } from '../../../../types/types'

export const useIncBlock = () => {
	const { score } = useSelector<AppRootStoreType, CounterValueT>(s => s.counterValue)
	const { maxValue, minValue } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)
	const dispatch = useDispatch()

	const incScore = () => {
		if (score < maxValue) {
			dispatch(ChangeScoreCounterAC(score + 1))
		}
	}

	const removeScore = () => {
		dispatch(RemoveScoreCounterAC(minValue))
	}

	return { score, maxValue, minValue, incScore, removeScore }
}