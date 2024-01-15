import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import { Locale, i18n } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { mPlus, comfortaa } from '../fonts'
import GoToTop from './components/GoToTop'
import Footer from './components/Footer'
import Navbar from './components/Nav/Navbar'


export const metadata: Metadata = {
  title: 'Angel L. Valdés',
  description: 'My Web Developer Portfolio',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  readonly children: React.ReactNode
  readonly params: { readonly lang: Locale }
}) {
  const { nav, footer } = await getDictionary(params.lang)

  return (
    <html lang={params.lang} className={`${mPlus.variable} ${comfortaa.variable} dark font-mplus`}>
      <body className={`text-foreground container`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full"><div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full dark:bg-amber-500 bg-rose-900 dark:opacity-20 opacity-40 blur-[100px]"></div></div></div>
        <Providers>
          <header className='lg:max-w-[75%]'>
            <Navbar lang={params.lang} dictionary={nav} />
          </header>
          <main className='text-foreground mt-20 w-full lg:max-w-[75%] mx-auto'>
            {children}
            <GoToTop />
          </main>
          <Footer lang={params.lang} dictionary={{ nav, footer }} />
        </Providers>
      </body>
    </html>
  )
}

