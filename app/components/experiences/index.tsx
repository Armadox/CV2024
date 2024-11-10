'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ReactHTMLElement } from "react"
import Writing from "../Writing"

type Experience = {
    name: string,
    content: React.ReactNode,
    footer?: string,
    date?: string,
  }

  interface ExperienceProps{
    experiences: Experience[]
  }

const Experiences:React.FC<ExperienceProps> = ({experiences}) => {
    return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center items-center gap-5">
        {experiences.map((experience, index) => (
            <Card className="flex flex-col justify-between w-[300px] h-[400px] sm:w-[500px] sm:h-[300px] mx-5 bg-zinc-800 border-none" key={index}>
                <CardHeader>
                    <CardTitle className="text-zinc-300 text-center text-2xl">
                      <Writing myWord={experience.name} time={20}/>
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-100 min-h-[160px] overflow-y-scroll text-md">
                  {experience.content}
                </CardContent>
                <CardFooter className="flex items-center justify-between text-main text-center pt-4 text-sm">
                  <div>{experience.footer}</div>
                  <div>{experience.date}</div>
                </CardFooter>
            </Card>
        ))}
    </div> 
    );
}
 
export default Experiences;