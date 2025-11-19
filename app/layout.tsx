import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noubata Benoit - Software Engineer',
  description: 'Portfolio of Noubata Benoit, Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
