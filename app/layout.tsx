import type { Metadata } from "next";
import { Homemade_Apple } from "next/font/google";
import "./globals.css";

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-homemade-apple",
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
      className={`${homemadeApple.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
