import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NutriAI - World's Best AI Nutritionist",
  description:
    "Get a personalized nutrition plan from an AI nutritionist that understands your medical history, preferences, culture, budget, and goals.",
  keywords: [
    "AI nutritionist",
    "personalized diet plan",
    "nutrition advisor",
    "meal planning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
