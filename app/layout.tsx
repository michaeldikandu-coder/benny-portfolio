import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michael Dikandu - Senior Software Engineer',
  description: 'Portfolio of Michael Dikandu, Senior Software Engineer',
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
