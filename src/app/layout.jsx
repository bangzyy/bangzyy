// import type { Metadata } from "next";
import Navbar from '@/components/Navbar'
import  '@/app/globals.css'
import { Gabarito }from 'next/font/google'
// import { ReactNode } from "react";

const gabarito = Gabarito({ subsets: ['latin'] });

export const  metadata = {
  title: 'Adzy website',
  description: 'From Kuningan Web Development',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-light` }suppressHydrationWarning={true}>
       <Navbar />
        {children}
        </body>
    </html>
  )
}
