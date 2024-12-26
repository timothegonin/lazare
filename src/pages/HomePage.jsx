import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className="bg-[url('/src/assets/images/recipe.jpg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[550px]">
      <div
        className="pt-14 px-5 pb-32 h-[24px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(28,52,84,1) 44%, rgba(255,255,255,0) 100%)',
        }}
      >
        <h3 className="text-3xl text-[#C7A99A] citation ">
          Pas de hasard, que des rendez-vous
        </h3>
      </div>
      <Link
        to="/menu"
        className="px-4 py-3 rounded-md bg-[#C7A99A] text-[#F2F2F2]"
      >
        Découvrir la carte & les menus
      </Link>
    </div>
  )
}

export default HomePage
