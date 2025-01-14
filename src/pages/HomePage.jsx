import { Link } from 'react-router'
import chefPicture from '../assets/images/lazareChef.jpg'

const HomePage = () => {
  return (
    // <div className="bg-[#F2F2F2] bg-[url('/src/assets/images/lazareChef.jpg')] bg-clip-border bg-cover bg-no-repeat bg-center h-[550px]">
    <div className="relative flex flex-col">
      <div className="flex flex-col items-center absolute left-0 right-0">
        <div
          className="pt-14 px-5 pb-32 h-[24px] w-full"
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
      {/* <div className="bg-[#F2F2F2] bg-[url('/src/assets/images/lazareChef.jpg')] bg-clip-border bg-cover bg-no-repeat bg-[center_bottom_-5rem] h-[498px]"></div> */}
      <img
        className="object-cover "
        src={chefPicture}
        alt="Photograph of the chef at Lazare in front of his restaurant"
      />
      <div className="bg-white text-start p-10 flex flex-col gap-5">
        <h3 className="text-center  chef-name text-xl">
          Charles : Le Chef derrière Le Lazare
        </h3>
        <p>
          Je vous présente Charles, la passion et le talent derrière notre
          nouveau restaurant, Le Lazare, qui ouvre ses portes à Perpignan. 🍴✨
        </p>
        <p>
          🎓 Formé à l’école Ferrandi Paris, Charles a commencé son parcours
          dans l’excellence culinaire. Il a perfectionné son art dans des
          établissements de renom, comme le restaurant étoilé Qui Plume La Lune
          et le prestigieux George V Paris. 💫
        </p>
        <p>
          📍 Après avoir été Chef au restaurant La Réserve, près de Céret, il
          réalise aujourd’hui son rêve : ouvrir son propre restaurant où se
          mêlent convivialité, créativité et gourmandise.
        </p>
        <p>
          ❤️ Avec une cuisine bistronomique et semi-gastronomique, Charles est
          prêt à partager avec vous tout son savoir-faire et sa passion pour la
          gastronomie.
        </p>
        <p>
          👉 Venez le rencontrer et découvrir son univers culinaire au Lazare
        </p>
      </div>
    </div>
  )
}

export default HomePage
