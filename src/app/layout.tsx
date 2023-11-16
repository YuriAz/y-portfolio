import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Yuri Diogo',
  description: "YD's personal portfolio "
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex">
          <Navbar />
          <Background />
          <div className="z-50">{children}</div>
        </div>
      </body>
    </html>
  )
}
