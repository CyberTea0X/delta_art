import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ClientLayout from './ClientLayout';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

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
  params: Params,
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) 
{
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
