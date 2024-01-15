import { Comfortaa, M_PLUS_Rounded_1c } from 'next/font/google';

export const mPlus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-m-plus'
})

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-comfortaa'
})