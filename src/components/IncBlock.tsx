import React, {FC} from 'react';
import {Input} from './Input';
import {Button} from './Button';

interface IIncBlock {
	minValue: number
	maxValue: number
	score: number
	incScore: () => void
	removeScore: () => void
}

export const IncBlock: FC<IIncBlock> = (props) => {
	const {score, maxValue, incScore, removeScore, minValue, ...restProps} = props

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
}