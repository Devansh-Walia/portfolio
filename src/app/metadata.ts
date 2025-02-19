import { CONTACT_LINKS } from "@/utils/constants";
import { Metadata } from "next";

const SITE_URL = CONTACT_LINKS.me;
const PROFILE_DESCRIPTION =
  "Software engineer specializing in React, Next.js, and modern web technologies. Experienced in building exceptional digital experiences with expertise in WebGL, TypeScript, and UI/UX design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devansh Walia | Software Engineer",
    template: "%s | Devansh Walia - Software Engineer",
  },
  description: PROFILE_DESCRIPTION,
  keywords: [
    "Devansh Walia",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "WebGL",
    "UI/UX Design",
    "Web Development",
    "Software Development",
    "India",
    "Remote Developer",
  ],
  authors: [{ name: "Devansh Walia", url: SITE_URL }],
  creator: "Devansh Walia",
  publisher: "Devansh Walia",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Devansh Walia - Software Engineer Portfolio",
    title: "Devansh Walia | Software Engineer & Web Developer",
    description: PROFILE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devansh Walia - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Walia | Software Engineer",
    description: PROFILE_DESCRIPTION,
    creator: "@devansh_walia_",
    images: ["/og-image.png"],
    site: "@devansh_walia_",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};
