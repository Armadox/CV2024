"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`lg:px-[4rem] ${className}`}>{children}</div>;
};

export default Container;
