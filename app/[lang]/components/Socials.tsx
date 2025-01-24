import { Link, Tooltip } from "@nextui-org/react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import XIcon from "./icons/XIcon";
import { IoDocumentText } from "react-icons/io5";

export default function Socials({withEmail}:any){
    return (
        <span className={`flex ${withEmail? 'gap-2 ' :'gap-4 pl-4 sm:pl-1'} sm:pt-3 flex-wrap justify-center sm:justify-start`}>
            <Tooltip content="@alvaldes">
                <Link color='foreground' href='https://github.com/alvaldes' isExternal>
                <FaGithubSquare className='text-2xl text-gray-600 dark:text-zinc-200'/>
                </Link>
            </Tooltip>
            <Tooltip content="@alvaldes">
                <Link color='foreground' href='https://www.linkedin.com/in/alvaldes/' isExternal>
                <FaLinkedin className='text-2xl text-blue-600'/>
                </Link>
            </Tooltip>
            <Tooltip content="CV">
                <Link color='foreground' href='https://drive.google.com/file/d/1NRLFsHXhcrnLQkzjyx2DcKKFU2n95g5p/view?usp=sharing' isExternal>
                <IoDocumentText className='text-2xl text-pink-600'/>
                </Link>
            </Tooltip>
            {/* <Tooltip content="@alvaldes_">
                <div className='bg-zinc-900 dark:bg-black dark:ring-1 dark:ring-slate-700 rounded-sm w-[21px] h-[21px] mt-[1.5px] ml-0.5 mr-[1.5px] flex items-center justify-center'>
                <Link color='foreground' href='https://twitter.com/alvaldes_' isExternal className='w-[11px] h-[11px]'>
                    <XIcon/>
                </Link>
                </div>
            </Tooltip> */}
            { withEmail && (
                <Link color='foreground' href={`mailto:alvaldes.dev@gmail.com`} 
                isExternal showAnchorIcon underline='always' className='text-base'>
                    alvaldes.dev@gmail.com
                </Link>
            )}
        </span>
    )
}