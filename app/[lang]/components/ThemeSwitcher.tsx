'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/button'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/16/solid'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  /* eslint-disable react-hooks/rules-of-hooks */
  const useThemeValue = (light:any, dark:any) => {
    return theme === 'light' ? light : dark
  }

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light')
  }

  return (
      <Button isIconOnly className={`${useThemeValue('bg-purple-800 text-white','bg-yellow-400 text-black')} p-1.5`} size='sm' aria-label='theme-toggle' onClick={toggleTheme}>
        {useThemeValue(<MoonIcon/>,<SunIcon/>)}
      </Button>
  )
}