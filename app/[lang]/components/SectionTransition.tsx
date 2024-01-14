'use client'
import { motion } from "framer-motion"

export default function SectionTransition({children, delay = 0, id, ...props}:any){
    return (
        <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
            id={id}
            {...props}
        >
            {children}
        </motion.section>
    )
}