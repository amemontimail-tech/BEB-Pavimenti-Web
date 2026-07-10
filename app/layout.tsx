import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/BebLanguageContext";
import Navbar from "@/components/beb-layout/BebNavbar";
import Footer from "@/components/beb-layout/BebFooter";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.bebpavimenti.it"),
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
    "Rivestimenti Bagno",
    "gres porcellanato",
    "piastrelle",
    "mosaico",
    "marmo",
    "pietra naturale",
    "laminato",
    "pavimento in vinile",
    "SPC",
    "LVT",
    "grès",
    "terracotta",
    "ardesia",
    "quarzo",
    "rivestimenti cucina",
    "piastrelle da esterno",
    "pavimento per terrazzo",
    "pavimento per giardino",
    "pavimenti per soggiorno",
    "pavimenti per camera da letto",
    "scala rivestita",
    "piastrelle antiscivolo",
    "pavimento rettificato",
    "grande formato",
    "effetto legno",
    "effetto marmo",
    "effetto cemento",
    "showroom pavimenti Cuneo",
    "showroom pavimenti Piemonte",
    "posa pavimenti",
    "installazione piastrelle",
    "consulenza pavimenti",
    "progettazione bagno",
    "rivestimenti su misura",
    "vendita ceramiche",
    "Fossano",
    "Racconigi",
    "Bra",
    "Alba",
    "Torino",
    "Piemonte",
    "carta da parati",
    "pavimenti dal 1969",
  ],
  openGraph: {
    title: "B&B Pavimenti e Rivestimenti — Dal 1969",
    description:
      "Pavimenti, rivestimenti e soluzioni bagno di qualità a Savigliano dal 1969.",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B&B Pavimenti e Rivestimenti — Dal 1969",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
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
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFW9G99J');`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-foreground">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFW9G99J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
