import React, { FC, memo } from 'react'
import { useSetBlock } from './hooks/useSetBlock'
import { InputStyled } from '../../../styledComponents/Input.styled'
import { ButtonStyled } from '../../../styledComponents/Button.styled'
import styled from 'styled-components'

interface ISetBlock {
}

export const SetBlock: FC<ISetBlock> = memo(() => {
	const {
		error,
		minValueInput,
		maxValueInput,
		disabledSetBtn,
		onChangeInput,
		onChangeIncBlock
	} = useSetBlock()

	return (
		<SetBlockStyled>
			<SetBlockActive>
				<ErrorBlock>{error.value && error.message}</ErrorBlock>
				<SetBlockTitle>Max Value</SetBlockTitle>
				<InputStyled value={maxValueInput} onChange={(e) => onChangeInput(e, 'MAX')} error={error.field === 'MAX'} />
				<SetBlockTitle>Min Value</SetBlockTitle>
				<InputStyled value={minValueInput} onChange={(e) => onChangeInput(e, 'MIN')} error={error.field === 'MIN'}
				/>
				<ButtonStyled onClick={onChangeIncBlock} disabled={error.value || disabledSetBtn}
				>Set</ButtonStyled>
			</SetBlockActive>
		</SetBlockStyled>
	)
})

const SetBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const SetBlockActive = styled.div`
  width: 100%;
	
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  color: white;
`

const SetBlockTitle = styled.h3`
  margin: 0;
`

const ErrorBlock = styled.div`
  min-height: 50px;

  color: red;
`