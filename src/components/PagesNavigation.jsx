import { NavLink, useLocation } from 'react-router'

const PagesNavigation = () => {
  const location = useLocation()
  const navBarLinksOrder = location.pathname.includes('menu')
    ? 'flex-row'
    : 'flex-row-reverse'

  return (
    <nav
      className={`flex ${navBarLinksOrder} justify-evenly items-center h-[115px] bg-[#1C3454]`}
    >
      <NavLink
        to="/lazare/menu"
        className="text-2xl font-bold"
        style={({ isActive }) => ({
          color: isActive ? 'white' : '#C7A99A',
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        La carte
      </NavLink>
      <NavLink
        to="/lazare/formules"
        className="text-2xl font-bold"
        style={({ isActive }) => ({
          color: isActive ? 'white' : '#C7A99A',
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        Les menus
      </NavLink>
    </nav>
  )
}

export default PagesNavigation
