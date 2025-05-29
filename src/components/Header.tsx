import Meteors from "@/components/magicui/Meteors";
import Link from "next/link";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";
import { SpinningText } from "./magicui/SpinningText";
import { Story } from "./Stories";


const storiesData: Story[] = [
    {
        id: 1,
        thumbnail: "https://github.com/daniilomello.png",
        youtubeVideoId: "5OFVArgGgdI",
    },
];

export function Header() {
    return (
        <header className="py-8 px-4 sm:px-0 sm:py-24 flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-9 justify-center sm:justify-normal relative -left-6 sm:-left-0">
                <div className="relative">
                    <span className="block w-[80px] h-[80px] relative left-6 -top-2">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 rounded-full animate-gradient-border bg-instagram-gradient" />
                            <div className="absolute inset-0.5 rounded-full overflow-hidden">
                                <div
                                className="relative z-10 w-full h-full cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src="https://github.com/daniilomello.png"
                                        alt="profile picture"
                                        className="object-cover w-full h-full rounded-full"
                                    />
                                </div> 
                            </div>
                        </div>
                    </span>
                    <SpinningText className="absolute top-10 left-[71px]  text-lg">
                        Frontend ⚡ Backend ⚡ Mobile ⚡ UI & UX ⚡
                    </SpinningText>
                </div>
            </div>

            <nav className="flex items-center gap-3 justify-center sm:justify-normal mt-10 sm:mt-0">
                <Link href="/" className="hover:text-rose-300 flex items-center gap-1 relative">
                    Home
                </Link>
                <span>•</span>
                <Link href="/blog" className="hover:text-rose-300 flex items-center gap-1 relative">
                    Posts
                </Link>
                <span>•</span>
                <Link href="/about" className="hover:text-rose-300 flex items-center gap-1 relative">
                    About
                </Link>
                <span>•</span>
                <Link href="/resume.pdf" target="_blank" className="hover:text-rose-300">Resume</Link>
                <span className="hidden sm:inline-block">•</span>
                <Link href="https://wa.me/5534984424459" target="_blank" className="hidden sm:inline-block">
                    <InteractiveHoverButton className="text-xs">
                        Get in Touch
                    </InteractiveHoverButton>
                </Link>
            </nav>
            <Meteors number={30} />
        </header>
    )
}
