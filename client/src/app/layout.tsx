import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '/public/assets/vendor/font-awesome/css/all.min.css';
import '/public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '/public/assets/vendor/tiny-slider/tiny-slider.css';
import '/public/assets/vendor/plyr/plyr.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <Script type='text/javascript' src='/assets/js/functions.js' />
    </html>
  );
}
