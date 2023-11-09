import { Figtree } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/desktop'
import { NavigationEvents } from './nav-events'
import { Suspense } from 'react'
import Loading from './loading'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'My Page',
  description: 'A resume page of Muhammad Aiman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Suspense fallback={<Loading />}>
          <NavigationEvents />
          <NavBar />
          {children}
        </Suspense>
        </body>
    </html>
  )
}
