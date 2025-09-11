import type { FC, HTMLProps, PropsWithChildren } from "react"
import { cn } from "../../utils"

interface Props extends PropsWithChildren<HTMLProps<HTMLElement>> {
	className?: string
}

export const Main:FC<Props> = ({children, className, ...props}) => {
	return (
		<main className={cn("main", className)} {...props}>
			{children}
		</main>
	)
}
