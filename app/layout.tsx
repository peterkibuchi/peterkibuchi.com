import { type Metadata } from "next";
import { Inter } from "next/font/google";

import "~/app/globals.css";

import { Analytics, Footer, Navbar, ThemeProvider } from "~/components";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Peter Kibuchi",
    template: "%s | Peter Kibuchi",
  },
  authors: [{ name: "Peter Kibuchi", url: "https://www.peterkibuchi.com" }],
  creator: "Peter Kibuchi",
  description: "Software Engineer.",
  icons: {
    // apple: "/static/favicons/apple-touch-icon-180x180.png",
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Engineering",
    "Frontend",
    "Developer",
    "Software",
    "peterkibuchi.com",
  ],
  openGraph: {
    description: "Software Engineer.",
    locale: "en-US",
    siteName: "Peter Kibuchi",
    title: "Peter Kibuchi",
    type: "website",
    url: "https://www.peterkibuchi.com",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 ${inter.className}`}
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
