function Contact(){
  return(
    <main>
        <div className="map" />
        <section>
            <h2>Formulaire de conctact</h2>
            <form action="" className="form">
                <input type="text" name="prenom" className="prenom" placeholder="Prenom / Nom"/>
                <input type="email" name="mail" className="mail" placeholder="E-mail"/>
                <input type="tel" name="tel" className="tel" placeholder="Téléphone"/>
                <textarea name="Objet" className="textarea" placeholder="Objet"></textarea>
            </form>
            <div className="btn_dispo">
                <i className="fa-solid fa-paper-plane" className="btn_form_left" />
                <input type="submit" value="Envoyer" className="btn_form_rigth" />
            </div>
        </section>
    </main>
  )
}
export default Contact