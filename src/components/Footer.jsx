import ExternalLink from './ExternalLink'
import GeoIcon from '../assets/logo/social_links/geo.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import FacebookIcon from '../assets/logo/social_links/facebook.svg'
import InstagramIcon from '../assets/logo/social_links/instagram.svg'
import TripadvisorIcon from '../assets/logo/social_links/tripadvisor.svg'

const Divider = () => {
  return <span className="bg-[#C7A99A] h-[0.2px] w-14 mt-1 mb-3"></span>
}

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] flex flex-col gap-5 py-10 px-10">
      {/* 1 ADRESS */}
      <div className="flex flex-col items-start">
        <h2 className="text-xl">Adresse</h2>
        <Divider />
        <ul className="list-none flex flex-row gap-4">
          <li className="m-auto">
            <GeoIcon fill="#C7A99A" />
          </li>
          <li className="font-light">
            5 rue Lazare Escarguel, 66000 Perpignan
          </li>
        </ul>
      </div>
      {/* 2 CONTACT */}
      <div className="flex flex-col items-start">
        <h2 className="text-xl">Nous contacter</h2>
        <Divider />
        <ul className="list-none flex flex-row gap-4">
          <li className="m-auto">
            <PhoneIcon fill="#C7A99A" />
          </li>
          <li className="font-light">04 68 21 60 42</li>
        </ul>
      </div>
      {/* 3 FOLLOWING */}
      <div className="flex flex-col items-start">
        <h2 className="text-xl">Nous suivre</h2>
        <Divider />
        <ul className="list-none flex flex-row gap-4">
          <li className="m-auto">
            <ExternalLink url="https://www.facebook.com/profile.php?id=61568418431280">
              <FacebookIcon fill="#C7A99A" />
            </ExternalLink>
          </li>
          <li className="m-auto">
            <ExternalLink url="https://www.instagram.com/lazareperpignan/">
              <InstagramIcon fill="#C7A99A" />
            </ExternalLink>
          </li>
          <li className="m-auto">
            <ExternalLink url="https://www.tripadvisor.com/Restaurant_Review-g187156-d31121962-Reviews-Le_Lazare-Perpignan_Pyrenees_Orientales_Occitanie.html">
              <TripadvisorIcon fill="#C7A99A" />
            </ExternalLink>
          </li>
        </ul>
      </div>
      <p className="mt-8 font-thin text-slate-500">
        © 2024 Le Lazare. Tous droits réservés.
      </p>
    </footer>
  )
}

export default Footer
