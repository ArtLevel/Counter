import React, { memo } from 'react'
import { useIncBlock } from './hooks/useIncBlock'
import { ButtonStyled } from '../../../styledComponents/Button.styled'
import styled, { css } from 'styled-components'

export const IncBlock = memo(() => {
	const { score, maxValue, minValue, incScore, removeScore } = useIncBlock()

	const disabledIncBtn = score >= maxValue
	const disabledResetBtn = score === 0 || score === minValue

	return (
		<IncBlockStyled>
			<ScoreBlock error={score === maxValue}>
				{score}
			</ScoreBlock>
			<WrapperScore>
				<ButtonStyled onClick={incScore} disabled={disabledIncBtn}>Inc</ButtonStyled>
				<ButtonStyled onClick={removeScore} disabled={disabledResetBtn}>Reset</ButtonStyled>
			</WrapperScore>
		</IncBlockStyled>
	)
})

const IncBlockStyled = styled.div``

interface IScoreBlock {
	error?: boolean
}

const ScoreBlock = styled.div<IScoreBlock>`
  display: flex;
  justify-content: center;

  padding: 20px;

  color: white;
  border-radius: 5px;
  background-color: cornflowerblue;

  ${props => props.error && css<IScoreBlock>`
    color: red;
  `}
`

const WrapperScore = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 50px;

  gap: 20px;
`