import React, {useEffect, useState} from 'react';

import {SetBlock} from './components/SetBlock';
import {IncBlock} from './components/IncBlock';
import {Button} from './components/Button';
import './App.css';

function App() {
	const [score, setScore] = useState(0)
	const [maxValue, setMaxValue] = useState(5)
	const [minValue, setMinValue] = useState(0)
	const [show, setShow] = useState(false)
	console.log(score)

	useEffect(() => {
		const maxValue = localStorage.getItem('maxValue')
		const minValue = localStorage.getItem('minValue')
		const score = localStorage.getItem('score')

		if(score) setScore(Number(score))
		if (maxValue) setMaxValue(Number(maxValue))
		if (minValue) setMinValue(Number(minValue))
	}, []);

	useEffect(() => {
			localStorage.setItem('maxValue', `${maxValue}`)
			localStorage.setItem('minValue', `${minValue}`)
			localStorage.setItem('score', `${score}`)
	}, [minValue, maxValue, score])

	const incScore = () => {
		if (score < maxValue) setScore(prevState => prevState + 1)
	}

	const removeScore = () => setScore(minValue)
	const onChangeMaxValue = (value: number) => {
		setMaxValue(value)
	}
	const onChangeMinValue = (value: number) => {
		setMinValue(value)
		setScore(value)
	}

	const onShowHandler = () => {
		setShow(prevState => !prevState)
	}

	return (
		<div className="wrapper">
			<div className='container'>
				{
					show ? (
						<SetBlock maxValue={maxValue} minValue={minValue} onChangeMaxValue={onChangeMaxValue}
						          onChangeMinValue={onChangeMinValue}/>
					) : (
						<IncBlock minValue={minValue} maxValue={maxValue} score={score} incScore={incScore}
						          removeScore={removeScore}/>
					)
				}
				<div className='moving-block'>
					<Button callback={onShowHandler} className='btn active'>{!show ? 'Show Set Block' : 'Hide Set Block'}</Button>
				</div>
			</div>
		</div>
	)
}

export default App;
