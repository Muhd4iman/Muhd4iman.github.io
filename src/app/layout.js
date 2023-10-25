import { Figtree } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/desktop'
import { NavigationEvents } from './nav-events'
import { Suspense } from 'react'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'My Page',
  description: 'A resume page of Muhammad Aiman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <NavBar />
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        </body>
    </html>
  )
}
