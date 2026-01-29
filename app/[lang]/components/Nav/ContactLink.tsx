'use client'

import { Link } from "@heroui/react"

export default function ContactLink({label}: {label: string}) {
    const handleClick = (e: any) => {
        e.preventDefault()
        const contactSection = document.getElementById('contact-me')
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <Link
            color='foreground'
            href='#contact-me'
            underline="hover"
            onClick={handleClick}
        >
            {label}
        </Link>
    )
}
