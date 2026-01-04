import { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "../components/AnimatedText";
import HeroBottomBtn from "../components/HeroBottomBtn";
import Button from "../components/Button";
import Country from "../components/Country";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [showSnap, setShowSnap] = useState(true);

    const snapRef = useRef(null);
    const videoRef = useRef(null);
    const textContainer1 = useRef(null);
    const textContainer2 = useRef(null);

    const eleganceRef = useRef(null);
    const clientRef = useRef(null)
    const portfolioRef = useRef(null)
    const bottomRef = useRef(null)

    let clientsImages = [
        "/images/Aston_Martin.svg",
        "/images/Armani.svg",
        "/images/Burj_Khalifa.svg",
        "/images/Burj_Al_Arab.svg",
        "/images/Dior.svg",
        "/images/Four_season.svg",
        "/images/Bvlgari.svg",
        "/images/Mandarin_Orientals.svg",
        "/images/Rolls_Royce.svg",
        "/images/Lamborghini.svg",
        "/images/Bentley.svg",
        "/images/Raffles.svg",
    ]

    const PortfolioImages = [
        {
            src: "/images/Banner_1.jpg",
            text: "Iris Alexander",
            colSpan: "col-span-2",
        },
        {
            src: "/images/Banner_2.jpg",
            text: "Emaar",
            colSpan: "col-span-1",
        },
        {
            src: "/images/Banner_3.jpg",
            text: "Franck Muller",
            colSpan: "col-span-3",
        },
        {
            src: "/images/Banner_4.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-1",
        },
        {
            src: "/images/Banner_5.jpg",
            text: "Four Season Dubai",
            colSpan: "col-span-2",
        },
    ];

    const fadeUp = (targets, trigger, options = {}) => {
        gsap.from(targets, {
            y: options.y ?? 60,
            opacity: 0,
            duration: options.duration ?? 1.2,
            stagger: options.stagger ?? 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger,
                start: "top 80%",
            },
        });
    };
    const imageFade = (targets, options = {}) => {
        gsap.utils.toArray(targets).forEach((el) => {
            gsap.fromTo(
                el,
                { scale: 1.2 },
                {
                    scale: 1,
                    duration: options.duration ?? 1.4,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // GSAP hover (replaces hover:scale-105)
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            });

            el.addEventListener("mouseleave", () => {
                gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });
    };



    //Video Popup
    useEffect(() => {
        if (!videoRef.current) return;

        if (showVideo) {
            // document.body.style.overflow = "hidden";
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            // document.body.style.overflow = "scroll";
        }
    }, [showVideo]);

    // Snap animation 
    useEffect(() => {
        const t = setTimeout(() => setShowSnap(false), 500);
        return () => clearTimeout(t);
    }, []);

    // text animation 
    useGSAP(() => {
        if (!textContainer1.current || !textContainer2.current) return;

        const letters = textContainer2.current.querySelectorAll("h1");

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.to(textContainer1.current, {
            opacity: 0,
            delay: 2,
            duration: 0.4,
        })
            .set(textContainer1.current, { display: "none" })
            .set(textContainer2.current, { display: "flex" })
            .from(letters, {
                opacity: 0,
                stagger: 0.15,
                duration: 1,
            });

        return () => tl.kill();
    }, []);

    //fade up animation
    useGSAP(() => {
        const ctx = gsap.context(() => {

            if (eleganceRef.current) {
                fadeUp(
                    eleganceRef.current.children,
                    eleganceRef.current,
                    { y: 80, stagger: 0.7 }
                );
            }

            if (clientRef.current) {
                const title = clientRef.current.querySelector("h1");
                const items = clientRef.current.querySelectorAll("div > div");
                fadeUp([title, ...items], clientRef.current);
            }

            if (portfolioRef.current) {
                const title = portfolioRef.current.querySelector("h1");
                const imgs = portfolioRef.current.querySelectorAll("div>div>img")
                fadeUp(title, portfolioRef.current);
                imageFade([...imgs], portfolioRef.current)
            }

            if (bottomRef.current) {
                const title = bottomRef.current.querySelector("h1");
                const items = bottomRef.current.querySelectorAll("div > div");
                fadeUp([title, ...items], bottomRef.current);
            }

        });

        return () => ctx.revert();
    }, []);


    return (
        <>
            {/* VIDEO MODAL */}
            {showVideo && (
                <div className="absolute inset-0 z-50 bg-white flex items-center justify-center">
                    <video
                        ref={videoRef}
                        className="h-[95vh]"
                        src="/video/popUp-video.mp4"
                        controls
                    />
                    <button
                        onClick={() => setShowVideo(prev => !prev)}
                        className="absolute top-6 right-5 sm:right-10 w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                    >
                        <RxCross1 />
                    </button>
                </div>
            )}
            <div className="w-full sm:px-30">

                {/*Hero Section */}
                <section className="relative -top-[16vh] h-screen w-full overflow-hidden">

                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/video/home.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* HERO TEXT 1 */}
                    <div
                        ref={textContainer1}
                        className="absolute inset-0 flex flex-col justify-center items-center font-[font2] text-xl sm:text-[2.4vw]"
                    >
                        <h1 className="tracking-widest">
                            A GLOBAL BOUTIQUE BRANDING
                        </h1>
                        <h1 className="tracking-widest">
                            <span className="font-[font4] text-lg sm:text-[2.1vw]"> and </span>
                            DESIGN AGENCY
                        </h1>
                    </div>

                    {/* HERO TEXT 2 */}
                    <div
                        ref={textContainer2}
                        className="hidden absolute inset-0 flex-col justify-center items-center font-[font2] text-xl sm:text-[2.4vw]"
                    >
                        <div className="flex">
                            <h1 className="mr-4">A</h1>
                            <div className="flex gap-1 mr-4">
                                {"WORLD".split("").map((l, idx) => <h1 key={idx}>{l}</h1>)}
                            </div>
                            <div className="flex gap-1 mr-4 font-[font4] ">
                                <h1>O</h1><h1>f</h1>
                            </div>
                            <div className="flex gap-1 mr-4">
                                {"ELEGANCE".split("").map((l, idx) => <h1 key={idx}>{l}</h1>)}
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex gap-1 mr-4">
                                {"WRITTEN".split("").map((l, idx) => <h1 key={idx}>{l}</h1>)}
                            </div>
                            <div className="flex gap-1 mr-4 font-[font4]">
                                {"With".split("").map((l, idx) => <h1 key={idx}>{l}</h1>)}
                            </div>
                            <div className="flex gap-1 mr-4">
                                {"POETRY".split("").map((l, idx) => <h1 key={idx}>{l}</h1>)}
                            </div>
                        </div>
                    </div>

                    {/* SNAP OVERLAY */}
                    {showSnap && (
                        <div ref={snapRef}
                            className="absolute inset-[5%] bg-black/10 pointer-events-none"
                        />
                    )}

                    {/* PLAY VIDEO */}
                    <button
                        onClick={() => setShowVideo(true)}
                        className="absolute bottom-30 right-5 sm:right-20 uppercase font-[font5] tracking-widest cursor-pointer"
                    >
                        Play Video
                    </button>
                </section>

                <div className="w-full relative -top-28">

                    {/* Elegance Section */}
                    <section className="flex flex-col gap-10 sm:gap-20">
                        <AnimatedText
                            lines={[
                                [
                                    { text: "LUXURY" },
                                    { text: "is", font: "font4" },
                                    { text: "THE" },
                                    { text: "DESTINATION," },
                                ],
                                [
                                    { text: "ELEGANCE" },
                                    { text: "is", font: "font4" },
                                    { text: "our", font: "font4" },
                                    { text: "JOURNEY." },
                                ],
                            ]}
                        />

                        <div
                            ref={eleganceRef}
                            className="flex flex-col items-center gap-6">
                            <h1 className="font-[font6] tracking-widest text-[12px] sm:text-xl">
                                A GLOBAL BRANDING AGENCY
                            </h1>

                            <Country />

                            <div className="flex justify-between sm:justify-none sm:gap-20 py-24">
                                <HeroBottomBtn text="BRANDING" />
                                <HeroBottomBtn text="DESIGN" />
                            </div>
                        </div>

                    </section>

                    {/* Client Section*/}
                    <section className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-4">
                        <AnimatedText
                            lines={[
                                [{ text: "LEGACY" }, { text: "and", font: "font4" }],
                                [{ text: "GLOBAL" }, { text: "PARTNERSHIP" }],
                            ]}
                        />

                        <div ref={clientRef} className="flex flex-col items-center gap-4 w-full">
                            <h1 className="font-[font6] tracking-[0.25em] text-sm sm:text-base">
                                OUR CLIENTS
                            </h1>

                            <div
                                className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 w-full justify-between">
                                {clientsImages.map((client, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-center aspect-square">
                                        <img
                                            src={client}
                                            alt="Client logo"
                                            className="w-[50%] h-[50%] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* Portfolio Section */}
                    <section className="flex flex-col items-center gap-5 justify-center py-10">
                        <AnimatedText
                            lines={[
                                [{ text: "THE" }, { text: "ART" }, { text: "of", font: "font4" }, { text: " PRESTIGE," }],
                                [{ text: "ECHOED" }, { text: "across", font: "font4" }, { text: "THE" }, { text: "WORLD" }],
                            ]}
                        />
                        <div ref={portfolioRef} className="flex flex-col justify-center items-center">
                            <h1 className="font-[font6] tracking-widest">OUR PORTFOLIO</h1>
                            <div className="grid grid-cols-3 gap-2 py-5 px-5 sm:px-0">
                                {PortfolioImages.map((item, idx) => (
                                    <div key={idx} className={`${item.colSpan} overflow-hidden relative`}>
                                        <img
                                            src={item.src}
                                            alt={`Portfolio ${idx + 1}`}
                                            className="w-full h-full object-cover transition-all duration-700 ease-out cursor-pointer filter grayscale-35"
                                        />
                                        <h1 className="absolute bottom-3 pl-3 text-white">{item.text}</h1>
                                    </div>
                                ))}
                            </div>
                            <Button btnText={"View More"} />
                        </div>
                    </section>

                    {/* Bottom section  */}
                    <section className="flex flex-col items-center gap-5 justify-center py-10">
                        <AnimatedText
                            lines={[
                                [{ text: "A" }, { text: "WORLD" }, { text: "of", font: "font4" }, { text: "LEGACIES" }, { text: "SHAPED" },],
                                [{ text: "ACROSS" }, { text: "CITIES," }, { text: "CONTINENTS" }, { text: "and", font: "font4" }, { text: "TIME" }],
                            ]} />
                        <div ref={bottomRef} className="w-full flex flex-col items-center gap-5">
                            <hr className="w-full bg-black" />
                            <div className="w-full sm:w-1/2 flex flex-col gap-3 justify-center items-center">
                                <h1 className="font-[font2] text-xl sm:text-4xl">ENQUIRIES</h1>
                                <p className="text-center font-[font3] text-sm px-5 sm:px-0">For bespoke collaborations, global partnerships, and project enquiries, contact us to explore how we can assist or arrange a meeting.</p>
                                <Button btnText={"CONVERSATION"} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;