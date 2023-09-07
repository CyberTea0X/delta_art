import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import ClientLayout from './ClientLayout';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

const roboto = Roboto({
 subsets: ['latin'],
 weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Delta art',
  description: 'Website for artists and designers',
}

type RootLayoutProps = {
  children: React.ReactNode,
  params: {
    lng: string
  }
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: RootLayoutProps) 
{
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={roboto.className}>
      <ClientLayout />
      {children}
      </body>
    </html>
  )
}
