import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konstantin Dolgov | Senior Product Designer",
  description:
    "Senior+ / Lead Product Designer based in Hamburg, Germany. Specializing in enterprise UX, design systems, and complex B2B products for clients like Huawei, Google, and ADNOC.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Design Systems",
    "Enterprise UX",
    "Hamburg",
    "Germany",
  ],
  authors: [{ name: "Konstantin Dolgov" }],
  creator: "Konstantin Dolgov",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Konstantin Dolgov | Senior Product Designer",
    description:
      "Senior+ / Lead Product Designer specializing in enterprise UX and design systems.",
    siteName: "Konstantin Dolgov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konstantin Dolgov | Senior Product Designer",
    description:
      "Senior+ / Lead Product Designer specializing in enterprise UX and design systems.",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
