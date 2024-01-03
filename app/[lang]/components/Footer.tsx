import { Divider, Link } from "@nextui-org/react";
import Logo from "./Logo";
import SendMsg from "./SendMsg";
import { Locale } from "@/i18n.config";
import LinkItem from "./Nav/LinkItem";
import ExternalLinkItem from "./Nav/ExternalLinkItem";
import { FaGithub } from "react-icons/fa";
import Socials from "./Socials";


export default function Footer({ lang, dictionary }: { lang: Locale, dictionary:any }) {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="container">
            <Divider/>
            <div className="py-8 flex">
                <div className="flex flex-col w-1/2 gap-2">
                    <div className="mb-3"><Logo/></div>
                    <LinkItem label={dictionary.nav.home} href='/' lang={lang}/>
                    <LinkItem label={dictionary.nav.works} href='/works' lang={lang}/>
                    <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio-next'>
                        <FaGithub /><span className="ml-1" >{dictionary.nav.source}</span>
                    </ExternalLinkItem>
                    <Socials/>
                </div>
                <SendMsg dictionary={dictionary.footer}/>
            </div>

            <p className="flex justify-center flex-wrap">
                &copy; {`${currentYear} - alvaldes. ${dictionary.footer.copy1} `}
                <Link href='https://www.craftz.dog/' color="secondary" underline='hover' className='font-medium mx-1'>
                    Takuya
                </Link>
                {`${dictionary.footer.copy2}`}
            </p>
        </footer>
    )
}