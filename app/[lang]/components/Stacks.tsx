'use client'
import { Chip } from '@heroui/react'
import { useTheme } from 'next-themes'

const Stacks = ({data}:{data:string[]}) => {
    const { theme } = useTheme()

    return (
        <ul className="flex flex-wrap justify-start">
            {data.map((stack, index) => (
                <li key={index} >
                    <Chip variant={`${theme=='dark'?'faded':"solid"}`} color="warning" size="sm" className="ml-1">
                    {stack}
                    </Chip>
                </li>
            ))}
        </ul>
    )
}

export default Stacks