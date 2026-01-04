import Button from "./Button"

const HeroBottomBtn = ({text}) => {
    return (
      <div className="flex flex-col items-center gap-3 sm:gap-4 text-center px-4">
  <h1
    className="
      font-[font2] uppercase
      text-xl
      sm:text-2xl
      md:text-3xl
      lg:text-4xl
      tracking-[0.2em]
      sm:tracking-widest
      max-w-3xl
    "
  >
    {text}
  </h1>

  <Button btnText="READ MORE" />
</div>

    )
}

export default HeroBottomBtn
