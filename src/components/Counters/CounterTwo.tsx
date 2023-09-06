import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import React, { useEffect, useState } from 'react'

export const CounterTwo = () => {
	const [score, setScore] = useState(0)
	const [maxValue, setMaxValue] = useState(5)
	const [minValue, setMinValue] = useState(0)

	useEffect(() => {
		const maxValue = localStorage.getItem('maxValueInCounterOne')
		const minValue = localStorage.getItem('minValueInCounterTwo')
		const score = localStorage.getItem('scoreInCounterTwo')

		if (score) setScore(Number(score))
		if (maxValue) setMaxValue(Number(maxValue))
		if (minValue) setMinValue(Number(minValue))
	}, [])

	useEffect(() => {
		localStorage.setItem('maxValueInCounterOne', `${maxValue}`)
		localStorage.setItem('minValueInCounterTwo', `${minValue}`)
		localStorage.setItem('scoreInCounterTwo', `${score}`)
	}, [minValue, maxValue, score])

	const incScore = () => {
		if (score < maxValue) setScore(prevState => prevState + 1)
	}

	const removeScore = () => setScore(minValue)
	const onChangeMaxValue = (value: number) => setMaxValue(value)

	const onChangeMinValue = (value: number) => {
		setMinValue(value)
		setScore(value)
	}

	return (
		<div className='wrapper'>
			<div className='container'>
				<div>
					<IncBlock minValue={minValue} maxValue={maxValue} score={score} incScore={incScore}
					          removeScore={removeScore} />
				</div>
				<div>
					<SetBlock maxValue={maxValue} minValue={minValue} onChangeMaxValue={onChangeMaxValue}
					          onChangeMinValue={onChangeMinValue} />
				</div>
			</div>
		</div>
	)
}