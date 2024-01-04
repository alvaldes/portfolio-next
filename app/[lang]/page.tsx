import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Badge, Button, Divider, Link, Tooltip } from '@nextui-org/react'
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import TimeLine from './components/TimeLine/TimeLine'
import ResponsiveTimeline from './components/TimeLine/ResponsiveTimeline'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import XIcon from './components/icons/XIcon'
import Socials from './components/Socials'

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
          <Image src="/images/banner.svg" alt="banner" width={400} height={400} className='self-center -my-10'/>

          <span className='py-3 px-11 text-center dark:bg-white/10 bg-black/5 rounded-md font-comfortaa font-black'>{home.banner}</span>

          <div className='grid-template py-2 mt-6  lg:container'>
            <div className='flex flex-col self-start gap-1 items-start justify-start sm:mt-4 md:mt-12 lg:mt-14 grid-info'>
              <h1 className=' text-2xl md:text-3xl font-semibold'>{home.name}</h1>
              <Badge content={home.experience} color="warning" variant="solid" placement="top-right" shape="rectangle">
                <h2 className='text-lg pr-0 pt-2 sm:pr-14 sm:pt-0'>{home.description}</h2>
              </Badge>
            </div>
            <div className='flex items-center justify-center sm:justify-start sm:items-start grid-socials sm:mt-4'>
              <Socials withEmail/>
            </div>
            <div className='flex flex-shrink-0 justify-center grid-portrait'>
              <Image 
                src='/images/blob.svg' 
                alt='blob' 
                className='absolute -z-0 size-16  sm:size-36 md:size-60' 
                width={200} height={200}/>
              <Image 
                src='/images/angel.png' 
                alt='angel' 
                className='rounded-full z-10 mt-2 sm:mt-4 md:mt-9 ml-0 border-teal-500 border-4 size-14 sm:size-28 md:size-40' 
                width={130} height={130}/>
            </div>
          </div>
        </section>
        <section className="flex flex-col  gap-4 mt-8 md:mt-0 container">
          <h1 className='text-2xl font-bold'>{home.bio}</h1>
          <Divider className="my-0" />
          <p>
            {home.resume}
            {/* todo: update the resume info and translations */}
            <Link href={home.currentProject.url} color="secondary" underline='hover' className='font-medium'>
              {home.currentProject.label}
            </Link>.
          </p>
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
          <ResponsiveTimeline/>
        </section>
      </article>
  )
}
