import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/BebLanguageContext";
import Navbar from "@/components/beb-layout/BebNavbar";
import Footer from "@/components/beb-layout/BebFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "B&B Pavimenti e Rivestimenti — Dal 1969",
    template: "%s — B&B Pavimenti",
  },
  description:
    "Pavimenti, rivestimenti e soluzioni bagno di qualità a Savigliano dal 1969. Showroom con ceramiche, gres, parquet e carta da parati.",
  keywords: [
    "pavimenti",
    "rivestimenti",
    "bagno",
    "parquet",
    "ceramiche",
    "Savigliano",
    "Cuneo",
    "B&B Pavimenti",
  ],
  openGraph: {
    title: "B&B Pavimenti e Rivestimenti — Dal 1969",
    description:
      "Pavimenti, rivestimenti e soluzioni bagno di qualità a Savigliano dal 1969.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-foreground">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
