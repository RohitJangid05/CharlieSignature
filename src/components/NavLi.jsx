import { Link } from "react-router-dom"

const NavLi = ({ linkText, className="" }) => {
    return (
        <>
            <div className="group inline-flex flex-col items-start gap-1 w-fit">
                <Link to={linkText.toLowerCase()} className={`${className} uppercase tracking-[0.3em] font-semibold`}>
                    {linkText}
                </Link>
                <span className="hidden sm:block h-px w-full bg-black scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 origin-center"/>
            </div>

        </>
    )
}

export default NavLi
