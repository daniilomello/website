import Meteors from "@/components/magicui/meteors";
import ShinyButton from "@/components/magicui/ShinyButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export function Header() {
    return (
        <section className="py-24 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-1 shadow-lg ring-[5px] ring-purple-500/10" src="https://github.com/daniilomello.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <h1 className="font-bold text-2xl">Danilo Mello</h1>
                    <p>Frontend Engineer</p>
                </div>
            </div>

            <nav className="flex items-center gap-4">
                <Link href="/resume.pdf" target="_blank" className="hover:text-rose-300">Resume</Link>
                <Link href="mailto:oi@daniilo.dev">
                    <ShinyButton text="Hire Me" />
                </Link>
            </nav>
            <Meteors number={30} />
        </section>
    )
}
