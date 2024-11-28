import { Analytics } from "@vercel/analytics/react"
import Header from "./components/header";
import Container from "./components/container";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import MailSender from "./components/mailSender";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import { AuthSVG, CodeBlockSVG, GitSVG, GraphQlSVG, JavascriptSVG, NextSVG, PrismaSVG, ReactSVG, SassSVG, SocketSVG, TailwindSVG, TypescriptSVG, AmogusSVG } from "./svgs";
import Writing from "./components/Writing";

export default function Home() {
  
  const skill = [
    {svg: <CodeBlockSVG/>, name: 'HTML/CSS'}, 
    {svg: <JavascriptSVG/>, name: 'JavaScript'},
    {svg: <SassSVG/>, name: 'Sass/Scss'},
    {svg: <TailwindSVG/>, name: 'TailwindCSS'}, 
    {svg: <TypescriptSVG/>, name: 'TypeScript'},
    {svg: <ReactSVG/>, name: 'React,js'},
    {svg: <NextSVG/>, name: 'Next.js'},
    {svg: <GitSVG/>, name: 'Git'},
    {svg: <GraphQlSVG/>, name: 'GraphQL'},
    {svg: <PrismaSVG/>, name: 'PrismaDB'},
    {svg: <AuthSVG/>, name: 'Auth-0'},
    {svg: <SocketSVG/>, name: 'socket.io'},
    {svg: <AmogusSVG/>, name: 'War Crimes'}
  ]

  const experience = [
    {
      name: 'Sales Manager/Web Developer', 
      content: (
        <div>
          <ul>
              <li>
                  Developed a fully dynamic CMS WordPress website with a fully functioning custom theme, that I achieved
                  by changing WordPress PHP files and installing SASS (CSS extension) for enhanced styling.
                  <ul className="text-sm text-zinc-300">
                      <li>The website utilized PHP and MySQL to establish our database and secure important data.</li>
                  </ul>
              </li>
          </ul>
        </div>),
      footer: "DAN.MINIMARKT RU S.R.L",
      date: "Sep 2022 - Feb 2023"
    },
    {
      name: 'Front-End Developer Intern', 
      content: (
        <div>
          <ul>
              <li>
                  RetreatPartner is a dynamic online platform dedicated to connecting people who seek to either
                  participate in seminars and retreats or wish to host them.
              </li>
              <li>
                  Worked within a dynamic team of front-end and back-end developers.
                  <ul className="text-sm text-zinc-300">
                      <li>Utilized Next.js and Tailwind to develop and optimize front-end interfaces to effectively showcase
                          content and ensure an ideal user experience.</li>
                      <li>Worked on our GraphQL front-end code to optimize the exchange of data between client and
                          server.</li>
                      <li>Used GitHub/SourceTree to ensure a straightforward and easy integration of new features into
                          test builds before deploying them on the main build.</li>
                  </ul>
              </li>
          </ul>
        </div>
        ),
      footer: "Retreat-Partner GbR",
      date: "Mar 2023 - Oct 2023"
    }, 
    {
      name: 'Founder / Full-Stack Developer', 
      content: (
      <div>
        <ul>
            <li>
                Founded and developed gym-and-more.at, an online e-shop specialized in selling supplements.
                <ul className="text-sm text-zinc-300">
                    <li>Used Next.js and Tailwind CSS with a mobile-first approach for optimal front-end development,
                        resulting in a very fast, snappy, and dynamic layout.</li>
                    <li>Implemented Prisma to construct a flexible and efficient data model for users, products, and
                        orders.</li>
                </ul>
            </li>
            <li>
                Utilized server-side rendering and dynamically loaded client components.
            </li>
        </ul>
      </div>
      ),
      footer: "gym-and-more.at",
      date: "May 2023 - Jun 2024"
    },  
  ]


  return (
    <div className="text-zinc-200 bg-zinc-950 w-full">
      <Header/>
      <div id="about-me" className="invisible section"/>
      <div className="h-[10rem]"/>
      <Container className="bg-zinc-900">
        <AboutMe 
          header={"Frontend | Fullstack Developer"} 
          text={"Hello, my name is Adrian Dan and I am a self taught <React/> developer! Let's collaborate and create something f*king amazing together!"} 
          image={"/images/pfp3.jpg"}
          subtext={"(You can download my CV from the footer)"}
          className="pb-10 min-h-[780px]"
        />
      </Container>
      <div className="w-full h-2 bg-main"/>
      <div id="skills" className="h-0 invisible section"/>
      <MailSender className="top-[-4rem]"/>
      <Container className="bg-zinc-950">
        <Skills skills={skill}/>
      </Container>
      <div className="w-full h-2 bg-main"/>
      <div id="experience" className="h-0 invisible section"/>
      <Container className="bg-zinc-900 py-20 min-h-[800px]">
        <div className="text-xl text-center lg:text-5xl lg:text-start mb-5" >I worked as a...</div>
        <Experiences experiences={experience}/>
      </Container>
      <div id="projects" className="h-0 invisible section"/>
      <div className="w-full flex items-center justify-center h-[200px] bg-zinc-950">
        <Writing myWord="PROJECTS" className="text-4xl md:text-5xl" time={200} underline/>
      </div>
      <Container className="bg-zinc-900 py-20">
        <Projects/>
      </Container>
      <Footer/>
      <Analytics/>
    </div>
  );
}
