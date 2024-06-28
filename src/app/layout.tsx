import Spotlight, { SpotlightCard } from "@/components/spotlight";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "overscroll-y-none bg-gray-900 antialiased selection:bg-violet-600/90 min-h-screen bg-gray-900 font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <Spotlight>
          <SpotlightCard>
            <div className="absolute top-0 translate-y-3/2 left-1/2 -translate-x-1/2 pointer-events-none -z-0 w-1/2 aspect-square" aria-hidden="true">
              <div className="absolute inset-0 translate-z-0 bg-rose-900/5 rounded-full blur-[80px]"></div>
            </div>
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-0 w-1/2 aspect-square" aria-hidden="true">
              <div className="absolute inset-0 translate-z-0 bg-rose-800/10 rounded-full blur-[80px]"></div>
            </div>
            <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light" width="100%" height="100%"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence></filter><rect width="100%" height="100%" filter="url(#noise)"></rect></svg>
            <ThemeProvider attribute="class" defaultTheme="dark">
              <TooltipProvider delayDuration={0}>
                <main className="max-w-5xl mx-auto">
                  {children}
                </main>
              </TooltipProvider>
            </ThemeProvider>
          </SpotlightCard>
        </Spotlight>
      </body>
    </html>
  );
}
