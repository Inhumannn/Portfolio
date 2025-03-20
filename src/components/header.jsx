import { NavLink } from "react-router-dom"

function Header({title}){
  return(
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><NavLink to="/">À propos</NavLink></li>
          <li><NavLink to="/experience">Expérience</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/temoignages">Témoignages</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header