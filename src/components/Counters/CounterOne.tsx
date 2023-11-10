import { SetBlock } from '../common/SetBlock/SetBlock'
import { IncBlock } from '../common/IncBlock/IncBlock'
import { Button } from '../common/Button'
import React, { memo, useEffect } from 'react'
import { useCounterOne } from './hooks/useCounterOne'
import { useDispatch } from 'react-redux'
import { setCounterValueFromLocalStorage } from '../../store/reducers/counterValueReducer'

export const CounterOne = memo(() => {
	const { show, onShowHandler } = useCounterOne()
	const dispatch = useDispatch()

	useEffect(() => {
		// @ts-ignore
		dispatch(setCounterValueFromLocalStorage())
	}, [])

	return (
		<div className='wrapper'>
			<div className='container'>
				{
					show
						? <SetBlock />
						: <IncBlock />
				}
				<div className='moving-block'>
					<Button callback={onShowHandler}
					        className='btn active'>{!show ? 'Show Set Block' : 'Hide Set Block'}</Button>
				</div>
			</div>
		</div>
	)
})
