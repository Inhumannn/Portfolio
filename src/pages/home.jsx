import Footer from "../components/footer"
import Header from "../components/header"
import '../styles/home.css'

function Home(){
   return(
      <body>
        <div class="border">
          <div id="container">
            <Header />
            <hr id="hr1" />
              <main>
                <section id="presentation">
                  <article>
                    <p>Actuellement en formation en développement web, je me spécialise dans la création de sites et
                      d’applications web modernes. Je maîtrise les technologies front-end HTML, CSS,
                      JavaScript, ainsi que React, et possède une solide expérience en back-end avec PHP,
                      Python et NodeJS.</p>
                    <p>Je travaille également avec des outils comme Git et GitHub pour le versioning de code, et je
                      suis familier avec WordPress pour le développement de sites personnalisés. J’ai acquis des
                      compétences pratiques en création de sites e-commerce, et je suis capable de développer des
                      solutions sur mesure, adaptées aux besoins spécifiques des projets.</p>
                    <p>Grâce à ma capacité d'apprentissage rapide et à ma passion pour le développement web, je suis
                      toujours à la recherche de nouveaux défis pour m'améliorer !</p>
                  </article>
                </section>
                <section>
                  <h2>Compétences principales</h2>
                  <div id="disposition-competence">
                    <article class="competence-container">
                        <i class="fa-brands fa-html5 competence" />
                        <h3>Html5</h3>
                    </article>
                    <article class="competence-container">
                        <i class="fa-brands fa-css3-alt competence" />
                        <h3>CSS3</h3>
                    </article>
                    <article class="competence-container">
                        <i class="fa-brands fa-python competence" />
                        <h3>Python</h3>
                    </article>
                    <article class="competence-container">
                        <i class="fa-brands fa-js competence" />
                        <h3>JavaScript</h3>
                    </article>
                    <article class="competence-container">
                        <i class="fa-brands fa-php competence" />
                        <h3>Php</h3>
                    </article>
                    <article class="competence-container">
                        <i class="fa-brands fa-react competence" />
                        <h3>React</h3>
                    </article>
                  </div>
                </section>
              </main>
          </div>
        </div>
      <Footer />
      </body>
   )
}

export default Home