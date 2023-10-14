import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Web3ModalProvider from './(providers)/web3-modal-provider'
import { ThemeProvider } from './(providers)/theme-provider'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3ModalProvider>
            {children}
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
