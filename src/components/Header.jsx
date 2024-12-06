import logo from '../assets/logo/logo-min.svg'
import phoneIcon from '../assets/logo/social_links/phone.svg'
import menuIcon from '../assets/logo/ui/list.svg'

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-[#1C3454]">
      <div>
        <img src={logo} alt="Lazare logo" />
      </div>
      <div className='flex justify-center gap-4'>
        <div className='flex items-center'>
          <span>
            <img src={phoneIcon} alt="Phone icon" />
          </span>
        </div>
        <div className='flex items-center'>
          <button>
            <img src={menuIcon} alt="Menu icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
