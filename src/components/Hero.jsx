const Hero = () => {
  return (
    <section>
      <div className="bg-[url('/src/assets/logo/logo.jpg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[267px]">
        <h1 className="hidden">Lazare</h1>
      </div>
      <div className="bg-[url('/src/assets/images/recipe.jpg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[550px]">
        <div className="bg-[url('/src/assets/images/citation.svg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[24px] mx-5">
          <h3 className="hidden">Pas de hasard, que des rendez-vous</h3>
        </div>
        <button>Découvrir le menu</button>
      </div>
    </section>
  )
}

export default Hero