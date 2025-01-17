import LazareLogo from '../assets/logo/lazare-logo.svg'

const Hero = () => {
  return (
    <section className="bg-[#1C3454] relative z-20">
      <div className="bg-[#1C3454] h-[267px]">
        <LazareLogo className="w-full h-full" />
        <h1 className="hidden">Lazare</h1>
      </div>
    </section>
  )
}

export default Hero
