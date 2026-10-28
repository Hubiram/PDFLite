import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Project",
  description: "Testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${fontSans.variable} antialiased`}
          suppressHydrationWarning={true}>
          <div className="relative flex min-h-screen flex-col"><Header />
          <main className="flex-1">{children}</main>
          <Footer /></div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
