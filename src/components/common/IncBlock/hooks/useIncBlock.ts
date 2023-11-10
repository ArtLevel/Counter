import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../../store/store'
import { CounterValueT, IncrementCounterTC, RemoveScoreCounterTC } from '../../../../store/reducers/counterValueReducer'
import { CounterSettingsT } from '../../../../types/types'

export const useIncBlock = () => {
	const dispatch = useDispatch()
	const { score } = useSelector<AppRootStoreType, CounterValueT>(s => s.counterValue)
	const { minValue, maxValue } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const incScore = () => {
		if (score < maxValue) {
			// @ts-ignore
			dispatch(IncrementCounterTC())
		}
	}

	const removeScore = () => {
		// @ts-ignore
		dispatch(RemoveScoreCounterTC())
	}

	return { score, minValue, maxValue, incScore, removeScore }
}