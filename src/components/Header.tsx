import Link from "next/link";
import { AvatarProfile } from "./AvatarProfile";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";
import { Icons } from "./WhatsAppButton";

export function Header() {
    return (
        <header className="fixed bottom-4 inset-x-0 z-50 w-fit mx-auto px-3 p-2 sm:p-3 rounded-full border border-foreground/10 bg-background/20 backdrop-blur-lg">
            <nav className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                <AvatarProfile className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex items-center gap-3 text-sm sm:text-base">
                    <Link href="/" className="hover:text-foreground/70 flex items-center gap-1 relative">
                        Posts
                    </Link>
                    <span>•</span>
                    <Link href="/about" className="hover:text-foreground/70 flex items-center gap-1 relative">
                        About
                    </Link>
                    <span>•</span>
                    <Link href="/resume.pdf" target="_blank" className="hover:text-foreground/70">Resume</Link>
                    <span className="hidden sm:inline-block">•</span>
                    <Link href="https://wa.me/5534984424459" target="_blank" className="hidden sm:inline-block">
                        <InteractiveHoverButton className="text-xs">
                            Get in Touch
                        </InteractiveHoverButton>
                    </Link>
                    <span className="sm:hidden">•</span>
                    <Link href="https://wa.me/5534984424459" target="_blank" className="sm:hidden scale-75">
                        <Icons.whatsapp />
                    </Link>
                </div>
            </nav>
        </header>
    )
}
