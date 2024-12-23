import PropTypes from 'prop-types'
import CrossIcon from '../assets/logo/ui/cross.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import FacebookIcon from '../assets/logo/social_links/facebook.svg'
import InstagramIcon from '../assets/logo/social_links/instagram.svg'
import TripadvisorIcon from '../assets/logo/social_links/tripadvisor.svg'
import GeoIcon from '../assets/logo/social_links/geo.svg'

const SideMenu = ({ status, statusHandler}) => {
  return (
    <aside className={`${status ? 'fixed' : 'hidden'} top-0 left-0 bottom-0 right-0`}>
      <div className="flex flex-col items-end h-full" style={{backgroundColor : "rgb(102,117,149,0.85)"}}>
        <div className="h-full w-1/2 min-w-[218px] flex flex-col items-start p-6 gap-4 bg-[#1C3454]">
          <button onClick={() => statusHandler()}><CrossIcon fill="#C7A99A"/></button>
          <nav className='mt-6'>
            <ul className='flex flex-col items-start gap-4 text-[#C7A99A]'>
              <li>Accueil</li>
              <li>Découvrir la carte</li>
              <li>Découvrir les menus</li>
            </ul>
          </nav>
          <button className='flex items-center justify-between gap-4 my-4 py-2 px-2 rounded text-white bg-[#C7A99A]'>
            <PhoneIcon/>
            04 68 21 60 42
          </button>
          <ul className='list-none flex flex-row gap-4 '>
            <li className='m-auto'><FacebookIcon fill='#C7A99A'/></li>
            <li className='m-auto'><InstagramIcon fill='#C7A99A'/></li>
            <li className='m-auto'><TripadvisorIcon fill='#C7A99A'/></li>
          </ul>
          <ul className='list-none flex flex-row gap-4 justify-start text-[#F2F2F2] text-left'>
            <li className='m-auto'><GeoIcon fill='#C7A99A'/></li>
            <li className='font-light text-xs'>5 rue Lazare Escarguel, 66000 Perpignan</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

SideMenu.propTypes = {
  status: PropTypes.bool,
  statusHandler: PropTypes.func,
}

export default SideMenu