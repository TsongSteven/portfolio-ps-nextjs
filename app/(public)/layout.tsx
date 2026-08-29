import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./../globals.css";
import "./app.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Symfony Developer | PHP Backend Engineer",
  description: "Symfony Developer crafting robust PHP applications, REST APIs, and scalable backend systems. View projects, skills, and modern web solutions built with Symfony.r",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: 'smooth' }}
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FKP2R1VY8Y" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FKP2R1VY8Y');
          `}
        </Script>
        <Providers>
          <Header />
          <main>
            {children}
            <Toaster position="top-right" />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
