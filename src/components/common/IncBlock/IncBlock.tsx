import React, { memo } from 'react'
import { Button } from '../Button'
import { useIncBlock } from './hooks/useIncBlock'

export const IncBlock = memo(() => {
	const { score, minValue, maxValue, incScore, removeScore } = useIncBlock()

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