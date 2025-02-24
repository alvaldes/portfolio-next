'use client'
import React from "react";
import Logo from "../Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import LangSwitcher from "./LangSwitcher";
import { FaGithub } from "react-icons/fa";
import { Locale } from "@/i18n.config";
import LinkItem from "./LinkItem";
import ExternalLinkItem from "./ExternalLinkItem";
import NavLink from "./NavLink";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar({ lang, dictionary }: { lang: Locale, dictionary:any }) {
    return (
      <nav className="bg-transparent fixed w-full z-20 top-0 start-0 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between p-4  w-full lg:max-w-[75%] mx-auto">
          <div>
            <Logo />
          </div>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="flex gap-2">
                <ThemeSwitcher/>
                <LangSwitcher/>
              </div>
              <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button
                    isIconOnly
                    variant="bordered" 
                    size="sm"
                    className="md:hidden p-1"
                  >
                    <Bars3Icon width="640" height="480"/>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                  <DropdownItem key={dictionary.home} href='/' as={Link}>
                    <NavLink label={dictionary.home} href='/' lang={lang}/>
                  </DropdownItem>
                  <DropdownItem key={dictionary.works} href='/works' as={Link}>
                    <NavLink label={dictionary.works} href='/works' lang={lang}/>
                  </DropdownItem>
                  <DropdownItem key={dictionary.contact} href='#contact-me' as={Link}>
                    <NavLink label={dictionary.contact} href='#contact-me' lang={lang}/>
                  </DropdownItem>
                  <DropdownItem key={dictionary.source} className="text-danger" color="danger" href='https://github.com/alvaldes/portfolio-next'>
                    <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio-next'>
                      <FaGithub /><span className="ml-1" >{dictionary.source}</span>
                    </ExternalLinkItem>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </div>
          <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}>
            <div className="flex p-4 md:p-0 gap-8">
              <LinkItem label={dictionary.home} href='/' lang={lang} key={`${dictionary.home}-0`}/>
              <LinkItem label={dictionary.works} href='/works' lang={lang} key={`${dictionary.works}-1`}/>
              <LinkItem label={dictionary.contact} href='#contact-me' lang={lang} key={`${dictionary.contact}-2`}/>
              <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio-next' key={`${dictionary.source}-3`}>
                <FaGithub /><span className="ml-1" >{dictionary.source}</span>
              </ExternalLinkItem>
            </div>
          </div>
        </div>
      </nav>
      );
}
