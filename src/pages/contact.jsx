import Map from "../components/map"

function Contact(){
  return(
    <main>
        <Map />
        <section>
            <h2 className="font-bold text-[24px] pt-[25px] pb-[20px]">Formulaire de conctact</h2>
              <form autoComplete="off" className="grid grid-cols-3 gap-4 justify-items-center pt-[25px] pb-[5px]">
                <div className="relative">
                  <input id="username" name="username" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label htmlFor="username" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Prénom / nom</label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit text-[white]"/>
                  <label htmlFor="email" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">E-mail</label>
                </div>
                <div className="relative">
                  <input id="tel" name="tel" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label htmlFor="tel" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Téléphone</label>
                </div>
                <div className="relative">
                  <textarea id="object" name="object" type="text" placeholder="Objet" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit placeholder-[#a2a2a2]"/>
                </div>
              </form>
              <div className="text-end">
                <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#222222] px-7 text-sm font-medium text-[#d6d6d6] backdrop-blur-3xl gap-2 undefined hover:text-[#a2a2a2]">Contact me<svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path></svg></span>
                </button>
              </div>
        </section>
    </main>
  )
}
export default Contact