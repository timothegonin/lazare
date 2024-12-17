import Logo from '../assets/logo/logo-min.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import MenuIcon from '../assets/logo/ui/list.svg'

const Header = ({statusHandler}) => {
  return (
    <header className="flex justify-between p-5 bg-[#1C3454]">
      <div>
      <Logo width="120"/>
      </div>
      <nav className='flex justify-center gap-4'>
        <div className='flex items-center'>
          <PhoneIcon fill='#C7A99A' width="16" height="16"/>
        </div>
        <div className='flex items-center'>
          <button onClick={()=> statusHandler()}>
            <MenuIcon fill='#C7A99A' width="30" height="30"/>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
