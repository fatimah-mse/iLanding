import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import Navbar from "./components/Navbar"
import { Grand_Hotel, Nunito } from "next/font/google"
import '@fortawesome/fontawesome-svg-core/styles.css'
import ScrollToTop from "./components/ScrollToTop"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito"
})

const grandHotel = Grand_Hotel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grand-hotel"
})

export const metadata: Metadata = {
  title: "iLanding",
  description: "Generated by create next app",
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${grandHotel.variable} antialiased`}
      >
        <div id="top" className="fixed top-0 left-0 w-2.5 h-1 rounded-sm bg-[#f15936] z-50 transition-all"></div>
        <ScrollToTop />
        <Navbar />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
