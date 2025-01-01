import PropTypes from 'prop-types'
import { NavLink } from 'react-router'
import CallTo from './CallTo'
import Logo from '../assets/logo/logo-min.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import MenuIcon from '../assets/logo/ui/list.svg'

const Header = ({ statusHandler }) => {
  return (
    <header className="flex justify-between p-5 bg-[#1C3454]">
      <div>
        <Logo width="120" />
      </div>
      <nav className="hidden items-center gap-4 min-[550px]:flex">
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
        <CallTo phone="+33468216042">
          <PhoneIcon fill="#C7A99A" width="16" height="16" />
        </CallTo>
      </nav>
      <nav className="flex justify-center gap-4 min-[550px]:hidden">
        <div className="flex items-center">
          <CallTo phone="+33468216042">
            <PhoneIcon fill="#C7A99A" width="16" height="16" />
          </CallTo>
        </div>
        <div className="flex items-center">
          <button onClick={() => statusHandler()}>
            <MenuIcon fill="#C7A99A" width="30" height="30" />
          </button>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  statusHandler: PropTypes.func,
}

export default Header
