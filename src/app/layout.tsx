import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: "ITKHLD's Portfolio | iOS Developer",
  description: 'Professional portfolio of Khalid Samim - iOS Developer and App Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="bg-gradient-to-br from-white to-gray-50">
        {children}
      </body>
    </html>
  )
} 