import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../../store/store'
import {
	ChangeMaxValueOfCounterAC,
	ChangeMinValueOfCounterAC,
	CounterSettingsT
} from '../../../../store/reducers/counterSettingsReducer'
import { useEffect, useState } from 'react'
import { RemoveScoreCounterAC } from '../../../../store/reducers/counterValueReducer'

export const useSetBlock = () => {
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

	return {
		error,
		minValueInput,
		maxValueInput,
		onChangeMinValueInputHandler,
		onChangeMaxValueInputHandler,
		onChangeIncBlock
	}
}
