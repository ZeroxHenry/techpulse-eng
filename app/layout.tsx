import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'StackPulse',
    template: '%s | StackPulse',
  },
  description: 'Engineer Study — learning real tech from scratch.',
  metadataBase: new URL('https://techblips.com'),
  openGraph: {
    title: 'StackPulse',
    description: 'Engineer Study — learning real tech from scratch.',
    url: 'https://techblips.com',
    siteName: 'StackPulse',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'StackPulse - Engineer Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackPulse',
    description: 'Engineer Study — learning real tech from scratch.',
    images: ['/og-default.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: 'StackPulse RSS (EN)' },
        { url: '/ko/feed.xml', title: 'StackPulse RSS (KO)' },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
