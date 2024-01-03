import { AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import styles from './ResponsiveTimeline.module.css'
import ResponsiveTimelineItem from './ResponsiveTimelineItem';

const data = [
    {
        date: "Dec-2022 to Present",
        title: "GENTALIA.SA",
        description: "From the position of a Full-Stack Developer, I had the opportunity to work with technologies such as Angular and Spring Boot on high-impact projects in high-risk sectors in Spain.",
        icon: <BriefcaseIcon className='text-white'/>,
    },
    {
        date: "March-2022",
        title: "Freelancer",
        description: "During my time at CUJAE, I started working as a freelancer and engaging in open-source collaborations.",
        icon: <RocketLaunchIcon className='text-white'/>,
    },
    {
        date: "Jan-2022",
        title: "CUJAE University",
        description: "I started working as a specialist in the Directorate of ICT Services (DISERTIC) at CUJAE University.",
        icon: <BuildingLibraryIcon className='text-white'/>,
    },
    {
        date: "Sep-2016 to Dec-2021",
        title: "Computer Science Degree",
        description: "I pursued a degree in Computer Science at the University of Computer Science (UCI) in Havana.",
        icon: <AcademicCapIcon className='text-white'/>,
    }
]
export default function ResponsiveTimeline() {
    return (
        <section className={styles.timelineSection}>
            <div className={styles.timelineItems}>
                {data.map((elem, index) => (
                    <ResponsiveTimelineItem data={elem} key={index}/>
                ))}
            </div>
        </section>
    )
}