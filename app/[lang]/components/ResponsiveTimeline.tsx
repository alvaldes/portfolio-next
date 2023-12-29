import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import styles from './ResponsiveTimeline.module.css'

const data = [
    {
        date: "2022 to Present",
        title: "timeline item title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        icon: <BriefcaseIcon className='text-white'/>,
    },
    {
        date: "2022",
        title: "timeline item title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        icon: <BriefcaseIcon className='text-white'/>,
    },
    {
        date: "2022",
        title: "timeline item title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        icon: <BriefcaseIcon className='text-white'/>,
    },
    {
        date: "2021",
        title: "timeline item title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        icon: <AcademicCapIcon className='text-white'/>,
    }
]
export default function ResponsiveTimeline() {
    return (
        <section className={styles.timelineSection}>
            <div className={styles.timelineItems}>
                {data.map((elem, index) => (
                    <div className={styles.timelineItem} key={`${elem} ${index}`}>
                    {/* <div className={`${styles.timelineDot} bg-secondary`}></div> */}
                        <span className={`${styles.timelineDot} relative flex h-8 w-8`}>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-8 w-8 bg-secondary p-1">
                                {elem.icon}
                            </span>
                        </span>
                        <div className={`${styles.timelineDate} text-secondary`}>{elem.date}</div>
                        <div className={`${styles.timelineContent} bg-neutral-700`}>
                            <h3>{elem.title}</h3>
                            <p>{elem.description}</p>
                        </div>
                    </div>
                ))}
	</div>
</section>
    )
}