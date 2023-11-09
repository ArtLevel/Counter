import { SetBlock } from '../common/SetBlock/SetBlock'
import { IncBlock } from '../common/IncBlock/IncBlock'
import { Button } from '../common/Button'
import React, { memo } from 'react'
import { useCounterOne } from './hooks/useCounterOne'

export const CounterOne = memo(() => {
	const { show, onShowHandler } = useCounterOne()

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
