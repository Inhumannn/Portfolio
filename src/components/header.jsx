import { NavLink } from "react-router-dom"

function Header({title}){
  // useEffect(() => {
  //   document.querySelector('#root').classList.add('max-w-[1240px]')
  // })
  return(
    <header className="flex justify-between">
      <h1 className="pt-[26px] text-[30px]">{title}</h1>
      <nav className="absolute right-[0] top-[0] content-center bg-[#282829] border-solid border-[#363636] rounded-[0 12px] p-[20px 30px]">
        <ul className="flex gap-[30px] list-none">
          <li><NavLink to="/" className="text-[14px] text-[#a2a2a2]">À propos</NavLink></li>
          <li><NavLink to="/experience" className="text-[14px] text-[#a2a2a2]">Expérience</NavLink></li>
          <li><NavLink to="/portfolio" className="text-[14px] text-[#a2a2a2]">Portfolio</NavLink></li>
          <li><NavLink to="/temoignages" className="text-[14px] text-[#a2a2a2]">Témoignages</NavLink></li>
          <li><NavLink to="/contact" className="text-[14px] text-[#a2a2a2]">contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header