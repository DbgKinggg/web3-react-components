import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Web3ModalProvider from './(providers)/Web3ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 React Components',
  description: 'Web3 React Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  )
}
