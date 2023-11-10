import React, { memo } from 'react'
import { useIncBlock } from './hooks/useIncBlock'
import { ButtonStyled } from '../../../styledComponents/Button.styled'

export const IncBlock = memo(() => {
	const { score, maxValue, minValue, incScore, removeScore } = useIncBlock()

	const disabledIncBtn = score >= maxValue
	const disabledResetBtn = score === 0 || score === minValue

	return (
		<>
			<div className={`score-block ${score >= maxValue ? 'active' : ''}`}>
				{score}
			</div>
			<div className='wrapper-score'>
				<ButtonStyled onClick={incScore} disabled={disabledIncBtn}>Inc</ButtonStyled>
				<ButtonStyled onClick={removeScore} disabled={disabledResetBtn}>Reset</ButtonStyled>
			</div>
		</>
	)
})