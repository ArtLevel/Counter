import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import { Button } from '../common/Button'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import { ChangeShowOfCounterAC, CounterSettingsT } from '../../store/reducers/counterSettingsReducer'

export const CounterOne = memo(() => {
	const dispatch = useDispatch()
	const { show } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const onShowHandler = () => dispatch(ChangeShowOfCounterAC())

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