'use client'
import React, { useState } from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenuItem,
  NavbarMenu} from "@nextui-org/react";
import Logo from "../Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import LangSwitcher from "./LangSwitcher";
import { FaGithub } from "react-icons/fa";
import { Locale, i18n } from "@/i18n.config";
import LinkItem from "./LinkItem";
import ExternalLinkItem from "./ExternalLinkItem";

export default function Nav({ lang, dictionary }: { lang: Locale, dictionary:any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="sm:px-8" shouldHideOnScroll>
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
              <LinkItem label={dictionary.home} href='/' lang={lang}/>
              <LinkItem label={dictionary.works} href='/works' lang={lang}/>
            </NavbarItem>
            <NavbarItem>
              <LinkItem label={dictionary.contact} href='#contact-me' lang={lang}/>
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
              <LinkItem label={dictionary.home} href='/' lang={lang}/>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <LinkItem label={dictionary.works} href='/works' lang={lang}/>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <LinkItem label={dictionary.contact} href='#contact-me' lang={lang}/>
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
