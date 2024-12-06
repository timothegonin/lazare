// import logo from '../assets/logo/logo-min.svg'
import Logo from '../assets/logo/logo-min.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'
import MenuIcon from '../assets/logo/ui/list.svg'

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-[#1C3454]">
      <div>
      <Logo/>
      </div>
      <div className='flex justify-center gap-4'>
        <div className='flex items-center'>
          <PhoneIcon/>
        </div>
        <div className='flex items-center'>
          <button>
            <MenuIcon/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
