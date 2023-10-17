import React, { FC, memo, useEffect, useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import {
	ChangeMaxValueOfCounterAC,
	ChangeMinValueOfCounterAC,
	CounterSettingsT
} from '../../store/reducers/counterSettingsReducer'
import { RemoveScoreCounterAC } from '../../store/reducers/counterValueReducer'

interface ISetBlock {
}

export const SetBlock: FC<ISetBlock> = memo(() => {
	const dispatch = useDispatch()
	const { minValue, maxValue } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const [maxValueInput, setMaxValueInput] = useState(maxValue)
	const [minValueInput, setMinValueInput] = useState(minValue)
	const [error, setError] = useState({
		errorInMaxValue: false,
		errorInMinValue: false
	})

	useEffect(() => {
		setMaxValueInput(maxValue)
		setMinValueInput(minValue)
	}, [maxValue, minValue])

	const onChangeIncBlock = () => {
		if (!error.errorInMaxValue && !error.errorInMinValue) {
			dispatch(ChangeMaxValueOfCounterAC(maxValueInput))
			dispatch(ChangeMinValueOfCounterAC(minValueInput))
			dispatch(RemoveScoreCounterAC(minValueInput))
		}
	}

	const onChangeMaxValueInputHandler = (value: number) => {
		if (value > minValueInput && value > 0) {
			if (value < 1000000) setMaxValueInput(value)
			setError(prevState => ({ ...prevState, errorInMaxValue: false }))
			if (minValue < value && minValue >= 0) {
				setError({ errorInMaxValue: false, errorInMinValue: false })
			}
			return
		}
		if (value < 1000000) setMaxValueInput(value)
		setError(prevState => ({ ...prevState, errorInMaxValue: true }))
	}

	const onChangeMinValueInputHandler = (value: number) => {
		if (value < maxValueInput && value >= 0) {
			if (value < 1000000) setMinValueInput(value)
			setError(prevState => ({ ...prevState, errorInMinValue: false }))
			if (maxValue > value && maxValue > 0) {
				setError({ errorInMaxValue: false, errorInMinValue: false })
			}
			return
		}
		if (value < 1000000) setMinValueInput(value)
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
})
