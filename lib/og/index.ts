import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "What If You Were a CISO?",
    template: "%s",
  },
  description: "Guides, examples, resources and AI Tools for CISOs.",
  keywords: ["Cybersecurity", "CISO", "Guides", "Examples", "Resources", "AI generated Campagins tools"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "What If You Were a CISO?",
    description: "Guides, examples, resources and AI Tools for CISOs.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
    siteName: "What If You Were a CISO?",
  },
  twitter: {
    card: "summary_large_image",
    title: "What If You Were a CISO?",
    description: "Guides, examples, resources and AI Tools for CISOs.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
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
};
