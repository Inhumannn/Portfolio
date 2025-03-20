function Footer(){
  return(
    <footer id="sidebar">
        <div class="border">
            <section id="resMoi-haut">
                <figure>
                    <div id="alignement-pdp">
                        <img src="img/moi.png" alt="photo de profil" id="pdp" />
                    </div>
                </figure>
                <article id="moi">
                    <h1>Thomas PENA</h1>
                    <p class="contact-icone">Web Developer</p>
                    <div>
                        <a href="www.linkedin.com/in/thomas-pena-bermond"><i class="fa-brands fa-linkedin-in reseaux" /></a>
                        <a href="https://github.com/Inhumannn"><i class="fa-brands fa-github reseaux" /></a>
                    </div>
                </article>
                <article>
                    <button id="info_more-btn">contact</button>
                </article>
            </section>
            <section id="info_more">
                <hr id="hr2" />
                <section id="resMoi-bas">
                    <article class="contacts-list">
                        <div class="contact-container">
                            <div class="contact-icone">
                                <i class="fa-regular fa-envelope" />
                            </div>
                            <div class="contact-info">
                                <p>E-mail</p>
                                <a href=" mailto:thomas.pnbm@gmail.com">thomas.pnbm@gmail.com</a>
                            </div>
                        </div>
                    </article>
                    <article class="contacts-list">
                        <div class="contact-container">
                            <div class="contact-icone">
                                <i class="fa-solid fa-mobile-screen-button" />
                            </div>
                            <div class="contact-info">
                                <p>Télephone</p>
                            <a href="tel:0609182202">+33 06 09 18 22 02</a>
                        </div>
                    </div>
                </article>
                <article class="contacts-list">
                    <div class="contact-container">
                        <div class=" contact-icone">
                            <i class="fa-solid fa-cake-candles" />
                        </div>
                        <div class="contact-info">
                            <p>Date de Naissance</p>
                            <time datetime="14-02-2006">14 Février 2006</time>
                        </div>
                    </div>
                </article>
                <article class="contacts-list">
                    <div class="contact-container">
                        <div class="contact-icone">
                            <i class="fa-solid fa-location-dot" />
                        </div>
                        <div class="contact-info">
                            <p>Localisation</p>
                            <address>St-Maximin-la-Ste-Baume</address>
                        </div>
                    </div>
                </article>
                </section>
                <article id="icone-reseaux">
                    <a href="www.linkedin.com/in/thomas-pena-bermond"><i class="fa-brands fa-linkedin-in reseaux" /></a>
                    <a href="https://github.com/Inhumannn"><i class="fa-brands fa-github reseaux" /></a>
                </article>
            </section>
        </div>
    </footer>
  )
}
export default Footer