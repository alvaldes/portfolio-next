import styles from './ResponsiveTimeline.module.css'
import ResponsiveTimelineItem from './ResponsiveTimelineItem';

export default function ResponsiveTimeline({data}:any) {
    return (
        <section className={styles.timelineSection}>
            <div className={styles.timelineItems}>
                {data.map((elem:any, index:number):any => (
                    <ResponsiveTimelineItem data={elem} key={index}/>
                ))}
            </div>
        </section>
    )
}