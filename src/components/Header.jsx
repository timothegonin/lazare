import PropTypes from 'prop-types'
import { NavLink } from 'react-router'
import CallTo from './CallTo'
import Logo from '../assets/logo/logo-min.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import MenuIcon from '../assets/logo/ui/list.svg'

const Header = ({ statusHandler }) => {
  const PhoneLink = () => {
    return (
      <>
        <div className="flex items-center min-[700px]:hidden">
          <CallTo phone="+33468216042">
            <PhoneIcon fill="#C7A99A" width="16" height="16" />
          </CallTo>
        </div>
        <button className="hidden items-center justify-between gap-4 py-2 px-2 rounded text-white bg-[#C7A99A] min-[700px]:flex">
          <PhoneIcon />
          <CallTo phone="+33468216042">04 68 21 60 42</CallTo>
        </button>
      </>
    )
  }
  const Navbar = () => {
    return (
      <>
        {/* Large screen */}
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
          <PhoneLink />
        </nav>
        {/* Small screen */}
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
      </>
    )
  }

  return (
    <header className="flex justify-between p-5 bg-[#1C3454]">
      <div>
        <Logo width="120" />
      </div>
      <Navbar />
    </header>
  )
}

Header.propTypes = {
  statusHandler: PropTypes.func,
}

export default Header
