'use client'
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button, Chip, Input, Textarea } from "@nextui-org/react";

export default function SendMsg({dictionary}:any) {

    return (
        <div className="flex flex-col gap-3 w-full" id="contact-me">
            <h1 className="text-xl font-medium">{dictionary.contact_me}</h1>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-4 md:mb-0 gap-4">
                <Input
                isDisabled
                type="email"
                label={dictionary.to}
                placeholder={dictionary.mail}
                startContent={
                    <EnvelopeIcon width={16} height={16}/>
                }
                className="inline-block w-full"
                />
                <Input
                isDisabled
                type="text"
                label={dictionary.subject}
                defaultValue={dictionary.subject_text}
                className="inline-block w-full"
                />
            </div>
                <Textarea
                isRequired
                label={dictionary.message}
                placeholder={dictionary.message_text}
                className="w-full"
                />
            <Button 
                color="success" 
                variant="flat" 
                className="w-fit text-base px-8 font-medium self-center"
                endContent={<PaperAirplaneIcon width={16} hanging={16}/>}>
                {dictionary.send}
            </Button>  
            {/* todo: make it work and send the msg */}
        </div>
    );
}