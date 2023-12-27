'use client'

import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemeProvider} from "next-themes"
import { useRouter } from "next/navigation";


export default function Providers({children}: {children:React.ReactNode}) {
  const router = useRouter();
    return (
      <NextUIProvider navigate={router.push}>
        <NextThemeProvider
            attribute="class"
            defaultTheme="dark"
            themes={['light', 'dark']}>
            {children}
        </NextThemeProvider>
      </NextUIProvider>
    );
  }
  