import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const AnimatedText = ({ lines, baseFont = "font2" }) => {

    gsap.registerPlugin(ScrollTrigger);
    let textContainer = useRef(null)

    useGSAP(() => {
        if (!textContainer.current) return;

        const letters = textContainer.current.querySelectorAll("h1");

        const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
                trigger: textContainer.current,
                start: "top 100%",
            },
        });

        tl.set(textContainer.current, {
            display: "flex",
            opacity: 1,
        });

        tl.from(letters, {
            opacity: 0,
            stagger: 0.15,
        });

        return () => {
            tl.kill();
        };
    }, []);


    return (
        <div
            ref={textContainer}
            className={`flex flex-col justify-center items-center leading-none font-[${baseFont}] text-lg sm:text-[2.4vw]`}
        >
            {lines.map((line, lineIdx) => (
                <div key={lineIdx} className="flex flex-wrap sm:flex-nowrap justify-center gap-3 sm:justify-normal sm:gap-0">
                    {line.map((word, wordIdx) => (
                        <div
                            key={wordIdx}
                            className={`flex gap-1 sm:mr-4 mb-3 ${word.font ? `font-[${word.font}]` : ""}`}
                        >
                            {word.text.split("").map((char, charIdx) => (
                                <h1 className="font-medium" key={charIdx}>{char}</h1>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedText;
