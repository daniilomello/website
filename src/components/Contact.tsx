import SparklesText from "@/components/magicui/SparklesText";
import Link from "next/link";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";

export function Contact() {
    return (
        <section className="pt-8 pb-12 text-center">
            <div className="flex flex-col gap-8 justify-center">
                <SparklesText text="Got an idea in mind?" className="opacity-75 font-title font-bold" />
                <p className="text-xl">
                    Let me help you bring it to life 💡
                </p>

                <Link href="https://wa.me/5534984424459" target="_blank" className="w-fit mx-auto">
                    <InteractiveHoverButton >
                        Challenge Accepted
                    </InteractiveHoverButton>
                </Link>

                <p className="text-center mt-2 text-xs font-bold">
                    &copy; {new Date().getFullYear()} - Created with 💜 by Danilo
                </p>
            </div>
        </section>
    )
}
