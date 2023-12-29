import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Badge, Button, Divider, Link, Tooltip } from '@nextui-org/react'
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import TimeLine from './components/TimeLine'
import ResponsiveTimeline from './components/ResponsiveTimeline'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import XIcon from './components/icons/XIcon'

const timeline = [
  {
    date: "2021 to Present",
    info: "Working on Gentalia",
  },
  {
    date: "Jan 2021",
    info: "Strat workin as a Specialis at Cujae University",
  },
  {
    date: "Dec 2021",
    info: "Finish my studies as Software Engineer at UCI University",
  },
]

export default async function Home({
  params: { lang }
} : {
  params: { lang: Locale }
}) {
  const { home } = await getDictionary(lang)
  return (
      <article className='container flex flex-col'>
      <section className='flex flex-col gap-4 mt-3 container'>
        <Image src="/images/banner.svg" alt="banner" width={300} height={300} className='self-center'/>

        <span className='py-3 px-11 text-center dark:bg-white/10 bg-black/5 rounded-md'>{home.banner}</span>

        <div className='flex justify-evenly py-2'>
          <div className='flex flex-col self-start gap-1 items-start justify-start mt-12'>
            <h1 className='text-3xl'>{home.name}</h1>
            <Badge content={home.experience} color="warning" variant="solid" placement="top-right" shape="rectangle">
              <h2 className='text-lg pr-12'>{home.description}</h2>
            </Badge>
            <span className='flex gap-2 pt-3'>
              <Tooltip content="@alvaldes">
                <Link color='foreground' href='/' isExternal>
                  <FaLinkedin className='text-2xl text-blue-600'/>
                </Link>
              </Tooltip>
              <Tooltip content="@alvaldes">
                <Link color='foreground' href='/' isExternal>
                  <FaGithubSquare className='text-2xl text-gray-400'/>
                </Link>
              </Tooltip>
              <Tooltip content="@alvaldes">
                <Link color='foreground' href='/' isExternal>
                  <FaInstagramSquare className='text-2xl text-pink-600'/>
                </Link>
              </Tooltip>
              <Tooltip content="@alvaldes_">
                <Link color='foreground' href='/' isExternal className='w-5 h-5 pt-1'>
                  <XIcon className='w-1 h-1'/>
                </Link>
              </Tooltip>
              <Link color='foreground' href={`mailto:angelluis2605@gmail.com`} isExternal showAnchorIcon underline='always' className='text-base'>
                angelluis2605@gmail.com
              </Link>
            </span>
          </div>
          <div className='flex flex-shrink-0'>
            <Image src='/images/blob.svg' alt='blob' className='absolute -z-0' width={200} height={200}/>
            <Image src='/images/angel.png' alt='angel' className='rounded-full z-10 mt-8 ml-8 border-teal-500 border-4' width={130} height={130}/>
          </div>
        </div>
      </section>
      <section className="flex flex-col  gap-4 mt-14 container">
        <h1 className='text-2xl font-extrabold'>{home.bio}</h1>
        <Divider className="my-0" />
        <p>{home.resume}<Link href={home.currentProject.url} color="secondary" underline='hover'>{home.currentProject.label}</Link>.</p>
        <div className='flex justify-center'>
          <Button
            href="/works"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
            className='text-lg font-bold py-4 px-8'
            anchorIcon={<ChevronDoubleRightIcon width={16} height={16}/>}
          >
            Portfolio
          </Button>
        </div>
        
      </section>
      <section className='container'>
        {/* <TimeLine data={timeline}/> */}
        <ResponsiveTimeline/>
      </section>
      </article>
  )
}
