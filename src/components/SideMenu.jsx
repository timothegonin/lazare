const SideMenu = () => {
  return (
    <aside className="fixed top-0 left-0 bottom-0 right-0">
      <div className="flex flex-col items-end h-full" style={{backgroundColor : "rgb(102,117,149,0.85)"}}>
        <div className="h-full w-1/2 flex flex-col items-start p-6 bg-[#1C3454]">
          <button>X</button>
          <nav></nav>
          <button>Phone</button>
          <ul>
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