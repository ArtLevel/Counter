import { SetBlock } from '../common/SetBlock'
import { IncBlock } from '../common/IncBlock'
import { Button } from '../common/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../store/store'
import { CounterValueT } from '../../store/reducers/counterValueReducer'
import { ChangeShowOfCounterAC, CounterSettingsT } from '../../store/reducers/counterSettingsReducer'

export const CounterOne = () => {
	const dispatch = useDispatch()
	const { score } = useSelector<AppRootStoreType, CounterValueT>(s => s.counterValue)
	const { maxValue, minValue, show } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const onShowHandler = () => dispatch(ChangeShowOfCounterAC())

	return (
		<div className='wrapper'>
			<div className='container'>
				{
					show ? (
						<SetBlock />
					) : (
						<IncBlock />
					)
				}
				<div className='moving-block'>
					<Button callback={onShowHandler}
					        className='btn active'>{!show ? 'Show Set Block' : 'Hide Set Block'}</Button>
				</div>
			</div>
		</div>
	)
}