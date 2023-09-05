import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TopAppBar from '@/lib/components/TopBar';
import FormManager from '@/lib/components/FormManager';
import ClientLayout from './ClientLayout';

const roboto = Roboto({
 subsets: ['latin'],
 weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Delta art',
  description: 'Website for artists and designers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ClientLayout />
      {children}
      </body>
    </html>
  )
}
