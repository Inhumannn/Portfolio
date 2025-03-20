import Footer from "../components/footer"
import Header from "../components/header"
import Presentation from "../components/presentation"
import '../styles/home.css'

function Home(){
   return(
      <body>
        <div class="border">
          <div id="container">
            <Header />
            <hr id="hr1" />
            <Presentation />
          </div>
        </div>
      <Footer />
      </body>
   )
}

export default Home