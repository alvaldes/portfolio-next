import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import CardItem from "../components/CardItem";
import { Divider } from "@nextui-org/react";

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
    } : {
        params: { lang: Locale }
    }) {
    const { works } = await getDictionary(lang)
    return (
        <section className="container">
            <h1 className="text-2xl font-bold mb-2">{works.title}</h1>
            <Divider></Divider>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {works.projects.map((item, index) => (
                    <CardItem key={index} data={item} lang={lang} dictionary={works}/>
                ))}
            </div>
        </section>
    );
}