import React, { memo } from 'react'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import { CounterSettingsT } from '../../store/reducers/counterSettingsReducer'
import { CounterValueT, IncrementCounterAC, RemoveScoreCounterAC } from '../../store/reducers/counterValueReducer'

export const IncBlock = memo(() => {
	const dispatch = useDispatch()
	const { score } = useSelector<AppRootStoreType, CounterValueT>(s => s.counterValue)
	const { minValue, maxValue } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const incScore = () => {
		if (score < maxValue) dispatch(IncrementCounterAC())
	}

	const removeScore = () => dispatch(RemoveScoreCounterAC(minValue))

	return (
		<>
			<div className={`score-block ${score >= maxValue ? 'active' : ''}`}>
				{score}
			</div>
			<div className='wrapper-score'>
				<Button callback={incScore} className={`btn ${score < maxValue ? 'active' : 'default'}`}>Inc</Button>
				<Button callback={removeScore} className={`btn ${score > minValue ? 'active' : 'default'}`}>Reset</Button>
			</div>
		</>
	)
})