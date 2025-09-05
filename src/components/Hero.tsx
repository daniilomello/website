
import Link from "next/link";
import { InteractiveHoverButton } from "./magicui/InteractiveHoverButton";

export function Hero() {
    return (
        <section className="px-8 sm:px-0 py-18 mb-10 sm:mb-32 h-[60vh]">
            <div className="my-8 sm:my-0 sm:mb-4">
                <div className="scale-75 origin-top-left group relative flex max-w-fit flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-red-300/50 via-purple-300/50 to-red-300/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]">
                    </div>
                    <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-red-300/50 via-purple-300/50 to-red-300/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]">
                    </div>
                    <span className="text-[10px] opacity-75">
                        🔴
                    </span>
                    <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>

                    <span className="animate-gradient bg-gradient-to-r from-red-300 via-purple to-purple-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">Close to Work</span>
                </div>
            </div>

            <p className="text-foreground sm:leading-10 font-light mb-4">
                <span className="text-sm leading-8 sm:text-2xl block mb-2">
                    Yoo! I&apos;m Dan, welcome! 👋
                </span>
                <span className="text-4xl leading-10 sm:leading-none sm:text-8xl block">
                    I Build Cool Digital Products.
                    Like Web and Mobile Apps.
                </span>
            </p>
            <Link href="https://wa.me/5534984424459" target="_blank" className="mt-5 block sm:mt-0 w-fit">
                <InteractiveHoverButton className="text-sm sm:text-base">
                    Let&apos;s Talk
                </InteractiveHoverButton>
            </Link>
        </section>
    )
}
