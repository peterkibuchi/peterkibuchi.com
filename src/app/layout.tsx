import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";

import "~/styles/globals.css";

import { Analytics, Footer, Navbar, ThemeProvider } from "~/components";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontHeading = LocalFont({
  src: "../styles/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  authors: [
    {
      name: "Peter Kibuchi",
      url: siteConfig.links.github,
    },
  ],
  creator: "Peter Kibuchi",
  description: siteConfig.description,
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/android-chrome-192x192.png",
    shortcut: "/favicon.ico",
  },
  keywords: siteConfig.keywords,
  openGraph: {
    description: siteConfig.description,
    locale: "en-US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/og.jpg`],
    // creator: "@example",
  },
  metadataBase: new URL("https://peterkibuchi.vercel.app"),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pt-10">
            <header>
              <Navbar />
            </header>

            <main className="flex-1">{children}</main>

            <footer>
              <Footer />
            </footer>
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
