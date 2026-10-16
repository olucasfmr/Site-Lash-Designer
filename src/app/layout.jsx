import { Cormorant_Garamond, Urbanist } from "next/font/google";
import "./globals.css";
import { meta, site } from "@/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: meta.title,
  description: meta.description,
  icons: { icon: "logos/simbolo-k.svg" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: meta.title,
    description: meta.description,
    images: [
      {
        url: "logos/logo-escuro-principal-transparente.png",
        width: 1080,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export const viewport = {
  themeColor: "#F0E3D4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${urbanist.variable}`}
    >
      <body className="bg-offwhite font-body font-light text-cafe antialiased">
        {children}
      </body>
    </html>
  );
}
