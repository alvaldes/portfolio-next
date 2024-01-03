'use client'
import { useRef } from 'react';
import styles from './ResponsiveTimeline.module.css'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ResponsiveTimelineItem({data, key}:any) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
    return (
        <motion.div 
            ref={ref} 
            className={styles.timelineItem} 
            key={key}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <span className={`${styles.timelineDot} relative flex h-8 w-8`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-secondary p-1">
                    {data.icon}
                </span>
            </span>
            <div className={`${styles.timelineDate} text-secondary`}>{data.date}</div>
            <div className={`${styles.timelineContent} bg-zinc-800 dark:bg-white/5`}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        </motion.div>
    )
}