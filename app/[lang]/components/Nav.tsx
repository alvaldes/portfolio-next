'use client'
import React, { useState } from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  NavbarMenuToggle, 
  NavbarMenuItem,
  NavbarMenu} from "@nextui-org/react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import LangSwitcher from "./icons/LangSwitcher";
import { FaGithub } from "react-icons/fa";
import { Locale, i18n } from "@/i18n.config";

const LinkItem = ({label, href, pathname, lang}:any) => {
  const isDefaultLang = lang === i18n.defaultLocale
  const path = isDefaultLang ? href : href === '/' ? `/${lang}`: `/${lang}${href}`
  return (
    <Link color={pathname ===path ? 'primary' : 'foreground'} href={path} underline="hover">
      {label}
    </Link>
  )
}

const ExternalLinkItem = ({children, href}:any) => {
  return (
        <Link color={'foreground'} href={href} underline="hover" isExternal>
          {children}
        </Link>
  )
}

export default function Nav({ lang, dictionary }: { lang: Locale, dictionary:any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    return (
        <Navbar disableAnimation onMenuOpenChange={setIsMenuOpen} className="px-8">
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>

          <NavbarContent>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <LinkItem label={dictionary.home} href='/' pathname={pathname} lang={lang}/>
            </NavbarItem>
            <NavbarItem>
              <LinkItem label={dictionary.works} href='/works' pathname={pathname} lang={lang}/>
            </NavbarItem>
            <NavbarItem>
              <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio-next'>
                <FaGithub /><span className="ml-1" >{dictionary.source}</span>
              </ExternalLinkItem>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
                <ThemeSwitcher/>
            </NavbarItem>
            <NavbarItem>
              <LangSwitcher/>
            </NavbarItem>
          </NavbarContent>
          
          <NavbarMenu>
            <NavbarMenuItem>
              <LinkItem label={dictionary.home} href='/' pathname={pathname} lang={lang}/>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <LinkItem label={dictionary.works} href='/works' pathname={pathname} lang={lang}/>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio-next'>
                <FaGithub /><span className="ml-1" >{dictionary.source}</span>
              </ExternalLinkItem>
            </NavbarMenuItem>
          </NavbarMenu>
        </Navbar>
      );
}
