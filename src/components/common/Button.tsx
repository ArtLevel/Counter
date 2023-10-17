import { FC, memo, ReactNode } from 'react'

interface IButton {
	callback: () => void
	children: ReactNode
	className?: string
}

export const Button: FC<IButton> = memo((props) => {
	const { callback, children, className } = props

	return (
		<button onClick={callback} className={className}>{children}</button>
	)
})