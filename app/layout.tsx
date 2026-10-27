import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "Iqbal Sabith Firdaus | Portfolio",
    template: "%s | Iqbal Portfolio",
  },
  description: "Personal portfolio of Iqbal Sabith Firdaus. Informatics Graduate at Universitas Buana Perjuangan Karawang focused on web development and machine learning.",
  keywords: ["Iqbal Sabith Firdaus", "Portfolio", "Web Development", "Machine Learning", "Random Forest", "Frontend", "Backend", "Next.js", "React"],
  authors: [{ name: "Iqbal Sabith Firdaus" }],
  creator: "Iqbal Sabith Firdaus",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Iqbal Sabith Firdaus | Portfolio",
    description: "Personal portfolio of Iqbal Sabith Firdaus. Informatics Graduate at Universitas Buana Perjuangan Karawang focused on web development and machine learning.",
    siteName: "Iqbal Portfolio",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Iqbal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqbal Sabith Firdaus | Portfolio",
    description: "Personal portfolio of Iqbal Sabith Firdaus. Informatics Graduate at Universitas Buana Perjuangan Karawang focused on web development and machine learning.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/images/hero.jpg",
    shortcut: "/images/hero.jpg",
    apple: "/images/hero.jpg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

