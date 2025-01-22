'use client'
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        // Show the button when the user scrolls down 100 pixels
        setIsVisible(scrollTop > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Button
            isIconOnly 
            color="warning" 
            variant="faded" 
            aria-label="go top" 
            className={`${!isVisible && 'hidden'} bg-amber-100 dark:bg-zinc-900  p-2 animate-bounce fixed bottom-10 right-10 cursor-pointer z-30`}
            // onClick={goTop}
            onClick={scrollToTop}
            >
            <ArrowUpIcon />
        </Button>
    );
};

export default GoToTop;
