'use client'

import { Link } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import { ReactElement } from "react"

export default function LinkItem({label, href, icon, lang, props}: {label: string, href: string, icon?: ReactElement, lang: string, props?: any}) {
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
            {icon ? <>{icon}<span className="ml-1">{label}</span></> : label}
        </Link>
    )
}