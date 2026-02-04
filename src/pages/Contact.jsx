import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";
import Country from "../components/Country";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex flex-col items-center relative top-[-10vh] md:top-[-20vh]">

            {/* Hero Image */}
            <img
                src="/images/ContactImg.jpg"
                alt=""
                className="w-full object-cover"
            />

            {/* Heading */}
            <div className="px-4 md:px-0">
                <AnimatedText
                    lines={[
                        [{ text: "WHEREVER" }, { text: "LUXURY" }],
                        [
                            { text: "LIVE," },
                            { text: "WE" },
                            { text: "are", font: "font4" },
                            { text: "PRESENT" },
                        ],
                    ]}
                />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 px-6 md:px-0 py-6 flex flex-col gap-5 font-[font1] text-[13px] text-center">
                <p>
                    Elegance travels. It moves between cultures and across continents, carried by those
                    who seek the rare and the refined. From the grandeur of Paris to the vibrance of
                    Miami, the timeless rhythm of London to the bold energy of Dubai and Hong Kong,
                    our presence follows the world’s most discerning.
                </p>

                <p>
                    Charley SIGNATURE operates through regional offices in key global cities. Paris
                    oversees Europe, Miami leads in the United States, and Dubai guides our presence
                    in the GCC and Asia, with support from a local team in Hong Kong. This structure
                    allows us to stay closely connected to the evolving desires of Ultra High Net Worth
                    individuals and the brands they trust.
                </p>

                <p>
                    We speak the language of luxury with fluency and purpose, through precision,
                    poetry, and presence. If your vision calls for distinction, we welcome the beginning
                    of a meaningful collaboration.
                </p>

                <p>
                    For collaborations, write to us at webelieve@charleysignature.com
                </p>
            </div>

            {/* Country section */}
            <div className="py-8 w-full flex justify-center">
                <Country />
            </div>

            {/* Offices */}
            <div className="w-full max-w-6xl px-6 md:px-10 flex flex-col gap-10">

                <hr />

                {/* Grid instead of row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[14px] font-[font1]">

                    <div>
                        <p className="font-bold">UNITED STATES</p>
                        <p className="font-bold">MIAMI</p>
                        <p>1680 Washington Avenue<br />+1 786 862 3000</p>
                    </div>

                    <div>
                        <p className="font-bold">EUROPE</p>
                        <p className="font-bold">PARIS</p>
                        <p>42 Avenue Montaigne<br />+33 6 51 60 3000</p>
                    </div>

                    <div>
                        <p className="font-bold">GCC</p>
                        <p className="font-bold">DUBAI</p>
                        <p>Business Bay<br />+971 4 818 7274</p>
                    </div>

                    <div>
                        <p className="font-bold">ASIA</p>
                        <p className="font-bold">HONG KONG</p>
                        <p>Regional Office<br />+971 4 818 7274</p>
                    </div>
                </div>

                <hr />
            </div>

            {/* ================= JOIN + FORM ================= */}

            {/* Stack on mobile, side-by-side on desktop */}
            <div className="w-full max-w-6xl px-6 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left content */}
                <div className="flex flex-col gap-6">

                    <AnimatedText
                        lines={[
                            [{ text: "JOIN" }, { text: "OUR" }, { text: "WORLD," }],
                            [{ text: "of", font: "font4" }, { text: "ELEGANCE" }],
                        ]}
                    />

                    <p className="text-[13px] font-[font1]">
                        We welcome thoughtful, creative minds who share our passion for
                        beauty and refinement.
                    </p>

                    <p className="text-[13px] font-[font1]">
                        Share your story, résumé, and portfolio highlights.
                    </p>

                    <p className="font-[font1] font-bold tracking-widest">
                        Email: webelieve@charleysignature.com
                    </p>

                    <div className="flex items-center gap-4">
                        <FaInstagram size={18} />
                        <CiLinkedin size={18} />
                    </div>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-6 w-full">

                    <input
                        className="border-b-2 py-2 outline-none"
                        type="text"
                        placeholder="NAME *"
                    />

                    <input
                        className="border-b-2 py-2 outline-none"
                        type="email"
                        placeholder="EMAIL *"
                    />

                    <input
                        className="border-b-2 py-2 outline-none"
                        type="tel"
                        placeholder="PHONE NUMBER *"
                    />

                    <textarea
                        rows={4}
                        className="border-b-2 py-2 outline-none resize-none"
                        placeholder="TELL US *"
                    />

                    <Button btnText="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
