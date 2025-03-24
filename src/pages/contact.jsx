function Contact(){
  return(
    <main>
        <div className="map" />
        <section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
        <section>
            <h2>Formulaire de conctact</h2>
              <div class="grid grid-cols-3 gap-4 justify-items-center pt-[25px] pb-[5px]">
                <div class="relative">
                  <input id="username" name="username" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label for="username" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Prénom / nom</label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label for="email" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">E-mail</label>
                </div>
                <div className="relative">
                  <input id="tel" name="tel" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label for="tel" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Téléphone</label>
                </div>
                <div className="relative">
                  <textarea id="object" name="object" type="text" placeholder="Object" className="border-b border-gray-300 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                </div>
              </div>
            <div className="flex flex-row justify-end">
                <input type="submit" value="Envoyer" className="btn_form_rigth" />
            </div>
        </section>
    </main>
  )
}
export default Contact
{/* 
<div>
  <div class="flex items-center justify-center">
    <div class="relative">
      <input id="username" name="username" type="text" placeholder="" class="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
      <label for="username" class="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Name</label>
    </div>
  </div>
</div>
  */}