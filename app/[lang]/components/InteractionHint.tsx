'use client'
import {motion} from 'framer-motion'

const InteractionHint = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            }
        }
    }
      
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <div className="absolute bottom-0 sm:bottom-32 lg:bottom-40 w-full flex justify-end items-center sm:right-10">
            <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ repeat: Infinity, duration: 3 }}
            className="mr-1 relative flex items-center justify-center flex-row-reverse">
                <motion.li variants={item} transition={{ repeat: Infinity, duration: 2}} className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-l-2 border-foreground -rotate-45"></motion.li >
                <motion.li variants={item} transition={{ repeat: Infinity, duration: 2}} className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-l-2 border-foreground -rotate-45"></motion.li >
                <motion.li variants={item} transition={{ repeat: Infinity, duration: 2}} className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-l-2 border-foreground -rotate-45"></motion.li >
            </motion.ul>
            <div className="w-[22px] h-[38px] sm:w-[30px] sm:h-[54px] rounded-3xl border-2 sm:border-3 border-foreground flex justify-center items-start p-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground mb-1"></div>
            </div>
            <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ repeat: Infinity, duration: 3 }}
            className="ml-1 relative flex items-center justify-center">
                <motion.li variants={item} transition={{ repeat: Infinity, duration: 2}} className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-r-2 border-foreground rotate-45"></motion.li>
                <motion.li variants={item} transition={{ repeat: Infinity, duration: 2}} className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-r-2 border-foreground rotate-45"></motion.li>
                <motion.li variants={item} transition={{ repeat: Infinity, duration: 2}} className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-r-2 border-foreground rotate-45"></motion.li>
            </motion.ul>
        </div>
    )
}


export default InteractionHint