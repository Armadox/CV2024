'use client';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentSections, setCurrentSections] = useState(["about-me"]);

    useEffect(() => {
        const handleScroll = () => {
        onScroll()
        setIsScrolled(window.scrollY > 50); // Adjust threshold if needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const onScroll = () => {
        const sections = document.querySelectorAll('.section'); // Select all sections with the 'section' class
        
        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Trigger when 50% of the section is in view (you can adjust this value)
        };
        
        const observer = new IntersectionObserver((entries) => {
            // Create a Set to store unique section IDs
            const visibleSections = new Set(currentSections);

            // Loop through each entry to check visibility
            entries.forEach((entry) => {
                const sectionId: string = entry.target.id;
                if (entry.isIntersecting) {
                    // Add the ID of the section to the Set if it's in view
                    visibleSections.add(sectionId);
                } else {
                    // Remove the ID of the section if it's no longer in view
                    visibleSections.delete(sectionId);
                }
            });
            
            // Update state with the current visible sections
            setCurrentSections([...visibleSections]); // Convert Set back to Array for state
        }, observerOptions);

        // Start observing each section
        sections.forEach((section) => {
            observer.observe(section);
        });

        // Clean up observer on component unmount
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }



    
    return ( 
        <div className={`fixed top-0 flex overflow-x-scroll z-50 w-full transition-all duration-300 ${isScrolled ? "bg-zinc-950 h-[4rem]" : "bg-zinc-900 h-[10rem]"}`}>
                <div className="flex flex-none w-full justify-evenly min-w-[800px] items-center">
                    <div className="relative group">
                        <HoverCard>
                            <HoverCardTrigger href="#about-me" className={`hover:cursor-pointer`}>
                                About Me
                            </HoverCardTrigger>
                            {/*<HoverCardContent>
                                Read about me!
                            </HoverCardContent>*/}
                        </HoverCard>
                        <div className={`absolute left-0 -bottom-1 h-[2px] bg-main transition-all duration-300 group-hover:w-full 
                            ${currentSections.length > 1 ? (currentSections[1] === "about-me" ? "w-full" : "w-0") : (currentSections[0] === "about-me" ? "w-full" : "w-0")}
                            `}></div>
                    </div>
                    <div className="relative group">
                        <HoverCard>
                            <HoverCardTrigger href="#skills" className="hover:cursor-pointer">
                                Skills
                            </HoverCardTrigger>
                            {/*<HoverCardContent>
                                Read about me!
                            </HoverCardContent>*/}
                        </HoverCard>
                        <div className={`absolute left-0 -bottom-1 h-[2px] bg-main transition-all duration-300 group-hover:w-full ${currentSections[0] === "skills" || currentSections[1] === "skills" ? "w-full" : "w-0" }`}></div>
                    </div>
                    <div className="relative group">
                        <HoverCard>
                            <HoverCardTrigger href="#experience" className="hover:cursor-pointer">
                                Experience
                            </HoverCardTrigger>
                            {/*<HoverCardContent>
                                Read about me!
                            </HoverCardContent>*/}
                        </HoverCard>
                        <div className={`absolute left-0 -bottom-1 h-[2px] bg-main transition-all duration-300 group-hover:w-full ${currentSections[0] === "experience" || currentSections[1] === "experience" ? "w-full" : "w-0" }`}></div>
                    </div>
                    <div className="relative group">
                        <HoverCard>
                            <HoverCardTrigger href="#projects" className="hover:cursor-pointer">
                                Projects
                            </HoverCardTrigger>
                            {/*<HoverCardContent>
                                Read about me!
                            </HoverCardContent>*/}
                        </HoverCard>
                        <div className={`absolute left-0 -bottom-1 h-[2px] bg-main transition-all duration-300 group-hover:w-full ${currentSections[0] === "projects" || currentSections[1] === "projects" ? "w-full" : "w-0" }`}></div>
                    </div>
                    <div className="relative group">
                        <HoverCard>
                            <HoverCardTrigger href="#contact" className="hover:cursor-pointer">
                                Contact
                            </HoverCardTrigger>
                            {/*<HoverCardContent>
                                Read about me!
                            </HoverCardContent>*/}
                        </HoverCard>
                        <div className={`absolute left-0 -bottom-1 h-[2px] bg-main transition-all duration-300 group-hover:w-full ${currentSections[0] === "contact" || currentSections[1] === "contact" ? "w-full" : "w-0" }`}></div>
                    </div>
                </div>
        </div> 
    );
}
 
export default Header;