import Meteors from "@/components/magicui/meteors";
import ShinyButton from "@/components/magicui/ShinyButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export function Header() {
    return (
        <header className="py-8 px-4 sm:px-0 sm:py-24 flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-3 justify-center sm:justify-normal">
                <Link href="/">
                    <Avatar>
                        <AvatarImage className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-1 shadow-lg ring-[5px] ring-purple-500/10" src="https://github.com/daniilomello.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>

                <div>
                    <h1 className="font-bold text-2xl">Danilo Mello</h1>
                    <p>Frontend Engineer</p>
                </div>
            </div>

            <nav className="flex items-center gap-4 justify-center sm:justify-normal">
                <Link href="/blog" className="hover:text-rose-300 flex items-center gap-1 relative">
                    Notes
                </Link>
                <Link href="/resume.pdf" target="_blank" className="hover:text-rose-300">Resume</Link>
                <Link href="mailto:oi@daniilo.dev">
                    <ShinyButton text="Hire Me" />
                </Link>
            </nav>
            <Meteors number={30} />
        </header>
    )
}
