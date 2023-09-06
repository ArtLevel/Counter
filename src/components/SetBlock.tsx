import React, { FC, useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

interface ISetBlock {
	minValue: number
	maxValue: number
	onChangeMinValue: (value: number) => void
	onChangeMaxValue: (value: number) => void
}

export const SetBlock: FC<ISetBlock> = ({ onChangeMaxValue, maxValue, minValue, onChangeMinValue }) => {
	const [maxValueInput, setMaxValueInput] = useState(maxValue)
	const [minValueInput, setMinValueInput] = useState(minValue)
	const [error, setError] = useState({
		errorInMaxValue: false,
		errorInMinValue: false
	})

	const onChangeIncBlock = () => {
		if (!error.errorInMaxValue && !error.errorInMinValue) {
			onChangeMaxValue(maxValueInput)
			onChangeMinValue(minValueInput)
		}
	}

	const onChangeMaxValueInputHandler = (value: number) => {
		if (value > minValueInput && value > 0) {
			setMaxValueInput(value)
			setError(prevState => ({ ...prevState, errorInMaxValue: false }))
			if (minValue < value && minValue > 0) {
				setError({ errorInMaxValue: false, errorInMinValue: false })
			}
			return
		}
		setMaxValueInput(value)
		setError(prevState => ({ ...prevState, errorInMaxValue: true }))
	}

	const onChangeMinValueInputHandler = (value: number) => {
		if (value < maxValueInput && value >= 0) {
			setMinValueInput(value)
			setError(prevState => ({ ...prevState, errorInMinValue: false }))
			if (maxValue > value && maxValue > 0) {
				setError({ errorInMaxValue: false, errorInMinValue: false })
			}
			return
		}
		setMinValueInput(value)
		setError(prevState => ({ ...prevState, errorInMinValue: true }))
	}

	return (
		<div className='set-block'>
			<div className='set-block-active'>
				{error.errorInMaxValue || error.errorInMinValue ? <div style={{ color: 'red' }}>Incorrect value</div> : ''}
				<div>Max Value</div>
				<Input value={maxValueInput} onChange={onChangeMaxValueInputHandler} type='number'
				       className={`set-block-input ${error.errorInMaxValue ? 'error' : 'default'}`} />
				<div>Min Value</div>
				<Input value={minValueInput} onChange={onChangeMinValueInputHandler} type='number'
				       className={`set-block-input ${error.errorInMinValue ? 'error' : 'default'}`} />
				<Button callback={onChangeIncBlock}
				        className={`btn ${error.errorInMaxValue || error.errorInMinValue ? 'default' : 'active'}`}>Set</Button>
			</div>
		</div>
	)
}
