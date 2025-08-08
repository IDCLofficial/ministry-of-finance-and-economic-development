import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://imofinance.gov.ng'),
  title: "Ministry of Finance and Economic Development - Imo State",
  description: "Official website of the Imo State Ministry of Finance and Economic Development. Managing financial resources with transparency, integrity, and efficiency to promote sustainable development in Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  }, 
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Finance and Economic Development - Imo State",
    description: "Managing financial resources with transparency, integrity, and efficiency to promote sustainable development in Imo State",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Ministry of Finance",
    "Economic Development",
    "Financial Management",
    "Budget Planning",
    "Revenue Mobilization",
    "Fiscal Policy",
    "Imo State Government",
    "Financial Services",
    "Economic Growth",
    "Sustainable Development"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://imolabour.gov.ng",
    siteName: "Imo State Ministry of Finance and Economic Development",
    title: "Ministry of Finance and Economic Development - Imo State",
    description: "Managing financial resources with transparency, integrity, and efficiency to promote sustainable development in Imo State. Driving economic prosperity through strategic financial management.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Finance and Economic Development - Managing Financial Resources"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' },
  ]
}