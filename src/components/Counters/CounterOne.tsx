import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import { Button } from '../common/Button'
import React, { useState } from 'react'

export const CounterOne = () => {
	const [score, setScore] = useState(0)
	const [maxValue, setMaxValue] = useState(5)
	const [minValue, setMinValue] = useState(0)
	const [show, setShow] = useState(false)

	const incScore = () => {
		if (score < maxValue) setScore(prevState => prevState + 1)
	}

	const removeScore = () => setScore(minValue)
	const onChangeMaxValue = (value: number) => setMaxValue(value)

	const onChangeMinValue = (value: number) => {
		setMinValue(value)
		setScore(value)
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
						<IncBlock minValue={minValue} maxValue={maxValue} score={score} incScore={incScore}
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