import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import CardItem from "../components/CardItem";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import SectionTransition from "../components/SectionTransition";

interface Project {
    id: string;
    title: string;
    tag: string;
    stack: string;
    shortDescription: string;
    longDescription: string;
    website: string;
    sourceCode: string;
    platform: string;
    active: number;
    thumbCard: string;
    thumbFirst: string;
    thumbMockup: string;
}

export default async function Works({
    params: { lang }
    } : Readonly<{
        params: { lang: Locale }
    }>) {
    const { works } = await getDictionary(lang)
    return (
        <SectionTransition delay={0.2} id='works' className="w-full">
            <h1 className="text-2xl font-bold mb-2">{works.title}</h1>
            <Divider></Divider>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4 my-4">
                {works.projects.map((item,index) => (
                    <CardItem 
                        key={item.id} 
                        data={item} 
                        lang={lang} 
                        dictionary={works} 
                        colSpan={(index === 0 && works.projects.length % 2 !== 0) ? 'col-span-full lg:col-span-1' : 'col-span-1'}/>
                ))}
            </div>
        </SectionTransition>
    );
}