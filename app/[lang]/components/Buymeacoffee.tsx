'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Buymeacoffee = ({label}:any) => {
    const { theme } = useTheme()

    const qr = `/images/buymeacoffee_QR.png`;

    return (
        <Link
            href="https://buymeacoffee.com/alvaldesde6"
            aria-label="Buy me a coffee"
            target='_blank'
            className="relative flex w-fit sm:mr-4 group rounded-lg overflow-hidden"
        >
            <Image
                src={qr}
                alt="Buy me a coffee QR code"
                width={112}
                height={112}
                loading="lazy"
                className="w-28 h-28 opacity-100 transition duration-500 group-hover:opacity-20"
            />
            
            <span className={`absolute inset-0 flex items-center justify-center p-1 text-center break-words ${theme==='light'?'text-black bg-background bg-opacity-55' : 'text-white bg-black bg-opacity-75'} text-xs font-black underline opacity-0 transition duration-500 group-hover:opacity-100`}>
                {label}
            </span>
        </Link>
    )
}