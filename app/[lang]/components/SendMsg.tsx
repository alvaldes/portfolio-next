'use client'
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SendMsg({dictionary}:any) {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if (message === '') {
            setError(dictionary.error)
        } else {
            let body = `body=${encodeURIComponent(message)}`
            let subject = dictionary.subject_text
            router.push(
                `mailto:${dictionary.mail}?subject=${encodeURIComponent(subject)}&${body}`
            )
            setMessage('')
        }
    }

    const handleChange = (msg:string) => {
        setMessage(msg)
        if (error !== '' ) {
            setError('')
        }
    }

    return (
        <div className="flex flex-col gap-3 w-full mb-8 sm:mb-0" id="contact-me">
            <h1 className="text-xl font-medium text-center sm:text-start">{dictionary.contact_me}</h1>
            <div className="flex w-full flex-wrap xl:flex-nowrap mb-2 sm:mb-0 gap-4">
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
                placeholder={dictionary.subject_text}
                className="inline-block w-full"
                />
            </div>
                <Textarea
                isRequired
                isInvalid={error!==''}
                errorMessage={error}
                label={dictionary.message}
                placeholder={dictionary.message_text}
                className="w-full"
                value={message}
                onValueChange={handleChange}
                />
            <Button 
                color="success" 
                variant="flat" 
                className="w-fit text-base px-8 font-medium self-center"
                onClick={(e) => handleSubmit(e)}
                endContent={<PaperAirplaneIcon width={16} hanging={16}/>}>
                {dictionary.send}
            </Button>  
        </div>
    );
}