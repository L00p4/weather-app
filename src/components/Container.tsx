import { cn } from '@/utils/cn'
import React from 'react'

type ContainerProps = {
} & React.HTMLProps<HTMLDivElement>

export default function Container(props: ContainerProps) {
    return (
        <div {...props} className={cn('w-full bg-white border rounded-xl flex py-4 shadow-sm')} />
    )
}