import { SetBlock } from '../common/SetBlock/SetBlock'
import { IncBlock } from '../common/IncBlock/IncBlock'
import React, { memo, useEffect } from 'react'
import { useCounterOne } from './hooks/useCounterOne'
import { useDispatch } from 'react-redux'
import { setCounterValueFromLocalStorage } from '../../store/reducers/counterValueReducer'
import { ButtonStyled } from '../../styledComponents/Button.styled'

export const CounterOne = memo(() => {
	const { show, onShowHandler } = useCounterOne()
	const dispatch = useDispatch()

	useEffect(() => {
		// @ts-ignore
		dispatch(setCounterValueFromLocalStorage())
	}, [])

	const titleButton = !show ? 'Show Set Block' : 'Hide Set Block'
	const showBlock = show
		? <SetBlock />
		: <IncBlock />


	return (
		<div className='wrapper'>
			<div className='container'>
				{showBlock}
				<div className='moving-block'>
					<ButtonStyled onClick={onShowHandler}>
						{titleButton}
					</ButtonStyled>
				</div>
			</div>
		</div>
	)
})
