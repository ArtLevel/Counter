import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import { Button } from '../common/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import { CounterValuesT, IncrementCounterAC, RemoveScoreCounterAC } from '../../store/reducers/counterValueReducer'
import {
	ChangeMaxValueOfCounterAC,
	ChangeMinValueOfCounterAC,
	ChangeShowOfCounterAC,
	CounterSettingsT
} from '../../store/reducers/counterSettingsReducer'

export const CounterOne = () => {
	const dispatch = useDispatch()
	const counterValues = useSelector<AppRootStoreType, CounterValuesT>(s => s.counterValue)
	const counterSettings = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const incScore = () => {
		if (counterValues.score < counterSettings.maxValue) dispatch(IncrementCounterAC())
	}

	const removeScore = () => dispatch(RemoveScoreCounterAC(counterSettings.minValue))
	const onChangeMaxValue = (value: number) => dispatch(ChangeMaxValueOfCounterAC(value))

	const onChangeMinValue = (value: number) => {
		dispatch(ChangeMinValueOfCounterAC(value))
		dispatch(RemoveScoreCounterAC(value))
	}

	const onShowHandler = () => dispatch(ChangeShowOfCounterAC())

	return (
		<div className='wrapper'>
			<div className='container'>
				{
					counterSettings.show ? (
						<SetBlock maxValue={counterSettings.maxValue} minValue={counterSettings.minValue}
						          onChangeMaxValue={onChangeMaxValue}
						          onChangeMinValue={onChangeMinValue} />
					) : (
						<IncBlock minValue={counterSettings.minValue} maxValue={counterSettings.maxValue}
						          score={counterValues.score}
						          incScore={incScore}
						          removeScore={removeScore} />
					)
				}
				<div className='moving-block'>
					<Button callback={onShowHandler}
					        className='btn active'>{!counterSettings.show ? 'Show Set Block' : 'Hide Set Block'}</Button>
				</div>
			</div>
		</div>
	)
}