import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../store/store'
import { ChangeShowOfCounterAC, CounterSettingsT } from '../../../store/reducers/counterSettingsReducer'

export const useCounterOne = () => {
	const dispatch = useDispatch()
	const { show } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const onShowHandler = () => dispatch(ChangeShowOfCounterAC())

	return { show, onShowHandler }
}
