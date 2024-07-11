import Image from "next/image";

export function Projects() {
    return (
        <section className="px-8 sm:px-0 py-20">
            <div className="flex items-center justify-center rounded-full bg-purple-700/5 px-3 py-1 mb-10 sm:mb-24 w-fit mx-auto border border-purple-300/5 opacity-75">
                <h2
                    className="text-center text-lg sm:text-3xl bg-gradient-to-r from-rose-300/50 to-purple-500/80 text-transparent bg-clip-text font-bold rounded px-8 py-4">
                    Projects I Worked
                </h2>
            </div>

            <div className="flex flex-col gap-12 sm:gap-20">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 order-1 sm:order-2 sm:col-span-6">
                        <h3>
                            <a className="inline-flex items-baseline font-medium leading-tight text-purple-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base" href="https://www.magnesium.com.br/en" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>Magnesium <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                </span>
                            </a>
                        </h3>

                        <p className="mt-2 text-sm leading-normal">Magnesium website was made using WordPress, leveraging the platform’s flexibility and ease of use to create a dynamic and user-friendly site. The design incorporates a custom WordPress theme, developed to meet the unique branding and functionality requirements of the Magnesium brand.</p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">WordPress</div>
                            </li>
                        </ul>
                    </div>

                    <Image alt="Spotify Profile app homepage" width="200" height="48" className="rounded-lg border-2 border-rose-200/10 transition group-hover:border-rose-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 h-[150px] object-cover" src="/cover-magnesium.png" />
                </div>
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 order-1 sm:order-2 sm:col-span-6">
                        <h3>
                            <a className="inline-flex items-baseline font-medium leading-tight text-purple-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base" href="https://www.martinsatacado.com.br/" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>Martins Atacado <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                                </span>
                            </a>
                        </h3>

                        <p className="mt-2 text-sm leading-normal">Martins is a large B2B e-commerce marketplace that caters to businesses looking for a reliable platform to buy and sell products. Their website was developed using Next.js and Redux, ensuring a robust and efficient web application tailored to meet the complex needs of a B2B environment.</p>

                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                    NextJs
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                    Redux
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                    MUI
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                    Styled Components
                                </div>
                            </li>
                        </ul>
                    </div>

                    <Image alt="Spotify Profile app homepage" width="200" height="48" className="rounded-lg border-2 border-rose-200/10 transition group-hover:border-rose-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 h-[150px] object-cover" src="/cover-martins.png" />
                </div>
            </div>
        </section>
    )
}
