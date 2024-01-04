import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
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

export default async function Work({
    params: { lang, id }
    } : {
        params: { lang: Locale, id: string }
    }) {
    console.log("🚀 ~ id:", id)
    const { works } = await getDictionary(lang)
    const project = works.projects.find(p => p.id === id)
    return (
        <section className="container">
            <h1 className="text-2xl font-bold mb-2">{project?.title}</h1>
            <Divider></Divider>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                
            </div>
        </section>
    );
}