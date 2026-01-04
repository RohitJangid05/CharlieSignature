const Button = ({ btnText }) => {
    return (
        <button className="flex justify-center items-center border py-2 px-5 hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            {btnText}
        </button>
    )
}

export default Button
