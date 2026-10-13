import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "FitLog | Workout Library",
  description: "Pick a lift, lock it into today's plan and log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Providers>
          <Navbar />

          <main className="container mx-auto w-full flex-1 px-4 py-8">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}