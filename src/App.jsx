import { useState } from "react";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Portfolio from "./pages/portfolio";
import Temoignages from "./pages/temoignages";
import Header from "./components/header";

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
  return (
    <>
      <div className="relative border border-[#363636] bg-[#1e1e1f] rounded-[15px] pt-0 px-[35px] pb-[35px]">
        <div className="bg-[#1e1e1f] rounded-[15px]">
          <Header title="À propos de moi" setCurrentPage={setCurrentPage}/>
          <hr className="w-[225px] h-[2px] bg-[#a6a6a6] border-none rounded-[5px] mt-[-9px] mr-0 mb-[22px] ml-0" />
          {renderPage()}
        </div>
      </div>
    <Footer />
  </>
  )
}

export default App