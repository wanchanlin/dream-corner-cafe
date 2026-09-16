import type { Metadata } from "next";
import {
  Homemade_Apple,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from "next/font/google";
import "./globals.css";

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-homemade-apple",
});

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

const notoSerifTc = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-tc",
});

export const metadata: Metadata = {
  title: "Dream Corner | 青埔的溫暖咖啡角落",
  description:
    "Dream Corner 是一間位於青埔的台灣咖啡小站，用好咖啡、早午餐與明亮日常，陪伴每一次停留。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${homemadeApple.variable} ${notoSansTc.variable} ${notoSerifTc.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
