'use client'

import { Link } from "@nextui-org/react"
import { usePathname } from "next/navigation"

export default function NavLink({label, href, lang, hidden, props}:any) {
    const usePath = usePathname()
    const pathname = usePath.slice(3) === '' ? '/' : usePath.slice(3)
    const path = `/${lang}${href}`

    const isHidden = () => {
        if (hidden && pathname === href) {
            return true
        }
        return false
    }
    return (
            <Link
                className={isHidden() ? "hidden": ''}
                color={pathname ===href ? 'primary' : 'foreground'} 
                href={path} 
                underline="hover" 
                {...props}>
                {label}
            </Link>
    )
}