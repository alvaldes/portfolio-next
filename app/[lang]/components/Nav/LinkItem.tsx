'use client'

import { i18n } from "@/i18n.config"
import { Link } from "@nextui-org/react"
import { usePathname } from "next/navigation"

export default function LinkItem({label, href, lang, props}:any) {
    const pathname = usePathname()
    const isDefaultLang = lang === i18n.defaultLocale
    const path = isDefaultLang ? href : href === '/' ? `/${lang}`: `/${lang}${href}`
    return (
        <Link
            color={pathname ===path ? 'primary' : 'foreground'} 
            href={path} 
            underline="hover" 
            className={pathname === path ? "hidden": ''}
            {...props}>
            {label}
        </Link>
    )
}