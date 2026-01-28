'use client'

import { Button } from '@heroui/react'
import SpainIcon from '../icons/SpainIcon'
import AmericanIcon from '../icons/AmericanIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'

export default function LangSwitcher() {
  const pathName = usePathname()
  const currentLocale = pathName.split('/')[1];

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  )

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName
      return `/${locale}${pathName}`
    } else {
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }
  }

  if (currentLocale !== i18n.defaultLocale && !pathnameIsMissingLocale){
    return (
      <Button as={Link} href={redirectedPathName('en')} isIconOnly className='bg-indigo-200 text-black p-1.5' size='sm' aria-label='theme-toggle'>
        <AmericanIcon/>
      </Button>
  )
  } else {
    return (
      <Button as={Link} href={redirectedPathName('es')} isIconOnly className='bg-amber-600 text-white p-1.5' size='sm' aria-label='theme-toggle'>
        <SpainIcon/>
      </Button>
  )
  }
}