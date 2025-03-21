function Footer(){
  return(
    <aside className="col-span-1 row-end-1">
        <div className="sticky top-[40px] h-[100%] mb-[-1px] p-[25px_15px_15px] border border-[#363636] bg-[#1e1e1f] rounded-[15px]">
            <section className="resMoi-haut">
                <figure>
                    <div className="text-center">
                        <img src="img/moi.png" alt="photo de profil" className="w-[135px] rounded-[25px]" />
                    </div>
                </figure>
                <article className="text-center">
                    <h1>Thomas PENA</h1>
                    <p className="flex relative p-[16px] border-none rounded-[12px] bg-[#ccccdb] bg-[hsl(240, 2%, 13%)] shadow-[inset_-30px_-31px_16px_hsl(0,_0%,_25%)_0%,_inset_2px_2px_4px_#bcbcbc] text-[20px] text-[#306f6b]">Web Developer</p>
                    {/* <div> // Responsive
                        <a href="www.linkedin.com/in/thomas-pena-bermond"><i className="fa-brands fa-linkedin-in reseaux" /></a>
                        <a href="https://github.com/Inhumannn"><i className="fa-brands fa-github reseaux" /></a>
                    </div> */}
                </article>
                <article>
                    <button className="info_more-btn">contact</button>
                </article>
            </section>
            <section className="info_more">
                <hr className="hr2" />
                <section className="resMoi-bas">
                    <article className="min-w-[100%] flex items-start gap-[16px] p-[10px]">
                        <div className="max-w-[calc(100%-46px)] w-[calc(100% - 46px)]">
                            <div className="flex relative p-[16px] border-none rounded-[12px] bg-[#ccccdb] bg-[hsl(240, 2%, 13%)] shadow-[inset -30px -31px 16px hsl(0, 0%, 25%) 0%, inset 2px 2px 4px #bcbcbc] text-[20px] text-[#306f6b]">
                                <i className="fa-regular fa-envelope" />
                            </div>
                            <div className="contact-info">
                                <p>E-mail</p>
                                <a href=" mailto:thomas.pnbm@gmail.com">thomas.pnbm@gmail.com</a>
                            </div>
                        </div>
                    </article>
                    <article className="min-w-[100%] flex items-start gap-[16px] p-[10px]">
                        <div className="max-w-[calc(100%-46px)] w-[calc(100% - 46px)]">
                            <div className="flex relative p-[16px] border-none rounded-[12px] bg-[#ccccdb] bg-[hsl(240, 2%, 13%)] shadow-[inset -30px -31px 16px hsl(0, 0%, 25%) 0%,
              inset 2px 2px 4px #bcbcbc] text-[20px] text-[#306f6b]">
                                <i className="fa-solclassName fa-mobile-screen-button" />
                            </div>
                            <div className="contact-info">
                                <p>Télephone</p>
                            <a href="tel:0609182202">+33 06 09 18 22 02</a>
                        </div>
                    </div>
                </article>
                <article className="min-w-[100%] flex items-start gap-[16px] p-[10px]">
                    <div className="max-w-[calc(100%-46px)] w-[calc(100% - 46px)]">
                        <div className=" flex relative p-[16px] border-none rounded-[12px] bg-[#ccccdb] bg-[hsl(240, 2%, 13%)] shadow-[inset -30px -31px 16px hsl(0, 0%, 25%) 0%,
              inset 2px 2px 4px #bcbcbc] text-[20px] text-[#306f6b]">
                            <i className="fa-solclassName fa-cake-candles" />
                        </div>
                        <div className="contact-info">
                            <p>Date de Naissance</p>
                            <p>14 Février 2006</p>
                        </div>
                    </div>
                </article>
                <article className="min-w-[100%] flex items-start gap-[16px] p-[10px]">
                    <div className="max-w-[calc(100%-46px)] w-[calc(100% - 46px)]">
                        <div className="flex relative p-[16px] border-none rounded-[12px] bg-[#ccccdb] bg-[hsl(240, 2%, 13%)] shadow-[inset -30px -31px 16px hsl(0, 0%, 25%) 0%,
              inset 2px 2px 4px #bcbcbc] text-[20px] text-[#306f6b]">
                            <i className="fa-solclassName fa-location-dot" />
                        </div>
                        <div className="contact-info">
                            <p>Localisation</p>
                            <address>St-Maximin-la-Ste-Baume</address>
                        </div>
                    </div>
                </article>
                </section>
                <article className="icone-reseaux">
                    <a href="www.linkedin.com/in/thomas-pena-bermond"><i className="fa-brands fa-linkedin-in reseaux" /></a>
                    <a href="https://github.com/Inhumannn"><i className="fa-brands fa-github reseaux" /></a>
                </article>
            </section>
        </div>
    </aside>
  )
}
export default Footer