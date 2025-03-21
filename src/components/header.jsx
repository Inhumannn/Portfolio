import { motion } from "framer-motion";

function Header({ setCurrentPage, title }) {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <header className="flex justify-between">
      <motion.h1
        className="pt-[26px] text-[30px] font-semibold text-[#d6d6d6]"
        key={title}
        initial={{ opacity: 0, z: 100 }}
        animate={{ opacity: 1, z: 0 }}
        exit={{ opacity: 0, z: -100 }}
        transition={transition}
      >
        {title}
      <motion.div className="w-[77px] h-[2px] bg-[#a6a6a6] border-none rounded-[5px] mt-[-9px] mr-0 mb-[22px] ml-0" initial={{ opacity: 0, z: 100 }} animate={{ opacity: 1, z: 0 }} exit={{ opacity: 0, z: -100 }} transition={transition}></motion.div>
      </motion.h1>
      <nav className="absolute right-[0] top-[0] content-center bg-[#282829] border border-[#363636] rounded-tr-[12px] rounded-bl-[12px] py-[20px] px-[30px] ">
        <ul className="flex gap-[30px] list-none">
          <li><button onClick={() => setCurrentPage("home")} className="text-[14px] text-[#a2a2a2]">À propos</button></li>
          <li><button onClick={() => setCurrentPage("experience")} className="text-[14px] text-[#a2a2a2]">Experience</button></li>
          <li><button onClick={() => setCurrentPage("portfolio")} className="text-[14px] text-[#a2a2a2]">Portfolio</button></li>
          <li><button onClick={() => setCurrentPage("temoignages")} className="text-[14px] text-[#a2a2a2]">Témoignages</button></li>
          <li><button onClick={() => setCurrentPage("contact")} className="text-[14px] text-[#a2a2a2]">Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;