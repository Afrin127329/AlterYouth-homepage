import HeroForm from "../HeroForm"

const Hero = () => {

  return (
    <section className="hero text-white">
      <div className="w-full px-24 hidden md:flex md:justify-between md:items-center md:my-12 lg:my-0 h-full">

        <div className="w-full md:w-1/3">
          <h1 className="pt-32 md:pt-0 text-2xl lg:text-6xl leading-[65px] font-bold">Start your
            scholarship</h1>
          <p className="pt-4 text-[18px]">Directly for students in Government Primary
            Schools throughout Bangladesh</p>
        </div>

        <div>
          <HeroForm />
        </div>

      </div>
    </section>
  )
}

export default Hero