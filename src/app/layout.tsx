import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@components/navbar";
import { metadata } from "./metadata";
import { Analytics } from "@vercel/analytics/react";
import { CONTACT_LINKS } from "@/utils/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Devansh Walia",
              url: CONTACT_LINKS.me,
              image: "/images/profile.jpeg",
              sameAs: [
                CONTACT_LINKS.github,
                CONTACT_LINKS.linkedin,
                CONTACT_LINKS.twitter,
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Glue Labs",
              },
              description:
                "Software engineer specializing in building exceptional digital experiences.",
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "WebGL",
                "Svelte",
                "NestJS",
                "SQL",
                "PostgreSQL",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
