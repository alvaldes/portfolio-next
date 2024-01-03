'use client'

import { i18n } from "@/i18n.config"
import { Link } from "@nextui-org/react"
import { usePathname } from "next/navigation"

export default function LinkItem({label, href, lang, props}:any) {
    const usePath = usePathname()
    const pathname = usePath.slice(3) === '' ? '/' : usePath.slice(3)
    const path = `/${lang}${href}`
    return (
        <Link
            color={pathname ===href ? 'primary' : 'foreground'} 
            href={path} 
            underline="hover" 
            className={pathname === href ? "hidden": ''}
            {...props}>
            {label}
        </Link>
    )
}