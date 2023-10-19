import { Figtree } from 'next/font/google'
import './globals.css'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'My Page',
  description: 'A resume page of Muhammad Aiman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
