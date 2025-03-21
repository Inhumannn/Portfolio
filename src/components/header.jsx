
function Header({ setCurrentPage, title }){
  return(
    <header className="flex justify-between">
      <h1 className="pt-[26px] text-[30px] font-semibold text-[#d6d6d6]">{title}</h1>
      <nav className="absolute right-[0] top-[0] content-center bg-[#282829] border border-[#363636] rounded-tr-[12px] rounded-bl-[12px] py-[20px] px-[30px] ">
        <ul className="flex gap-[30px] list-none">
        <li><button onClick={() => setCurrentPage('home')} className="text-[14px] text-[#a2a2a2]">À propos</button></li>
        <li><button onClick={() => setCurrentPage('experience')} className="text-[14px] text-[#a2a2a2]">Experience</button></li>
        <li><button onClick={() => setCurrentPage('portfolio')} className="text-[14px] text-[#a2a2a2]">Portfolio</button></li>
        <li><button onClick={() => setCurrentPage('temoignages')} className="text-[14px] text-[#a2a2a2]">Temoignages</button></li>
        <li><button onClick={() => setCurrentPage('contact')} className="text-[14px] text-[#a2a2a2]">Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header