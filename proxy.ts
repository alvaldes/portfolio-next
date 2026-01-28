import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '@/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return locale
}

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if the pathname already has a valid locale
    const hasValidLocale = i18n.locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // If the pathname doesn't have a valid locale, add the default prefix
    if (!hasValidLocale) {
        const locale = getLocale(request) ?? i18n.defaultLocale

        return NextResponse.redirect(
        new URL(
            `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
            request.url
        )
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}