import LazareLogo from '../assets/logo/lazare-logo.svg'

const Hero = () => {
  return (
    <section className='bg-[#1C3454]'>
      <div className="bg-[#1C3454] h-[267px]">
        <LazareLogo className="w-full h-full"/>
        <h1 className="hidden">Lazare</h1>
      </div>
      <div className="bg-[url('/src/assets/images/recipe.jpg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[550px]">
        <div className="pt-14 px-5 pb-24" style={{background: "linear-gradient(180deg, rgba(28,52,84,1) 44%, rgba(255,255,255,0) 100%)"}}>
          <div className="bg-[url('/src/assets/images/citation.svg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[24px]">
            <h3 className="hidden">Pas de hasard, que des rendez-vous</h3>
          </div>
        </div>
        <button className="px-4 py-3 rounded-md bg-[#C7A99A] text-[#F2F2F2]">Découvrir le menu</button>
      </div>
    </section>
  )
}

export default Hero