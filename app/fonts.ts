import { Comfortaa } from 'next/font/google';
import localFont from 'next/font/local'


export const mPlus = localFont({
    src: [
        {
            path: './fonts/mplus/MPLUSRounded1c-Thin.ttf',
            weight: '100',
            style: 'normal',
          },
        {
          path: './fonts/mplus/MPLUSRounded1c-Light.ttf',
          weight: '300',
          style: 'normal',
        },
        {
          path: './fonts/mplus/MPLUSRounded1c-Regular.ttf',
          weight: '400',
          style: 'normal',
        },
        {
          path: './fonts/mplus/MPLUSRounded1c-Medium.ttf',
          weight: '500',
          style: 'normal',
        },
        {
          path: './fonts/mplus/MPLUSRounded1c-Bold.ttf',
          weight: '700',
          style: 'normal',
        },
        {
          path: './fonts/mplus/MPLUSRounded1c-ExtraBold.ttf',
          weight: '800',
          style: 'normal',
        },
        {
          path: './fonts/mplus/MPLUSRounded1c-Black.ttf',
          weight: '900',
          style: 'normal',
        },
      ],
    display: 'swap',
    variable: '--font-m-plus',
})

export const comfortaa = localFont({
    src: [
        {
          path: './fonts/comfortaa/Comfortaa-Light.ttf',
          weight: '300',
          style: 'normal',
        },
        {
          path: './fonts/comfortaa/Comfortaa-Regular.ttf',
          weight: '400',
          style: 'normal',
        },
        {
          path: './fonts/comfortaa/Comfortaa-Medium.ttf',
          weight: '500',
          style: 'normal',
        },
        {
          path: './fonts/comfortaa/Comfortaa-SemiBold.ttf',
          weight: '600',
          style: 'normal',
        },
        {
          path: './fonts/comfortaa/Comfortaa-Bold.ttf',
          weight: '700',
          style: 'normal',
        },
      ],
    display: 'swap',
    variable: '--font-comfortaa',
})