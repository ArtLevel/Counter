import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import { Button } from '../common/Button'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import { CounterValuesT, IncrementCounterAC, RemoveScoreCounterAC } from '../../store/reducers/counterValueReducer'

export const CounterOne = () => {
	const dispatch = useDispatch()
	const counterValues = useSelector<AppRootStoreType, CounterValuesT>(s => s.counterValue)

	const [maxValue, setMaxValue] = useState(5)
	const [minValue, setMinValue] = useState(0)
	const [show, setShow] = useState(false)

	const incScore = () => {
		if (counterValues.score < maxValue) dispatch(IncrementCounterAC())
	}

	const removeScore = () => dispatch(RemoveScoreCounterAC(minValue))
	const onChangeMaxValue = (value: number) => setMaxValue(value)

	const onChangeMinValue = (value: number) => {
		setMinValue(value)
		dispatch(RemoveScoreCounterAC(value))
	}

	const onShowHandler = () => setShow(prevState => !prevState)

	return (
		<div className='wrapper'>
			<div className='container'>
				{
					show ? (
						<SetBlock maxValue={maxValue} minValue={minValue} onChangeMaxValue={onChangeMaxValue}
						          onChangeMinValue={onChangeMinValue} />
					) : (
						<IncBlock minValue={minValue} maxValue={maxValue} score={counterValues.score} incScore={incScore}
						          removeScore={removeScore} />
					)
				}
				<div className='moving-block'>
					<Button callback={onShowHandler} className='btn active'>{!show ? 'Show Set Block' : 'Hide Set Block'}</Button>
				</div>
			</div>
		</div>
	)
}