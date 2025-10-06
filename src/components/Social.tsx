import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MapCard } from "@/components/ui/Map";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiPeerlist } from "react-icons/si";


export function Social() {
    return (
        <section className="my-24">
            <h2 className="text-center">
                <span className="text-sm leading-8 sm:text-base block">
                    Feel free to reach me out 👋
                </span>
                <span className="text-3xl font-title font-bold leading-8 sm:text-6xl block">
                    Social
                </span>
            </h2>
            <section className="px-4 start w-full py-0 mt-8 sm:py-8 max-w-[840px] grid-cols-1 gap-4 sm:gap-8 flex flex-col sm:flex-row mx-auto">
                <Card className="start-center relative row-span-2  flex h-[400px] w-[400px] flex-col gap-5 overflow-hidden p-0 max-lg:w-full border-foreground/10 transition group-hover:border-foreground/30">
                    <div className="absolute bottom-40 left-40">
                        <div className="center relative inset-x-0 z-10 flex">
                            <div className="h-4 w-4 rounded-full bg-purple-500 ring-4 ring-white" />
                            <div className="absolute animate-ping-static -inset-1 h-6 w-6 rounded-full bg-purple-500" />
                        </div>
                    </div>

                    <div className="animated-cloud absolute inset-0 z-30">
                        <div className="relative">
                            <Image
                                width={480}
                                height={480}
                                className="absolute z-20 opacity-75"
                                src="/cloud.png"
                                alt="cloud image"
                            />
                            <Image
                                width={480}
                                height={480}
                                className="absolute z-10 -translate-x-16 translate-y-28  opacity-15 blur-sm brightness-0"
                                src="/cloud.png"
                                alt="cloud image"
                            />
                        </div>
                    </div>

                    <Image
                        width={40}
                        height={40}
                        className="animated-plane absolute inset-0 z-10 object-contain"
                        src="/plane.png"
                        alt="plane image"
                    />

                    <MapCard />
                </Card>

                <div className="row-span-2 grid max-h-[400px] max-w-[400px] grid-cols-2 grid-rows-2 gap-4 sm:gap-10">
                    <a href="https://github.com/daniilomello" target="_blank" rel="noopener noreferrer">
                        <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full border-foreground/10 transition group-hover:border-foreground bg-foreground/5">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="pointer-events-none h-14 w-14 rounded-xl border border-foreground/10 transition group-hover:border-foreground"
                            >
                                <FaGithub size={24} className="text-foreground" />
                            </Button>
                            <h6>Check my projects on Github 🚀</h6>
                        </Card>
                    </a>

                    <a href="https://www.linkedin.com/in/danilojsx" target="_blank" rel="noopener noreferrer">
                        <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full border-foreground/10 transition group-hover:border-foreground bg-foreground/5">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="pointer-events-none h-14 w-14 rounded-xl border bg-sky-700 border-foreground/10 transition group-hover:border-foreground"
                            >
                                <FaLinkedin size={24} className="text-white" />
                            </Button>
                            <h6>Check my LinkedIn profile 🔥</h6>
                        </Card>
                    </a>
                    <a href="https://discord.com/users/392627986140102657" target="_blank" rel="noopener noreferrer">
                        <Card className="start-center flex h-full flex-col  gap-5 p-4 max-lg:w-full border-foreground/10 transition group-hover:border-foreground bg-foreground/5">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="pointer-events-none h-14 w-14 rounded-xl border bg-blue-900 border-foreground/10 transition group-hover:border-foreground"
                            >
                                <FaDiscord size={24} className="text-white" />
                            </Button>
                            <h6>Connect with me on Discord 🌐</h6>
                        </Card>
                    </a>
                    <a href="https://peerlist.io/daniilomello" target="_blank" rel="noopener noreferrer">
                        <Card className="start-center flex h-full flex-col  gap-5 p-4 max-lg:w-full border-foreground/10 transition group-hover:border-foreground bg-foreground/5">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="pointer-events-none h-14 w-14 rounded-xl border border-foreground/10 transition group-hover:border-green-200/30"
                            >
                                <SiPeerlist size={24} className="text-forground" />
                            </Button>
                            <h6>Peerlist 💡</h6>

                            <Button variant="outline" size="sm" className="gap-2.5 rounded-sm bg-lime-600/80 hover:bg-lime-600/50">
                                Follow
                            </Button>
                        </Card>
                    </a>
                </div>
            </section>
        </section>
    )
}
