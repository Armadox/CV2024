'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { IoMailOutline, IoMailOpenOutline  } from "react-icons/io5";


interface MailSenderProps{
    className?: string,
}


const MailSender:React.FC<MailSenderProps> = ({className}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [messageSent, setMessageSent] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [mail, setMail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [text, setText] = useState<string>("")

    const sendMessage = async () => {
        setLoading(true)
        if(!mail || !subject || !text){
            setError("Missing Input!")
            return;
        }

        try {
            const response = await fetch('/api/saveMessage', {
                method: 'POST',
                body: JSON.stringify({ mail, subject, text }),
            });
    
            if (response.ok) {
                setMessageSent(true);
                setIsOpen(false)
                setLoading(false)
                setError("");
            } else {
                const errorData = await response.json();
                setError(errorData.error || "An error occurred");
            }
        } catch (error) {
            setError("Failed to send message");
        }

    }
    
    return ( 
    <div className={`flex flex-col items-center justify-center relative z-10 transition-all duration-500 ${isOpen ? "top-[-10rem]" : "top-[-4rem]"}`}>
        <div className={`bg-main flex flex-col items-center 
        rounded-[60px] transition-all duration-300
        ${isOpen ? "w-[20rem] sm:w-[40rem] min-h-[20rem]" : "w-[7rem] min-h-[7rem] hover:cursor-pointer hover:rounded-[35px]"}`}
        onClick={() => {!messageSent && setIsOpen(true)}}>
            <div className="h-[2.5rem]"></div>
            <div className={`text-4xl ${messageSent && "text-green-800"}`}>{isOpen ? <IoMailOpenOutline /> : <IoMailOutline />}</div>
            <div className={`flex flex-col text-zinc-800 items-center max-h-[5px] w-full opacity-0 transition-all duration-500 ${isOpen && "opacity-100 max-h-full"}`}>
            {isOpen &&
            <>
                <Input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} className="mb-5 min-w-[10rem] bg-zinc-200 w-1/3"/>
                <Input type="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="mb-5 min-w-[10rem] bg-zinc-200 w-1/3"/>
                <Textarea placeholder="Type your message here." value={text} onChange={(e) => setText(e.target.value)} className="mb-5 min-w-[15rem] w-1/2 bg-zinc-200 h-[15rem]"/>
                <div className="flex w-1/2 justify-evenly items-center mb-4">
                    <Button className="rounded h-[2rem] bg-green-500 hover:bg-green-800" onClick={() => sendMessage()} disabled={loading}>
                        Submit
                    </Button>
                </div>
            </>
            }
            </div>
        </div>
        {isOpen &&
        <Button onClick={(e) => {setIsOpen(false)}} 
        className="rounded-full h-[2rem] w-[2rem] bg-red-500 hover:bg-red-800 mt-5">
            X
        </Button>} 
    </div>
    );
}
 
export default MailSender;