'use client'

import Image from "next/image"
import Writing from "../Writing"
import { useEffect, useState } from "react";

interface AboutMeProps {
    header: string,
    text: string,
    image: string,
    subtext?: string,
    className?: string,
}

const AboutMe:React.FC<AboutMeProps> = ({header, text, image, subtext, className}) => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    
    return ( 
    <div className={`flex flex-col flex-none md:flex-row justify-evenly items-center py-[1rem] ${className}`}>
        <Image src={image} width={900} height={900} alt={""} className={`grayscale hover:grayscale-0 w-[400px] h-[400px] object-contain rounded-full transition-all duration-500 ${showImage ? "opacity-1" : "opacity-0"}`}/>
        <div className="flex flex-col justify-center items-center text-center md:text-start md:items-start max-w-[600px]">
            <Writing className="text-4xl text-main" myWord={header} time={30}/>
            <Writing className="text-2xl" myWord={text} time={60} underline/>
            {subtext && <Writing className="text-md text-zinc-500" myWord={subtext} time={30}/>}
        </div>
    </div> 
    );
}
 
export default AboutMe;