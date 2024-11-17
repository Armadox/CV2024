import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  openGraph: {
    title: "Adrian D.",
    description: "Adrian Dan Portfolio",
    url: 'https://adrian-dan-cv.vercel.app',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://adrian-dan-cv.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: "300"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
