import React, { FC, memo } from 'react'
import { useSetBlock } from './hooks/useSetBlock'
import { InputStyled } from '../../../styledComponents/Input.styled'
import { ButtonStyled } from '../../../styledComponents/Button.styled'

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

	const errorBlock = error.value ? <div style={{ color: 'red' }}>{error.message}</div> : ''

	return (
		<div className='set-block'>
			<div className='set-block-active'>
				{errorBlock}
				<div>Max Value</div>
				<InputStyled value={maxValueInput} onChange={(e) => onChangeInput(e, 'MAX')} error={error.field === 'MAX'} />
				<div>Min Value</div>
				<InputStyled value={minValueInput} onChange={(e) => onChangeInput(e, 'MIN')} error={error.field === 'MIN'}
				/>
				<ButtonStyled onClick={onChangeIncBlock} disabled={error.value || disabledSetBtn}
				>Set</ButtonStyled>
			</div>
		</div>
	)
})
