import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../../store/store'
import { ChangeEvent, useEffect, useState } from 'react'
import { RemoveScoreCounterAC } from '../../../../store/reducers/counterValueReducer'
import { CounterSettingsT } from '../../../../types/types'
import { ChangeSettingOfCounterAC } from '../../../../store/reducers/counterSettingsReducer'

type InputFieldT = 'MAX' | 'MIN' | ''

type ErrorT = {
	value: boolean
	message: string
	field: InputFieldT
}

export const useSetBlock = () => {
	const dispatch = useDispatch()
	const { minValue, maxValue } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const [maxValueInput, setMaxValueInput] = useState(maxValue)
	const [minValueInput, setMinValueInput] = useState(minValue)
	const [error, setError] = useState<ErrorT>({ value: false, message: '', field: '' })

	useEffect(() => {
		setMaxValueInput(maxValue)
		setMinValueInput(minValue)
	}, [maxValue, minValue])

	const disabledSetBtn = maxValue === maxValueInput && minValue === minValueInput

	const onChangeIncBlock = () => {
		if (maxValueInput < minValueInput) {
			setError({ value: true, message: 'Max Value below Min Value', field: 'MIN' })
			return
		}

		if (maxValueInput < minValueInput) {
			setError({ value: true, message: 'Max Value below Min Value', field: 'MIN' })
			return
		}

		if (!error.value) {
			dispatch(ChangeSettingOfCounterAC({ minValue: minValueInput, maxValue: maxValueInput }))
			dispatch(RemoveScoreCounterAC(minValueInput))
		}
	}

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>, typeInput: InputFieldT) => {
		const valueOfInput = Number(e.currentTarget.value)

		if (typeInput === 'MAX' && valueOfInput < 1000000) {
			setMaxValueInput(valueOfInput)
		}
		if (typeInput === 'MIN' && valueOfInput >= 0 && valueOfInput < 1000000) {
			setMinValueInput(valueOfInput)
		}

		setError({ value: false, message: '', field: '' })
	}

	return {
		error,
		minValueInput,
		maxValueInput,
		disabledSetBtn,
		onChangeInput,
		onChangeIncBlock
	}
}
