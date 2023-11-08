import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../../store/store'
import { CounterValueT, IncrementCounterAC, RemoveScoreCounterAC } from '../../../../store/reducers/counterValueReducer'
import { CounterSettingsT } from '../../../../store/reducers/counterSettingsReducer'

export const useIncBlock = () => {
	const dispatch = useDispatch()
	const { score } = useSelector<AppRootStoreType, CounterValueT>(s => s.counterValue)
	const { minValue, maxValue } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const incScore = () => {
		if (score < maxValue) dispatch(IncrementCounterAC())
	}

	const removeScore = () => dispatch(RemoveScoreCounterAC(minValue))

	return { score, minValue, maxValue, incScore, removeScore }
}