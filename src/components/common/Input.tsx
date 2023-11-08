import { ChangeEvent, FC, memo } from 'react'

interface IInput {
	value: number
	type: string
	onChange: (value: number) => void
	className?: string
}

export const Input: FC<IInput> = memo(({ value, type, className, onChange }) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(parseInt(e.currentTarget.value))
	return (
		<input type={type} className={className} onChange={onChangeHandler} value={value} />
	)
})