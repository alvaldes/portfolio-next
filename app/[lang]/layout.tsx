import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import Nav from './components/Nav/Nav'
import { Locale, i18n } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { mPlus } from '../fonts'
import { comfortaa } from '../fonts'
import GoToTop from './components/GoToTop'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Angel L. Valdés',
  description: 'My Web Developer Portfolio',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params: {lang}
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { nav, footer } = await getDictionary(lang)

  const goTop = () => {

  }

  return (
    <html lang={lang} className={`${mPlus.variable} ${comfortaa.variable} dark font-mplus`}>
      <body className={`text-foreground bg-background`}>
        <Providers>
          <header>
            <Nav lang={lang} dictionary={nav}/>
          </header>
          <main className='text-foreground bg-background'>
            {children}
            <GoToTop/>
          </main>
          <Footer lang={lang} dictionary={{nav, footer}}/>
        </Providers>
      </body>
    </html>
  )
}
