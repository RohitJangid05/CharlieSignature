import { useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";

const Portfolio = () => {
    const portfolioRef = useRef(null)
     const PortfolioImages = [
        {
            src: "/images/Banner_4.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-2",
        },
        {
            src: "/images/Banner_6.jpg",
            text: "Emaar",
            colSpan: "col-span-1",
        }, 
        {
            src: "/images/Banner_7.jpg",
            text: "Franck Muller",
            colSpan: "col-span-3",
        },
        {
            src: "/images/Banner_8.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-1",
        },
        {
            src: "/images/Banner_9.jpg",
            text: "Four Season Dubai",
            colSpan: "col-span-2",
        },{
            src: "/images/Banner_10.jpg",
            text: "Franck Muller",
            colSpan: "col-span-3",
        },
        {
            src: "/images/Banner_11.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-1",
        },
        {
            src: "/images/Banner_5.jpg",
            text: "Four Season Dubai",
            colSpan: "col-span-2",
        },
        {
            src: "/images/Banner_4.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-2",
        },
        {
            src: "/images/Banner_6.jpg",
            text: "Emaar",
            colSpan: "col-span-1",
        }, 
        {
            src: "/images/Banner_7.jpg",
            text: "Franck Muller",
            colSpan: "col-span-3",
        },
        {
            src: "/images/Banner_8.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-1",
        },
        {
            src: "/images/Banner_9.jpg",
            text: "Four Season Dubai",
            colSpan: "col-span-2",
        },{
            src: "/images/Banner_10.jpg",
            text: "Franck Muller",
            colSpan: "col-span-3",
        },
        {
            src: "/images/Banner_11.jpg",
            text: "The St.Regis Maldives",
            colSpan: "col-span-1",
        },
        {
            src: "/images/Banner_5.jpg",
            text: "Four Season Dubai",
            colSpan: "col-span-2",
        },
    ];
    return (
        <div className="py-10 flex flex-col justify-center items-center">
            <AnimatedText lines={[[{ text: "A" }, { text: "PORTFOLIO" }], [{ text: "of", font: "font4" }, { text: "POETIC" }, { text: "PRECISION" }],]} />
            <p className="px-2 text-sm text-center">Each project in this collection is a crafted expression of identity, intention, and elegance.</p>
            <div className="flex justify-between gap-10 sm:gap-20 py-10">
                <Button btnText={"Branding"} />
                <Button btnText={"Design"} />
            </div>
           <div className="sm:w-[90%]">
             <div ref={portfolioRef} className="flex flex-col justify-center items-center">
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
            </div>
           </div>
        </div>
    )
}

export default Portfolio
