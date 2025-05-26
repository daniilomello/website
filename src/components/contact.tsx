import SparklesText from "@/components/magicui/SparklesText";
import Link from "next/link";
import { Game } from "./Game";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";

export function Contact() {
    return (
        <section className="pt-8 pb-12 text-center">
            <div className="flex flex-col gap-8">
                <SparklesText text="Got an idea in mind?" className="opacity-75" />
                <p className="text-xl">
                    Let me help you bring it to life 💡
                </p>

                <Link href="https://wa.me/5534984424459" target="_blank">
                    <InteractiveHoverButton>
                        Challenge Accepted
                    </InteractiveHoverButton>
                </Link>

                <Game />

                <p className="text-center text-white mt-2 text-xs font-bold">
                    &copy; {new Date().getFullYear()} - Created with 💜 by Danilo
                </p>
            </div>
        </section>
    )
}
