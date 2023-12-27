'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Logo = () => {
    const [isHover, setIsHover] = useState(false);
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null

    const logo = theme!== undefined ? `/images/logo-${theme}.svg` : '/images/logo-dark.svg';

    return (
        <Link href="/" className='flex' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Image src={logo} alt="logo" width={20} height={20} className={`${isHover && 'animate-[wiggle_3s_ease-in_infinite]'}`}/>
            <p className={`font-bold ml-2 ${theme==='light'?'text-zinc-800' : 'text-blue-50'}`}>
                Angel Valdés
            </p>
        </Link>
    )
}

export default Logo
