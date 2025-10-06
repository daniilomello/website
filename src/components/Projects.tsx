import Image from "next/image";

export function Projects() {
    return (
        <section className="px-8 sm:px-0 py-20">
            <h2 className="mb-4">
                <span className="text-sm leading-8 sm:text-base block">
                    Apps that I&apos;ve worked on 🚀
                </span>
                <span className="text-3xl font-title font-bold leading-8 sm:text-6xl block">
                    Projects
                </span>
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                <div className="h-[25rem] w-full flex items-center">
                    <a
                        title="/dehut.com.br"
                        href="https://www.dehut.com.br/?origin=daniilodev"
                        className="rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-foreground/[0.1] group-hover/pin:border-foreground/[0.2] transition duration-700 overflow-hidden pb-4 hover:-translate-y-4 hover:border-foreground/[0.8] bg-foreground/5 backdrop-blur-lg"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-forground/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-forground">
                                Dehut
                            </h3>
                            <div className="text-sm !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    Dehut supports companies organize their customer service. Build with Angular and NestJS using Docker.
                                </span>
                            </div>
                            <Image
                                width="300"
                                height="200"
                                alt="Dehut Plataform"
                                src="/dehut-mock.png"
                                className="flex flex-1 w-full rounded-lg mt-4"
                            />
                        </div>
                    </a>
                </div>

                <div className="h-[25rem] w-full flex items-center">
                    <a
                        title="/martinsatacado.com.br"
                        href="https://www.martinsatacado.com.br/?origin=daniilodev"
                        className="rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-foreground/[0.1] group-hover/pin:border-foreground/[0.2] transition duration-700 overflow-hidden pb-4 hover:-translate-y-4 hover:border-foreground/[0.8] bg-foreground/5 backdrop-blur-lg"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-forground/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-forground">
                                Martins Atacado
                            </h3>
                            <div className="text-sm !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    Martins Atacado is a B2B e-commerce marketplace build with NextJS, Redux and others tools.
                                </span>
                            </div>
                            <Image
                                width="300"
                                height="200"
                                alt="Martins Plataform"
                                src="/martins-mock.png"
                                className="flex flex-1 w-full rounded-lg mt-4"
                            />
                        </div>
                    </a>
                </div>

                <div className="h-[25rem] w-full flex items-center">
                    <a
                        title="/daniilabs"
                        href="https://github.com/daniilomello"
                        className="rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-foreground/[0.1] group-hover/pin:border-foreground/[0.2] transition duration-700 overflow-hidden pb-4 hover:-translate-y-4 hover:border-foreground/[0.8] bg-foreground/5 backdrop-blur-lg"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-forground/50 sm:basis-1/2 w-[18rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-forground">
                                @danilabs
                            </h3>
                            <div className="text-sm !m-0 !p-0 font-normal">
                                <span className="text-muted-foreground">
                                    Side projects and mobile apps that I created using techs like React Native, NodeJs, NestJS, Express, etc...
                                </span>
                            </div>
                            <Image
                                width="300"
                                height="200"
                                alt="Apps Made by Danilo"
                                src="/apps-mock.png"
                                className="flex flex-1 w-full rounded-lg mt-4"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
