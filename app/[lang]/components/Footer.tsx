import { Divider, Link } from "@nextui-org/react";
import Logo from "./Logo";
import SendMsg from "./SendMsg";
import { Locale } from "@/i18n.config";
import LinkItem from "./Nav/LinkItem";
import ExternalLinkItem from "./Nav/ExternalLinkItem";
import { FaGithub } from "react-icons/fa";
import Socials from "./Socials";
import { Buymeacoffee } from "./Buymeacoffee";


export default function Footer({ lang, dictionary }: { lang: Locale, dictionary:any }) {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="container">
            <Divider/>
            <div className="sm:container py-8 flex flex-col-reverse sm:flex-row">
                <div className="flex flex-col sm:w-1/2 gap-2 pb-4 sm:pb-0">
                    <div className="flex gap-4 pl-4 text-xs justify-center sm:flex-col sm:gap-0 sm:pl-0 sm:text-base sm:justify-start">
                        <div className="mb-0 sm:mb-3 mt-1 flex"><Logo noText/></div>
                        <LinkItem label={dictionary.nav.home} href='/' lang={lang}/>
                        <LinkItem label={dictionary.nav.works} href='/works' lang={lang}/>
                        <ExternalLinkItem label="Source Code" href='https://github.com/alvaldes/portfolio-next'>
                            <FaGithub /><span className="ml-1" >{dictionary.nav.source}</span>
                        </ExternalLinkItem>
                    </div>
                    <Socials/>
                    <div className="mb-0 sm:mb-3 mt-1 flex"><Buymeacoffee/></div>
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