import { use, useRef, useState } from "react"
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavLi from "./NavLi";


const NavBar = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [open, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false)
    const navRef = useRef(null);
    const dropDownRef = useRef(null)

    //drop animation
    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            delay: 0.5,
            duration: 2,
            ease: "power3.out",
        });
    });

    const handleClick = () => {
        if (open) {
            dropDownRef.current.style.top = "-100vh"
        } else {
            dropDownRef.current.style.top = "0"
        }
        setOpen(prev => !prev);
    };

    return (
        <>
            <nav ref={navRef} className='w-full h-full bg-transparent relative z-10'>
                <div className="w-full h-28 px-5 sm:px-15 py-6 flex justify-between items-center">
                    <div onClick={handleClick} className="w-7 flex flex-col gap-2 cursor-pointer group relative z-2">
                        <hr className={`h-0.5 w-full bg-black origin-left transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`} />
                        <hr className={`h-0.5 w-2/3 group-hover:w-full bg-black transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                        <hr className={`h-0.5 w-full bg-black origin-left transition-transform duration-300 ${open ? "-rotate-45" : "rotate-0"}`} />
                    </div>
                    <img src="/images/charley_signature_logo.svg" alt="Logo" />
                    <div className="hidden sm:flex gap-10 font-[font1] text-[14px]">
                        <div className="group flex flex-col gap-1 justify-center ">
                            <NavLi linkText={"Portfolio"} />
                        </div>
                        <div className="group flex flex-col gap-1 justify-center ">
                            <NavLi linkText={"Contact"} />
                        </div>
                    </div>
                </div>

                <div ref={dropDownRef} className="w-full sm:h-[70vh] bg-transparent backdrop-blur-2xl absolute z-1 top-[-100vh] shadow-sm transition-all duration-1000 pl-15 sm:pl-10 p-10 flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row gap-10 text-[10px] ">
                        <div className="mt-10 sm:mt-0 sm:px-20 sm:border-r flex flex-col gap-3 ">
                            <div className="group flex flex-col relative">
                                <div className="flex justify-between items-center">
                                    <NavLi linkText={"About US"} />
                                    <RiArrowDropDownLine
                                        onClick={() => setDropDown(p => !p)}
                                        className={`sm:hidden text-2xl transition-transform duration-500 ${dropDown ? "rotate-180" : "rotate-0"}`}/>
                                </div>

                                <div
                                    className={` sm:hidden overflow-hidden flex flex-col gap-3 my-2 transition-[max-height,opacity,transform] duration-500 ease-in-out ${dropDown? "max-h-137 opacity-100 translate-y-0": "max-h-0 opacity-0 -translate-y-1"}`}>
                                    <NavLi linkText={"THE CRAFT OF ELEGANCE"} />
                                    <NavLi linkText={"SIGNATURE OF ELEGANCE"} />
                                    <NavLi linkText={"RARE & REFINED, GLOBALLY"} />
                                    <NavLi linkText={"SERVICES"} />
                                    <NavLi linkText={"TEAM"} />
                                </div>
                            </div>

                            <NavLi linkText={"BRANDING AS POETRY"} />
                            <NavLi linkText={"Design & Art Direction"} />
                            <NavLi linkText={"ULTRA HIGH NET WORTH INDIVIDUALS"} />
                            <NavLi linkText={"CLIENTS"} />
                            <NavLi linkText={"PORTFOLIO"} />
                            <NavLi linkText={"PRESS"} />
                            <NavLi linkText={"CONTACT"} />
                        </div>
                        <div className="hidden sm:inline-flex flex-col gap-5">
                            <NavLi linkText={"THE CRAFT OF ELEGANCE"} />
                            <NavLi linkText={"SIGNATURE OF ELEGANCE"} />
                            <NavLi linkText={"RARE & REFINED, GLOBALLY"} />
                            <NavLi linkText={"SERVICES"} />
                            <NavLi linkText={"TEAM"} />
                        </div>
                    </div>
                    <hr className="sm:hidden mt-2" />
                    <div className="py-5 flex flex-col gap-4 sm:flex-row sm:pl-20 relative sm:justify-between text-[12px] tracking-[0.15em]">
                        <div className="flex gap-2 items-center">
                            <p>FOLLOW US</p>
                            <FaInstagram className="text-[18px]" />
                            <CiLinkedin className="text-[18px]" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <p>+ 1 786 862 3970</p> <span className="hidden sm:block">|</span>
                            <p>+ 971 4 818 7157</p>  <span className="hidden sm:block">|</span>
                            <p>+ 33 1 70 92 91 31</p>
                        </div>
                        <hr className="sm:hidden" />
                        <div className="flex gap-2 items-center">
                            <p>THE SIGNATURE NEWSLETTER</p>
                            <span className="w-18 h-[0.5px] bg-black"></span>
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
