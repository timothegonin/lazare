const Hero = () => {
  return (
    <section>
      <div className="bg-[url('/src/assets/logo/logo.svg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[267px]">
        <h1 className="hidden">Lazare</h1>
      </div>
      <div className="bg-[url('/src/assets/images/recipe.jpg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[550px]">
        <div className="pt-14 px-5 pb-24" style={{background: "linear-gradient(180deg, rgba(28,52,84,1) 44%, rgba(255,255,255,0) 100%)"}}>
          <div className="bg-[url('/src/assets/images/citation.svg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[24px]">
            <h3 className="hidden">Pas de hasard, que des rendez-vous</h3>
          </div>
        </div>
        <button>Découvrir le menu</button>
      </div>
    </section>
  )
}

export default Hero