import { useRef, useState } from "react";
import Map from "../components/map";

function Contact(){
  const [errors, setErrors] = useState({});
  const form = useRef();
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
      
    //   emailjs
    //     .sendForm('service_0b051tj', 'template_bov462g', form.current, {
    //       publicKey: 'm0qrbKCYdqhH4JYc-',
    //     })
    //     .then(
    //       () => {
    //         console.log('SUCCESS!');
    //       },
    //       (error) => {
    //         console.log('FAILED...', error.text);
    //       },
    //     );
    // };

    const handleFormSubmit = (e) => {
      e.preventDefault()
      let setErrors = {}

      const { name, email, tel, titre, message } = e.target.elements;
      if (Object.keys(errors).length > 0) {
        setErrors(newErrors)
        return
     }
      if (!/^\d{10,}$/.test(tel.value)) {
         setErrors({...errors, tel: {type: 'required', message: '*Il est conseillé de saisir le numéro'}});
      }

      if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        setErrors({...errors, email: {type: 'required', message: '*L\'email est indispensable'}});
     }

      if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(name.value)) {
        setErrors({...errors, username: {type: 'required', message: '*Le prénom et le nom sont requis'}});
     }

      console.log(name.value, email.value, tel.value, titre.value, message.value);
      // sendEmail(e);
    }
  return(
    <main>
        <Map />
        <section>
            <h2 className="font-bold text-[24px] pb-[20px]">Formulaire de conctact</h2>
              <form ref={form} onSubmit={handleFormSubmit} autoComplete="off" noValidate className="grid grid-cols-3 gap-4 justify-items-center pt-[25px] pb-[5px]">
                <div className="relative">
                  <input id="username" name="name" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label htmlFor="username" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Prénom / nom</label>
                  {/* {errors.username?.type === 'required' && <p role="alert">*Le prénom et le nom sont requis</p>} */}
                  {errors.username && (<p role="alert">{errors.username.message}</p>)}
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit text-[white]"/>
                  <label htmlFor="email" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">E-mail</label>
                {/* {errors.email?.type === 'required' && <p role="alert">*L'email est indispensable</p>} */}
                {errors.email && (<p role="alert">{errors.email.message}</p>)}
                </div>
                <div className="relative">
                  <input id="tel" name="tel" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit"/>
                  <label htmlFor="tel" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#a2a2a2] peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">Téléphone</label>
                {/* {errors.tel?.type === 'required' && <p role="alert">*Il est conseillé de saisir le numéro</p>} */}
                {errors.tel && (<p role="alert">{errors.tel.message}</p>)}
                </div>
                <div className="relative col-span-3 w-[91%] mt-[10px]">
                  <select id="titre" name="titre" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-[#1E1E1F] w-[100%]">
                    <option value="Création de site web (portfolio, vitrine, e-commerce, etc.)">Création de site web (portfolio, vitrine, e-commerce, etc.)</option>
                    <option value="Développement d’une fonctionnalité spécifique">Développement d’une fonctionnalité spécifique</option>
                    <option value="Collaboration sur un projet">Collaboration sur un projet</option>
                    <option value="Stage ou alternance">Stage ou alternance</option>
                    <option value="Autre demande">Autre (préciser)</option>
                  </select>
                </div>         
                <div className="relative col-span-3 w-[91%]">
                  <textarea id="object" name="message" placeholder="Je vous contacte en raison de vos compétences et je souhaiterais..." className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-[#a2a2a2] transition-colors focus:outline-none peer bg-inherit placeholder-[#a2a2a2] h-48 my-[20px] w-[100%]"/>
                </div>
              <div className="col-span-3">
                <button type="submit" className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none" value="Send">
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#222222] px-7 text-sm font-medium text-[#d6d6d6] backdrop-blur-3xl gap-2 undefined hover:text-[#a2a2a2]">Contact me<svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path></svg></span>
                </button>
              </div>
              </form>
        </section>
    </main>
  )
}
export default Contact