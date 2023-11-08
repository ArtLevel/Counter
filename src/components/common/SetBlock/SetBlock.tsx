import React, { FC, memo } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { useSetBlock } from './hooks/useSetBlock'

interface ISetBlock {
}

export const SetBlock: FC<ISetBlock> = memo(() => {
	const {
		error,
		minValueInput,
		maxValueInput,
		onChangeMinValueInputHandler,
		onChangeMaxValueInputHandler,
		onChangeIncBlock
	} = useSetBlock()

	return (
		<div className='set-block'>
			<div className='set-block-active'>
				{error.errorInMaxValue || error.errorInMinValue ? <div style={{ color: 'red' }}>Incorrect value</div> : ''}
				<div>Max Value</div>
				<Input value={maxValueInput} onChange={onChangeMaxValueInputHandler} type='number'
				       className={`set-block-input ${error.errorInMaxValue ? 'error' : 'default'}`} />
				<div>Min Value</div>
				<Input value={minValueInput} onChange={onChangeMinValueInputHandler} type='number'
				       className={`set-block-input ${error.errorInMinValue ? 'error' : 'default'}`} />
				<Button callback={onChangeIncBlock}
				        className={`btn ${error.errorInMaxValue || error.errorInMinValue ? 'default' : 'active'}`}>Set</Button>
			</div>
		</div>
	)
})
