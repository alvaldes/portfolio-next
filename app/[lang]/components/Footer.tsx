'use client'

import { Divider, Link } from "@heroui/react";
import Logo from "./Logo";
import SendMsg from "./SendMsg";
import { Locale } from "@/i18n.config";
import LinkItem from "./Nav/LinkItem";
import ExternalLinkItem from "./Nav/ExternalLinkItem";
import { FaGithub, FaHome, FaBriefcase } from "react-icons/fa";
import Socials from "./Socials";
import { Buymeacoffee } from "./Buymeacoffee";
import {usePathname} from "next/navigation";


export default function Footer({ lang, dictionary }: { lang: Locale, dictionary:any }) {
    const usePath = usePathname()
    const pathname = usePath.slice(3) === '' ? '/' : usePath.slice(3)
    return (
        <footer className="container w-full lg:max-w-[75%] mx-auto">
            <Divider/>
            <div className="sm:container py-8 flex flex-col-reverse sm:flex-row">
                <div className="flex flex-col sm:w-1/2 pb-4 sm:pb-0">
                    <div className="flex gap-4 pl-4 text-xs justify-center sm:flex-col sm:gap-0 sm:pl-0 sm:text-base sm:justify-start">
                        <div className="mb-0 hidden sm:flex sm:mb-3 mt-1"><Logo noText/></div>
                        <LinkItem label={dictionary.nav.home} href='/' lang={lang} icon={<FaHome />} />
                        <LinkItem label={dictionary.nav.works} href='/works' lang={lang} icon={<FaBriefcase />} />
                        <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio'>
                            <FaGithub /><span className="ml-1" >{dictionary.nav.source}</span>
                        </ExternalLinkItem>
                    </div>
                    <Socials cv_url={dictionary.home.cv_url}/>
                    <div className={`${pathname === '/' ? "mt-6 sm:mt-4": 'mt-3 sm:mt-3'} flex gap-4 pl-4 text-xs justify-center sm:flex-col sm:gap-0 sm:pl-0 sm:text-base sm:justify-start`}>
                        <Buymeacoffee label={dictionary.footer.buyMeACoffee}/>
                    </div>
                </div>
                <SendMsg dictionary={dictionary.footer}/>
            </div>

            <p className="flex justify-center flex-wrap mb-2">
                {dictionary.footer.copy1}
                <Link href='https://www.craftz.dog/' color="secondary" underline='hover' className='font-medium mx-1'>
                    Takuya
                </Link>
                {`${dictionary.footer.copy2}`}
            </p>
        </footer>
    )
}
