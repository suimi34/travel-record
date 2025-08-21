import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://example.com"),
  title: "バックパッカー中の訪問先リスト",
  description: "2016年4月〜10月のバックパッカー中の訪問した都市です。",
  keywords: ["バックパッカー", "旅行", "海外旅行", "世界一周", "アジア", "東南", "ヨーロッパ", "北米", "北中米", "北欧", "キューバ", "ロシア", "イラン", "ウクライナ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleTagManager gtmId="GTM-PL4H9LVQ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-VF4HW6VM4Z" />
    </html>
  );
}
