import Footer from "../components/footer"
import Header from "../components/header"

function Contact(){
  return(
    <body>
    <div class="border">
        <div id="container">
            <Header title="Mes Expériences"/>
            <hr id="hr1" />
            <main>
                <div id="map" />
                <section>
                    <h2>Formulaire de conctact</h2>
                    <form action="" id="form">
                        <input type="text" name="prenom" id="prenom" placeholder="Prenom / Nom" class="form-input" />
                        <input type="email" name="mail" id="mail" placeholder="E-mail" class="form-input" />
                        <input type="tel" name="tel" id="tel" placeholder="Téléphone" class="form-input" />
                        <textarea name="Objet" id="textarea" placeholder="Objet" class="form-input"></textarea>
                    </form>
                    <div id="btn_dispo">
                        <i class="fa-solid fa-paper-plane" id="btn_form_left" />
                        <input type="submit" value="Envoyer" id="btn_form_rigth" />
                    </div>
                </section>
            </main>
        </div>
    </div>
    <Footer />
</body>
  )
}
export default Contact