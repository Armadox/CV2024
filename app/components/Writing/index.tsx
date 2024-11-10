"use client";

import React, { useEffect, useState } from "react";
import { useElementBoundaryObserver } from "@/lib/customHook";

interface WritingProps {
  myWord: string;
  className?: string;
  time: number;
  underline?: boolean;
}

const Writing:React.FC<WritingProps> = ({myWord, className, time, underline}) => {
  const [projectsRef, projectsBoundary] = useElementBoundaryObserver("0px", 0.1); // Use the hook with margin and threshold
  const [word, setWord] = useState<string>("")

  useEffect(() => {
    if (projectsBoundary === "topIn" || projectsBoundary === "bottomIn") {
      setInterval(() => {
        setWord((prevWord) => {
            const nextIndex = prevWord.length;
            if (nextIndex < myWord.length) {
                return prevWord + myWord[nextIndex];
            }
            return prevWord;
        })
      }, time) 
    }
  }, [projectsBoundary]);
  

  return (
    <div className={`${className}`} ref={projectsRef} >
      {word}{underline && <span className="animate-blink">_</span>}
    </div> 
  );
};

export default Writing;