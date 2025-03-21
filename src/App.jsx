import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Portfolio from "./pages/portfolio";
import Temoignages from "./pages/temoignages";

function App(){
  const [currentPage, setCurrentPage] = useState("home")
  const renderPage = () => {
    switch(currentPage){
      case "home":
        return <Home />
      case "experience":
        return <Experience />
      case "portfolio":
        return <Portfolio />
      case "temoignages":
        return <Temoignages />
      case "contact":
        return <Contact />
      default:
        return <NotFound />
    }
  }
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }
  return (
    <>
      <div className="relative border border-[#363636] bg-[#1e1e1f] rounded-[15px] pt-0 px-[35px] pb-[35px]">
        <div className="bg-[#1e1e1f] rounded-[15px]">
          <Header title={currentPage === "home" ? "À propos de moi" : currentPage === "experience" ? "Expérience" :  currentPage === "portfolio" ? "Portfolio" : currentPage === "temoignages" ? "Témoignages" : currentPage === "contact" ? "Contact" : "Page non trouvée"} setCurrentPage={setCurrentPage}/>
          <hr className="w-[77px] h-[2px] bg-[#a6a6a6] border-none rounded-[5px] mt-[-9px] mr-0 mb-[22px] ml-0" />
          <motion.div key={currentPage} initial={{ opacity: 0, z: 100 }} animate={{ opacity: 1, z: 0 }}  transition={transition}>
          {renderPage()}
          </motion.div>
        </div>
      </div>
    <Footer />
  </>
  )
}

export default App