import Meteors from "@/components/magicui/meteors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";
import { SpinningText } from "./magicui/SpinningText";


export function Header() {
    return (
        <header className="py-8 px-4 sm:px-0 sm:py-24 flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-9 justify-center sm:justify-normal relative -left-6 sm:-left-0">
                <Link href="/" className="relative">
                    <Avatar className="w-[80px] h-[80px] relative left-6 top-2">
                        <AvatarImage className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-1 shadow-lg ring-[5px] ring-purple-500/10" src="https://github.com/daniilomello.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <SpinningText className="absolute top-12 left-16 text-lg">
                        Frontend ⚡ Backend ⚡ Mobile ⚡ UI & UX ⚡
                    </SpinningText>
                </Link>
            </div>

            <nav className="flex items-center gap-4 justify-center sm:justify-normal mt-10 sm:mt-0">
                <Link href="/blog" className="hover:text-rose-300 flex items-center gap-1 relative">
                    Posts
                </Link>
                <Link href="/about" className="hover:text-rose-300 flex items-center gap-1 relative">
                    About
                </Link>
                <Link href="/resume.pdf" target="_blank" className="hover:text-rose-300">Resume</Link>
                <Link href="mailto:oi@daniilo.dev">
                    <InteractiveHoverButton className="text-xs">
                        Get in Touch
                    </InteractiveHoverButton>
                </Link>
            </nav>
            <Meteors number={30} />
        </header>
    )
}
