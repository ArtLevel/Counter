import React, {useEffect, useState} from 'react';

import {SetBlock} from './components/SetBlock';
import {IncBlock} from './components/IncBlock';
import './App.css';

function App() {
	const [score, setScore] = useState(0)
	const [maxValue, setMaxValue] = useState(5)
	const [minValue, setMinValue] = useState(0)

	useEffect(() => {
		const maxValue = localStorage.getItem('maxValue')
		const minValue = localStorage.getItem('minValue')
		if(maxValue) {
			setMaxValue(parseInt(maxValue))
		}
		if(minValue) {
			setMinValue(parseInt(minValue))
			setScore(parseInt(minValue))
		}
	}, [])

	const incScore = () => {
		if (score < maxValue) setScore(prevState => prevState + 1)
	}

	const removeScore = () => setScore(minValue)
	const onChangeMaxValue = (value: number) => {
		localStorage.setItem('maxValue', `${value}`)
		setMaxValue(value)
	}
	const onChangeMinValue = (value: number) => {
		localStorage.setItem('minValue', `${value}`)
		setMinValue(value)
		setScore(value)
	}

	return (
		<div className="wrapper">
			<div className='container'>
				<IncBlock minValue={minValue} maxValue={maxValue} score={score} incScore={incScore} removeScore={removeScore}/>
				<div className='set-block'>
					<SetBlock maxValue={maxValue} minValue={minValue} onChangeMaxValue={onChangeMaxValue}
					          onChangeMinValue={onChangeMinValue}/>
				</div>
			</div>
		</div>
	)
}

export default App;
