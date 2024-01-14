'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Logo = ({noText}:any) => {
    const [isHover, setIsHover] = useState(false);
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null

    const logo = theme!== undefined ? `/images/logo-${theme}.svg` : '/images/logo-dark.svg';

    return (
        <Link href="/" className='flex w-fit sm:mr-4' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Image src={logo} alt="logo" width={20} height={24} className={`${isHover ? 'animate-flip_up': 'animate-flip_down' } w-5 h-6`}/>
            <p className={`font-bold ml-2 ${theme==='light'?'text-zinc-800' : 'text-blue-50'} ${noText && 'hidden sm:flex'}`}>
                Angel Valdés
            </p>
        </Link>
    )
}

export default Logo
