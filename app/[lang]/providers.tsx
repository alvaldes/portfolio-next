'use client'

import {HeroUIProvider} from "@heroui/react";
import {ThemeProvider as NextThemeProvider} from "next-themes"
import { useRouter } from "next/navigation";


export default function Providers({children}: {children:React.ReactNode}) {
  const router = useRouter();
    return (
      <HeroUIProvider navigate={router.push}>
        <NextThemeProvider
            attribute="class"
            defaultTheme="dark"
            themes={['light', 'dark']}>
            {children}
        </NextThemeProvider>
      </HeroUIProvider>
    );
  }
  