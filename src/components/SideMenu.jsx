import CrossIcon from '../assets/logo/ui/cross.svg'
import PhoneIcon from '../assets/logo/social_links/phone.svg'

const SideMenu = () => {
  return (
    <aside className="fixed top-0 left-0 bottom-0 right-0">
      <div className="flex flex-col items-end h-full" style={{backgroundColor : "rgb(102,117,149,0.85)"}}>
        <div className="h-full w-1/2 flex flex-col items-start p-6 bg-[#1C3454]">
          <button><CrossIcon fill="#C7A99A"/></button>
          <nav className='mt-6'>
            <ul className='flex flex-col items-start gap-4 text-[#C7A99A]'>
              <li>Accueil</li>
              <li>Découvrir la carte</li>
              <li>Découvrir les menus</li>
            </ul>
          </nav>
          <button className='flex items-center gap-4 my-4 py-2 px-2 rounded text-white bg-[#C7A99A]'>
            <PhoneIcon/>
            04 68 21 60 42
          </button>
          <ul className="flex flex-col items-start gap-4 text-[#F2F2F2]">
            <li>facebook</li>
            <li>instagram</li>
            <li>tripadvisor</li>
            <li>adress</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default SideMenu