function Portfolio(){
  return(
    <main>
        <section className="presentation">
            <article className="selection-competence">
                <p><a href="#">Tous</a></p>
                <p><a href="#">Html&Css</a></p>
                <p><a href="#">Php</a></p>
                <p><a href="#">Python</a></p>
                <p><a href="#">JavaScript</a></p>
            </article>
            <div className="project">
                <article>
                    <a href="#"><img src="img/github/Creative-Web-Mobile-Studio.png" alt="Creative-Web-Mobile-Studio" className="portfolio-img" /></a>
                    <p>Creative Web Mobile Studio</p>
                </article>
                <article>
                    <a href="#"><img src="img/github/Hagile.png" alt="Hagile" className="portfolio-img" />
                    <p>Hagile</p></a>
                </article>
                <article>
                    <a href="#"><img src="img/github/write.png" alt="Writet" className="portfolio-img" />
                    <p>Write</p></a>

                </article>
                <article>
                    <a href="#"><img src="img/github/Skillfacile.png" alt="SkillFacile" className="portfolio-img" />
                    <p>SkillFacile</p></a>
                </article>
                <article>
                    <a href="#"><img src="img/github/fonciere-pagerie-malmaison.jpg" alt="fonciere-pagerie-malmaison" className="portfolio-img" />
                    <p>fonciere pagerie malmaison</p></a>
                </article>
                <article>
                    <a href="#"><img src="img/github/Game-dev.jpg" alt="GameDev" className="portfolio-img" /> 
                    <p>GameDev</p></a>
                </article>
                <article>
                    <a href="#"><img src="img/github/Brigitte.jpg" alt="Brigitte" className="portfolio-img" />
                    <p>Brigitte</p></a>
                </article>
            </div>
        </section>
    </main>
  )
}
export default Portfolio