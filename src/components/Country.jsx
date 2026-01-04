const Country = () => {
    let countries = ["paris", "london", "new york", "dubai", "hong kong", "miami"]
    return (
        <div
            className="px-10 sm:px-0 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 uppercase font-[font6] tracking-[0.15em] sm:tracking-widest text-xs sm:text-sm md:text-base text-center">
            {countries.map(country => (
                <p key={country} className="whitespace-nowrap">
                    {country}
                </p>
            ))}
        </div>

    )
}

export default Country
