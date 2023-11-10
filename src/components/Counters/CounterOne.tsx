import { SetBlock } from '../common/SetBlock/SetBlock'
import { IncBlock } from '../common/IncBlock/IncBlock'
import React, { memo } from 'react'
import { useCounterOne } from './hooks/useCounterOne'
import { ButtonStyled } from '../../styledComponents/Button.styled'
import styled from 'styled-components'
import { ContainerStyled } from '../../styledComponents/Container.styled'

export const CounterOne = memo(() => {
	const { show, onShowHandler } = useCounterOne()

	const titleButton = !show ? 'Show Set Block' : 'Hide Set Block'
	const showBlock = show
		? <SetBlock />
		: <IncBlock />

	return (
		<ContainerStyled>
			<CounterOneStyled>
				{showBlock}
				<MovingBlock>
					<ButtonStyled onClick={onShowHandler}>
						{titleButton}
					</ButtonStyled>
				</MovingBlock>
			</CounterOneStyled>
		</ContainerStyled>
	)
})

const CounterOneStyled = styled.div`
  width: 40%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;

  border-radius: 5px;
  border: 2px solid cornflowerblue;
`
const MovingBlock = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`