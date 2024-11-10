'use client';

import { Separator } from "@/components/ui/separator"
import Link from 'next/link';
import Writing from "../Writing";
import { TiMail   } from "react-icons/ti";
import { FaCity, FaHouseUser, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { FaEarthAmericas, FaGun } from "react-icons/fa6";
import { IoPhonePortraitSharp, IoShareSocial } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { PiNotebookLight } from "react-icons/pi";
import { GiSausage } from "react-icons/gi";



const Footer = () => {
    return (
    <div id="contact" className="flex flex-col md:flex-row items-center justify-between section">
        <div className="flex w-full justify-evenly h-[300px] md:h-[120px] py-4 space-x-4 text-sm">
            <div className="flex flex-col px-1 md:px-6">
                <div className="font-extrabold mb-2 flex items-center py-[2px]"><PiNotebookLight/>Address:</div>
                <div className="flex items-center py-[2px]"><FaEarthAmericas/>Austria</div>
                <div className="flex items-center py-[2px]"><FaCity/>St.Pölten</div>
                <div className="flex items-center py-[2px]"><FaHouseUser/>Mariazellerstraße</div>
                <div className="font-extrabold mt-4 mb-2 md:hidden flex items-center py-[2px]"><FaUser/>Contact:</div>
                <div className="md:hidden flex items-center py-[2px]"><IoPhonePortraitSharp/>+43 (0)660 183 2293</div>
                <div className="md:hidden flex items-center py-[2px]"><TiMail/>adydan1802@gmail.com</div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col px-1 md:px-6 hidden md:block">
                <div className="font-extrabold mb-2 flex items-center py-[2px]"><FaUser/>Contact:</div>
                <div className="flex items-center py-[2px]"><IoPhonePortraitSharp/>+43 (0)660 183 2293</div>
                <div className="flex items-center py-[2px]"><TiMail/>adydan1802@gmail.com</div>
            </div>
            <Separator orientation="vertical" className="hidden md:block"/>
            <div className="flex flex-col px-1 md:px-6">
                <div className="font-extrabold mb-2 flex items-center py-[2px]"><IoShareSocial/>Socials:</div>
                <div><Link href={"https://github.com/Armadox"} className="flex items-center py-[2px]"><FaGithub/>GitHub</Link></div>
                <div><Link href={"https://www.linkedin.com/in/adrian-d-771174226/"} className="flex items-center py-[2px]"><FaLinkedin/>LinkedIn</Link></div>
                <div className="font-extrabold mt-4 mb-2 md:hidden flex items-center py-[2px]"><IoIosDocument/>Downloads:</div>
                <div><Link href={"https://drive.google.com/file/d/1mwVJW7TKT8nyERWpZx2SrNE7gkAmrOWi/view?usp=sharing"} className="md:hidden flex items-center py-[2px]"><FaGun/>EN-CV</Link></div>
                <div><Link href={"https://drive.google.com/file/d/1-_U-J7gdbkPLoAa4yqkAVHyLAT8i5B_3/view?usp=sharing"} className="md:hidden flex items-center py-[2px]"><GiSausage/>DE-CV</Link></div>
            </div>
            <Separator orientation="vertical" className="hidden md:block"/>
            <div className="flex flex-col px-1 md:px-6 hidden md:block">
                <div className="flex justify-center items-center font-extrabold mb-2 hidden md:block">Downloads:</div>
                <div><Link href={"https://drive.google.com/file/d/1mwVJW7TKT8nyERWpZx2SrNE7gkAmrOWi/view?usp=sharing"} className="flex items-center py-[2px]"><FaGun/>EN-CV</Link></div>
                <div><Link href={"https://drive.google.com/file/d/1-_U-J7gdbkPLoAa4yqkAVHyLAT8i5B_3/view?usp=sharing"} className="flex items-center py-[2px]"><GiSausage/>DE-CV</Link></div>
            </div>
        </div>
        <div className="flex w-full items-center justify-center">
            <div className="text-2xl">
                <Writing myWord={"Happy to hear from you soon!"} time={100}/>
            </div>
        </div>
    </div>
      )
}
 
export default Footer;