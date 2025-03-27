function Footer(){
  return(
    <aside className="col-span-1 row-end-1">
        <div className="sticky top-[40px] h-[80%] mb-[-1px] p-[25px_15px_15px] border border-[#363636] bg-[#1e1e1f] rounded-[15px]">
            <section className="resMoi-haut">
                <figure>
                    <div className="justify-items-center">
                        <img src="img/moi.png" alt="photo de profil" className="w-[135px] rounded-[25px] justify-items-center" />
                    </div>
                </figure>
                <article className="text-center py-[10px]">
                    <h1 className="font-semibold text-[30px]">Thomas PENA</h1>
                    <p className=" bg-[hsl(240,2%,13%)] shadow-[inset_-30px_-31px_16px_hsl(0,0%,25%)_0%,inset_2px_2px_4px_#bcbcbc] text-[15px] text-[#d6d6d6]">Web Developer</p>
                    {/* <div> // Responsive
                        <a href="www.linkedin.com/in/thomas-pena-bermond"><i className="fa-brands fa-linkedin-in my-[25px] mx-[10px]" /></a>
                        <a href="https://github.com/Inhumannn"><i className="fa-brands fa-github my-[25px] mx-[10px]" /></a>
                    </div> */}
                </article>
                {/* <article> Responsive
                    <button className="info_more-btn">contact</button>
                </article> */}
            </section>
            <section className="block">
                <hr className="hrw-full h-[1px] border-none rounded-[5px] bg-[linear-gradient(to_right,#056dbb,#0951a8,#090979,#0951a8,#056dbb)] my-[15px]" />
                <section className="resMoi-bas">
                    <article className="grid grid-cols-1 gap-4">
                        <div className="min-w-full flex items-start gap-4 p-2 align-middle">
                            <div className="relative drop-shadow-xl w-12 h-12 overflow-hidden rounded-xl bg-[#202022]" >
                                <div className="absolute flex items-center justify-center z-[1] opacity-90 rounded-xl inset-0.5 bg-[#202022]">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[20px] fill-[#306f6b]"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg></div>
                                <div className="absolute w-12 h-12 bg-white blur-[20px] -left-1/2 -top-1/2">
                            </div>
                            </div>
                            <div className="max-w-[calc(100% - 46px)] w-[calc(100% - 46px)]">
                                <p>E-mail</p>
                                <a href=" mailto:thomas.pnbm@gmail.com" className="text-[#d6d6d6] text-[15px] no-underline hover:text-[#bcbcbc]">thomas.pnbm@gmail.com</a>
                            </div>
                        </div>
                    </article>
                    <article className="grid grid-cols-1 gap-4">
                        <div className="min-w-full flex items-start gap-4 p-2">
                            <div className="flex relative p-[10px] border-none rounded-[12px] bg-[hsl(240, 2%, 13%)] text-[20px] text-[#306f6b]">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[24px] fill-[#306f6b]"><path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"/></svg>
                            </div>
                            <div className="max-w-[calc(100% - 46px)] w-[calc(100% - 46px)]">
                                <p>Télephone</p>
                            <a href="tel:0609182202" className="text-[#d6d6d6] text-[15px] no-underline hover:text-[#bcbcbc]">+33 06 09 18 22 02</a>
                        </div>
                    </div>
                </article>
                <article className="grid grid-cols-1 gap-4">
                    <div className="min-w-full flex items-start gap-4 p-2">
                        <div className=" flex relative p-[10px] border-none rounded-[12px] bg-[hsl(240, 2%, 13%)] text-[20px] text-[#306f6b]">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[24px] fill-[#306f6b]"><path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"/></svg>
                        </div>
                        <div className="max-w-[calc(100% - 46px)] w-[calc(100% - 46px)]">
                            <p>Date de Naissance</p>
                            <p>14 Février 2006</p>
                        </div>
                    </div>
                </article>
                <article className="grid grid-cols-1 gap-4">
                    <div className="min-w-full flex items-start gap-4 p-2">
                        <div className="flex relative p-[10px] border-none rounded-[12px] bg-[hsl(240, 2%, 13%)] text-[20px] text-[#306f6b]">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[24px] fill-[#306f6b]"><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>
                        </div>
                        <div className="max-w-[calc(100% - 46px)] w-[calc(100% - 46px)]">
                            <p>Localisation</p>
                            <address><a href="https://www.google.com/maps/place/83170+Brignoles/@43.4049461,6.0586847,15z/data=!4m6!3m5!1s0x12c941e57cd2f639:0x40819a5fd8fcf40!8m2!3d43.406204!4d6.0592489!16s%2Fg%2F11bc6bnnbq?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">brignole</a></address>
                        </div>
                    </div>
                </article>
                </section>
                <article className="text-center flex justify-center gap-4 mt-[15px]">
                    <a href="https://www.linkedin.com/in/thomas-pena-bermond/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="size-[20px]"><g fill="none"><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" className="fill-[#a2a2a2]"/></g></svg></a>
                    <a href="https://github.com/Inhumannn"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[20px] fill-[#a2a2a2]"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                </article>
            </section>
        </div>
    </aside>
  )
}
export default Footer