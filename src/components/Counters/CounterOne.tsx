import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import { Button } from '../common/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import { CounterValuesT, IncrementCounterAC, RemoveScoreCounterAC } from '../../store/reducers/counterValueReducer'
import { ChangeShowOfCounterAC, CounterSettingsT } from '../../store/reducers/counterSettingsReducer'

export const CounterOne = () => {
	const dispatch = useDispatch()
	const { score } = useSelector<AppRootStoreType, CounterValuesT>(s => s.counterValue)
	const { maxValue, minValue, show } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const incScore = () => {
		if (score < maxValue) dispatch(IncrementCounterAC())
	}

	const removeScore = () => dispatch(RemoveScoreCounterAC(minValue))

	const onShowHandler = () => dispatch(ChangeShowOfCounterAC())

	return (
		<div className='wrapper'>
			<div className='container'>
				{
					show ? (
						<SetBlock />
					) : (
						<IncBlock minValue={minValue} maxValue={maxValue}
						          score={score}
						          incScore={incScore}
						          removeScore={removeScore} />
					)
				}
				<div className='moving-block'>
					<Button callback={onShowHandler}
					        className='btn active'>{!show ? 'Show Set Block' : 'Hide Set Block'}</Button>
				</div>
			</div>
		</div>
	)
}