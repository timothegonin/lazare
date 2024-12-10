import GeoIcon from '../assets/logo/social_links/geo.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import FacebookIcon from '../assets/logo/social_links/facebook.svg'
import InstagramIcon from '../assets/logo/social_links/instagram.svg'
import TripadvisorIcon from '../assets/logo/social_links/tripadvisor.svg'


const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]">
      <div>
        <h2>Adresse</h2>
        <ul>
          <li><GeoIcon/></li>
          <li>5 rue Lazare Escarguel, 66000 PERPIGNAN</li>
        </ul>
      </div>
      <div>
        <h2>Nous contacter</h2>
        <ul>
          <li><PhoneIcon/></li>
          <li>04 68 21 60 42</li>
        </ul>
      </div>
      <div>
        <h2>Nous suivre</h2>
        <ul>
          <li><FacebookIcon/></li>
          <li><InstagramIcon/></li>
          <li><TripadvisorIcon/></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer