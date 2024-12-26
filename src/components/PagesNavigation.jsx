import { useLocation } from 'react-router'

const PagesNavigation = () => {
  const location = useLocation()
  const navBarLinksOrder = location.pathname.includes('menu')
    ? 'flex-row'
    : 'flex-row-reverse'

  return (
    <nav
      className={`flex ${navBarLinksOrder} justify-evenly h-[115px] bg-[#1C3454]`}
    >
      <button className="text-2xl font-bold text-white underline">
        La carte
      </button>
      <button className="text-2xl font-bold text-[#C7A99A]">Les menus</button>
    </nav>
  )
}

export default PagesNavigation
