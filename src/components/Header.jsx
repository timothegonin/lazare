import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router'
import ExternalLink from './ExternalLink'
import CallTo from './CallTo'
import Logo from '../assets/logo/logo-min.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import MenuIcon from '../assets/logo/ui/list.svg'
import FacebookIcon from '../assets/logo/social_links/facebook.svg'
import InstagramIcon from '../assets/logo/social_links/instagram.svg'
import TripadvisorIcon from '../assets/logo/social_links/tripadvisor.svg'

const Header = ({ statusHandler }) => {
  const PhoneLink = () => {
    return (
      <>
        <div className="flex items-center min-[790px]:hidden">
          <CallTo phone="+33468216042">
            <PhoneIcon fill="#C7A99A" width="16" height="16" />
          </CallTo>
        </div>
        <button className="hidden items-center justify-between gap-4 py-1.5 px-2 rounded text-white bg-[#C7A99A] min-[790px]:flex">
          <PhoneIcon />
          <CallTo phone="+33468216042">04 68 21 60 42</CallTo>
        </button>
      </>
    )
  }
  const NetworksLinks = () => {
    return (
      <>
        <ul className="hidden list-none flex-row gap-4 min-[830px]:flex">
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
        {/* <ul className="list-none flex flex-row gap-4 justify-start text-[#F2F2F2] text-left">
          <li className="m-auto">
            <GeoIcon fill="#C7A99A" />
          </li>
          <li className="font-light text-xs">
            5 rue Lazare Escarguel, 66000 Perpignan
          </li>
        </ul> */}
      </>
    )
  }
  const Navbar = () => {
    return (
      <>
        {/* Large screen */}
        <nav className="hidden items-center gap-4 min-[600px]:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline underline-offset-2'
                : 'text-[#C7A99A]'
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline underline-offset-2'
                : 'text-[#C7A99A]'
            }
          >
            Découvrir la carte
          </NavLink>
          <NavLink
            to="/formules"
            className={({ isActive }) =>
              isActive
                ? 'text-white underline underline-offset-2'
                : 'text-[#C7A99A]'
            }
          >
            Découvrir les menus
          </NavLink>
          <NetworksLinks />
          <PhoneLink />
          <div className="flex items-center">
            <button onClick={() => statusHandler()}>
              <MenuIcon fill="#C7A99A" width="30" height="30" />
            </button>
          </div>
        </nav>
      </>
    )
  }

  return (
    <header className="flex justify-center bg-[#1C3454]">
      <div className="max-w-screen-xl flex justify-between p-5 w-full">
        <Link to="/">
          <Logo width="120" />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

Header.propTypes = {
  statusHandler: PropTypes.func,
}

export default Header
