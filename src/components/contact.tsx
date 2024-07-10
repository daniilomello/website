import ShinyButton from "@/components/magicui/ShinyButton";
import SparklesText from "@/components/magicui/SparklesText";
import Link from "next/link";

export function Contact() {
    return (
        <section className="pt-20 pb-60 text-center">
            <div className="flex flex-col gap-8">
                <SparklesText text="Let's build something great!" className="opacity-75" />
                <p className="text-xl">Let me help you create your amazing product</p>

                <Link href="mailto:oi@daniilo.dev" className="scale-125">
                    <ShinyButton text="Yeah, lets do it!" />
                </Link>
            </div>
        </section>
    )
}
