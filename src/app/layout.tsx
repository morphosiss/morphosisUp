import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MorphosisUp",
    template: "%s | morphosisup",
  },
  description:
    "A Morphosisup é uma empresa de tecnologia que se destaca na criação de soluções inovadoras e personalizadas para atender às necessidades específicas de cada cliente. Com uma equipe altamente qualificada e apaixonada por tecnologia, a Morphosisup oferece serviços de desenvolvimento de software!",
  keywords: [
    "MorphosisUp",
    "Tecnologia",
    "Inovação",
    "Soluções Tecnológicas",
    "Protótipos",
    "Desenvolvimento de Software",
    "Logotipos",
    "Design Web",
  ],
  authors: [
    {
      name: "MorphosisUp",
      url: "https://morphosisup.vercel.app",
    },
  ],
  openGraph: {
    title: "MorpphosisUp",
    description:
      "A Morphosisup é uma empresa de tecnologia que se destaca na criação de soluções inovadoras e personalizadas para atender às necessidades específicas de cada cliente. Com uma equipe altamente qualificada e apaixonada por tecnologia, a Morphosisup oferece serviços de desenvolvimento de software!",
    url: "https://morphosisup.vercel.app/",
    siteName: "MorphosisUp",
    images: [
      {
        url: "/morphosisup.png",
        width: 1200,
        height: 630,
        alt: "MorphosisUp",
      },
    ],
    locale: "pt-AO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Morphosis - Adaptando-se Tecnologicamente</title>
        <meta
          name="description"
          content="A Morphosisup é uma empresa de tecnologia que se destaca na criação de soluções inovadoras e personalizadas"
        />
        <meta
          property="og:title"
          content="Morphosis - Adaptando-se Tecnologicamente"
        />
        <meta
          property="og:description"
          content="A Morphosisup é uma empresa de tecnologia que se destaca na criação de soluções inovadoras e personalizadas"
        />
        <meta property="og:url" content="https://morphosisup.vercel.app/" />
        <meta property="og:site_name" content="BIPPER" />
        <meta property="og:image" content="/livro.JPG" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BIPPER" />
        <meta property="og:locale" content="pt-AO" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="MorphosisUp, Tecnologia, Inovação, Soluções Tecnológicas, Protótipos, Desenvolvimento de Software, Logotipos,  Design Web"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="4Htd1MfJ_ulzF2fXYiRlp3Xml1GNbHLGGyZ9oacnye8"
        />
      </Head>
      <body className={` ${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
