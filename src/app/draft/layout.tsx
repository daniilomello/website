import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Disable Google Analytics for draft pages
            window['ga-disable-G-98RLHESESB'] = true;

            // Prevent GTM from firing
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'gtm.blocklist',
              'gtm.blocklist': ['all']
            });

            // Disable Clarity
            window.clarity = window.clarity || function() {};
            window.clarity('stop');
          `,
        }}
      />
      <div data-noindex data-nosnippet>
        {children}
      </div>
    </>
  );
}
