import { Link, Tooltip } from "@nextui-org/react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import XIcon from "./icons/XIcon";

export default function Socials({withEmail}:any){
    return (
        <span className='flex gap-2 sm:pt-3 flex-wrap justify-evenly sm:justify-start'>
            <Tooltip content="@alvaldes">
                <Link color='foreground' href='https://github.com/alvaldes' isExternal>
                <FaGithubSquare className='text-2xl text-gray-600 dark:text-gray-500'/>
                </Link>
            </Tooltip>
            <Tooltip content="@alvaldes">
                <Link color='foreground' href='https://www.linkedin.com/in/alvaldes/' isExternal>
                <FaLinkedin className='text-2xl text-blue-600'/>
                </Link>
            </Tooltip>
            <Tooltip content="@alvaldes_">
                <Link color='foreground' href='https://www.instagram.com/alvaldes_' isExternal>
                <FaInstagramSquare className='text-2xl text-pink-600'/>
                </Link>
            </Tooltip>
            <Tooltip content="@alvaldes_">
                <div className='bg-zinc-900 dark:bg-black dark:ring-1 dark:ring-slate-700 rounded-sm w-[21px] h-[21px] mt-[1.5px] ml-0.5 mr-[1.5px] flex items-center justify-center'>
                <Link color='foreground' href='https://twitter.com/alvaldes_' isExternal className='w-[11px] h-[11px]'>
                    <XIcon/>
                </Link>
                </div>
            </Tooltip>
            { withEmail && (
                <Link color='foreground' href={`mailto:angelluis2605@gmail.com`} 
                isExternal showAnchorIcon underline='always' className='text-base'>
                    angelluis2605@gmail.com
                </Link>
            )}
        </span>
    )
}