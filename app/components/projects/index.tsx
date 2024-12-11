"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [numbers, setNumbers] = useState<string>("");

  const Project = ({
    title,
    description,
    content,
    footer,
  }: {
    title: string;
    description: string;
    content: React.ReactNode;
    footer: string;
  }) => {
    return (
      <Card className="w-[450px] min-h-[250px] sm:w-[600px] sm:min-h-[300px] lg:w-[650px] lg:min-h-[400px] mx-5 bg-zinc-800 border-none">
        <CardHeader>
          <CardTitle className="text-zinc-100 text-center text-xl sm:text-2xl lg:text-4xl">
            {title}
          </CardTitle>
          <CardDescription className="text-zinc-500 text-center text-sm lg:text-md">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-zinc-100 text-sm md:text-md lg:text-xl">
          {content}
        </CardContent>
        {footer && (
          <CardFooter className="flex flex-col justify-center items-center text-zinc-500 text-center text-xs lg:text-md">
            <hr className="w-full h-1 mb-6" />
            <div>
              GitHub:{" "}
              <Link href={footer} className="underline text-main">
                Click Here!
              </Link>
            </div>
          </CardFooter>
        )}
      </Card>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center text-3xl mb-4">
        <div>Select Project:</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="flex justify-evenly items-center">
          <div
            className="hover:cursor-pointer min-w-[60px] underline"
            onClick={() => setNumbers("130842")}
          >
            Chat Messenger
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div
            className="hover:cursor-pointer underline"
            onClick={() => setNumbers("100318")}
          >
            Online Store
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div
            className="hover:cursor-pointer underline"
            onClick={() => setNumbers("142511")}
          >
            Object Creator
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div
            className="hover:cursor-pointer underline"
            onClick={() => setNumbers("183824")}
          >
            GMap E-Mail Scrapper
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <InputOTP maxLength={6} value={numbers} onChange={(e) => setNumbers(e)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex justify-center items-center mt-5">
        {numbers === "130842" ? (
          <Project
            title={"Chat Messenger"}
            description={"Quick and dirty Chat Messenger with websockets!"}
            content={
              <div>
                <div className="pb-2 lg:pb-4">
                  A quick and dirty real-time chat messenger that uses
                  Websockets for instant messaging.
                </div>
                <div className="pb-2 lg:pb-4">
                  Users sign up through google accounts with NextAuth.
                </div>
                <div className="pb-2 lg:pb-4">
                  Proper UDP connection using LiveKit SDK(SFU) so you can voice
                  chat.
                </div>
                <div className="pb-2 lg:pb-4">
                  You can check it out here:{" "}
                  <Link
                    className="underline text-main"
                    href="https://adoring-poitras.212-72-171-49.plesk.page/servers/672d4dcab52918b216dc0e97/channels/672d4dcab52918b216dc0e98"
                  >
                    Link
                  </Link>
                </div>
              </div>
            }
            footer={"https://github.com/Armadox/Chatt/tree/master"}
          />
        ) : numbers === "100318" ? (
          <Project
            title={"Online Store"}
            description={
              "Fullstack developed E-Shop website using Next.js, Tailwindcss, Prisma and MongoDB."
            }
            content={
              <div>
                <div className="pb-2 lg:pb-4">
                  Website was built following a mobile first approach, therefor
                  having great performance.
                </div>
                <div className="pb-2 lg:pb-4">
                  Has an admin panel where you can create, read, update and
                  delete products and orders.
                </div>
                <div className="pb-2 lg:pb-4">
                  Functioning Stripe payment with hooks to update our server.
                </div>
                <div className="pb-2 lg:pb-4">
                  Utilized server-side rendering and dynamically loaded client
                  components to achieve a google page speed score of 95-100 on
                  desktop and mobile.
                </div>
                <div>
                  You can check it out here:{" "}
                  <Link
                    className="underline text-main"
                    href="https://gym-and-more.at"
                  >
                    Link
                  </Link>
                </div>
              </div>
            }
            footer={""}
          />
        ) : numbers === "142511" ? (
          <Project
            title={"Object creator website (Online Test Task)"}
            description={"Website used for an online Test."}
            content={
              <div>
                <div className="pb-2 lg:pb-4">
                  Dynamic website that uses Php, MySQL as backend and HTML, CSS,
                  Sass, Javascript, Bootstrap-5 and React as frontend.
                </div>
                <div className="pb-2 lg:pb-4">
                  Backend and frontend communicate through JSON data.
                </div>
                <div className="pb-2 lg:pb-4">
                  Php files have extended classes and is OOP based.
                </div>
                <div className="text-red-800 pb-2 lg:pb-4">
                  UPDATE: Website went down since my free hosting expired.
                </div>
              </div>
            }
            footer={"https://github.com/Armadox/test"}
          />
        ) : numbers === "183824" ? (
          <Project
            title={"Google Maps E-Mail Scrapper"}
            description={"E-Mail scrapper with Puppeteer."}
            content={
              <div>
                <div className="pb-2 lg:pb-4">
                  Developed a web scraper using Puppeteer and Next.js for
                  automated email collection from websites based on specific
                  directory links like &quot;kontakt&quot; or
                  &quot;impressum&quot;.
                </div>
                <div className="pb-2 lg:pb-4">
                  Handles dynamic scraping with fallback email extraction from
                  the main page if not found in the specified directories.
                </div>
                <div className="pb-2 lg:pb-4">
                  Optimized for serverless environments, ensuring scalability
                  and efficient use of server resources.
                </div>
                <div>
                  You can check it out here:{" "}
                  <Link
                    className="underline text-main"
                    href="https://mail-scrapper.vercel.app"
                  >
                    Link
                  </Link>
                </div>
              </div>
            }
            footer={"https://github.com/Armadox/mail-scrapper"}
          />
        ) : (
          <Project title={""} description={""} content={""} footer={""} />
        )}
      </div>
    </div>
  );
};

export default Projects;
