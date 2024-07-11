
export function Hero() {
    return (
        <section className="px-8 sm:px-0 py-18 mb-10 sm:mb-32">
            <div className="my-8 sm:my-0 sm:mb-12">
                <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-rose-300/50 via-purple-300/50 to-rose-300/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]">
                    </div>
                    <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-rose-300/50 via-purple-300/50 to-rose-300/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]">
                    </div>
                    🔥
                    <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>

                    <span className="animate-gradient bg-gradient-to-r from-rose-300 via-purple to-purple-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">Open to Work</span>
                </div>
            </div>

            <p className="text-lg leading-8 sm:text-3xl text-center text-slate-300 sm:leading-10 font-light">
                Yo! <span className="font-bold">I&apos;m Dan</span>, and I&apos;m so happy you&apos;re here! I&apos;m a <span className="font-bold">front-end developer</span> based in Brazil. I love writing code that <span className="font-bold">helps companies and people</span> create their products and <span className="font-bold">get their ideas</span> off the ground. I also love creating websites that <span className="font-bold">bring results</span>, capturing new leads, increasing the number of customers and sales, and having a <span className="font-bold">positive impact on the business</span>. If you want to put any ideas into practice or talk about any ideas you have, please feel free to get in touch. I&apos;d love to hear from you!
            </p>
        </section>
    )
}
