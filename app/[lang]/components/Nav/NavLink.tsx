'use client'

import { Link, NavbarItem } from "@nextui-org/react"
import { usePathname } from "next/navigation"

export default function NavLink({label, href, lang, props}:any) {
    const usePath = usePathname()
    const pathname = usePath.slice(3) === '' ? '/' : usePath.slice(3)
    const path = `/${lang}${href}`
    return (
        <NavbarItem className={pathname === href ? "hidden": ''}>
            <Link
                color={pathname ===href ? 'primary' : 'foreground'} 
                href={path} 
                underline="hover" 
                {...props}>
                {label}
            </Link>
        </NavbarItem>
    )
}