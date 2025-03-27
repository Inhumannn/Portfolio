import { Analytics } from "@vercel/analytics/react";
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

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const pages = {
    home: <Home />,
    experience: <Experience />,
    portfolio: <Portfolio />,
    temoignages: <Temoignages />,
    contact: <Contact />,
  }
  const isValidPage = currentPage in pages
  const renderPage = isValidPage ? pages[currentPage] : <NotFound />
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <>
      <Analytics />
      <div className="relative border border-[#363636] bg-[#1e1e1f] rounded-[15px] pt-0 px-[35px] pb-[35px]">
        <div className="bg-[#1e1e1f] rounded-[15px]">
          <Header
            title={currentPage in pages ? {home: "À propos de moi",experience: "Expérience",portfolio: "Portfolio",temoignages: "Témoignages",contact: "Contact"}[currentPage] : "Page non trouvée"} setCurrentPage={setCurrentPage}
          />
          <motion.div key={currentPage} initial={{ opacity: 0, z: 100 }} animate={{ opacity: 1, z: 0 }} exit={{ opacity: 0, z: -100 }} transition={transition}>{renderPage}</motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App