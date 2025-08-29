/* eslint-disable @next/next/inline-script-id */
import { CookiePopup } from "@/components/CookiePopup";
import Spotlight, { SpotlightCard } from "@/components/Spotlight";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  alternates: {
    canonical: './',
    types: {
      "application/rss+xml": [{ url: "blog/rss.xml", title: "RSS Feed" }],
    }
  },
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
    images: [
      {
        url: "https://daniilo.dev/og.png",
        width: 1200, // Recommended width
        height: 630,  // Recommended height
        alt: "Full Stack Develper Creates Digital Products"
      }
    ],
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
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W89NH7X');
          `}
        </Script>
        <Script id="ga-head-src" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-98RLHESESB"></Script>
        <Script id="ga-head" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-98RLHESESB');
          `}
        </Script>
        <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "${DATA.name}",
              "url": "${DATA.url}",
              "sameAs": [
                "${DATA.contact.social.GitHub.url}",
                "${DATA.contact.social.LinkedIn.url}"
              ]
            }
          `}
        </Script>
        <Script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t27hk6lfxy");
          `}
        </Script>
      </head>
      <body
        className={cn(
          "overscroll-y-none selection:bg-violet-600/90 min-h-screen bg-gray-900 font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W89NH7X" height="0" width="0" style={{
          display: 'none',
          visibility: 'hidden',
        }}></iframe></noscript>
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
                <main className="max-w-5xl mx-auto py-24">
                  {children}
                  <CookiePopup />
                </main>
              </TooltipProvider>
            </ThemeProvider>
          </SpotlightCard>
        </Spotlight>
      </body>
    </html>
  );
}
