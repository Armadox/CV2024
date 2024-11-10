'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  type Skill = {
    svg: any;
    name: string
  }

  interface SkillProps{
    skills: Skill[]
  }



const Skills:React.FC<SkillProps> = ({skills}) => {
    return ( 
        <div className="mb-[6rem]">
            <Carousel>
                <CarouselContent>
                    {skills.map((skill, index) => (
                    <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                      <Card className="mx-5 bg-zinc-900 border-main min-h-[200px]" key={index}>
                          <CardHeader>
                              <CardTitle className="flex items-center justify-center invert text-center text-4xl">
                                {skill.svg}
                              </CardTitle>
                          </CardHeader>
                          <CardContent className="text-zinc-200 text-center">
                              <div>{skill.name}</div>
                          </CardContent>
                      </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:inline-flex bg-main hover:bg-orange-800 border-zinc-800 text-zinc-950"/>
                <CarouselNext className="hidden lg:inline-flex bg-main hover:bg-orange-800 border-zinc-800 text-zinc-950"/>
            </Carousel>
        </div>
     );
}
 
export default Skills;