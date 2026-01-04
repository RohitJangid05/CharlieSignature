import Country from "./Country"

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center gap-6 pb-10">
            <img className="w-36" src="/images/charley_signature_logo.svg" alt="Footer Logo" />
            <Country/>
           <div className="flex flex-col gap-2 items-center text-[12px] tracking-widest font-[font1] mt-10">
             <p>©CHARLEYSIGNATURE, Inc. All rights reserved.</p>
            <ul className="flex gap-3 flex-wrap justify-center">
                <li>Terms of Use</li>
                <li>| Shared Responsibility</li>
                <li>| Privacy Policy</li>
                <li>| Cookie Policy</li>
            </ul>
           </div>
        </div>
    )
}

export default Footer
