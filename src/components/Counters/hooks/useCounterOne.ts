import { useDispatch, useSelector } from 'react-redux'
import { AppRootStoreType } from '../../../store/store'
import { CounterSettingsT } from '../../../types/types'
import { ChangeSettingOfCounterAC } from '../../../store/reducers/counterSettingsReducer'

export const useCounterOne = () => {
	const dispatch = useDispatch()
	const { show } = useSelector<AppRootStoreType, CounterSettingsT>(s => s.counterSettings)

	const onShowHandler = () => {
		dispatch(ChangeSettingOfCounterAC({ show: !show }))
	}

	return { show, onShowHandler }
}
