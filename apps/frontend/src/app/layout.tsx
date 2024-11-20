import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"

const font = Inter({
  subsets:['latin']
})
export const metadata: Metadata = {
  title: "Your event start here",
  description: "Welcome to Events Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        {children}
      </body>
    </html>
  );
}
