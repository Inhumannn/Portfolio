import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Experience from "./pages/experience";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App