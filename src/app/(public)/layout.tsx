import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/layout/Footer";
import Providers from "@/lib/Providers";
import ScrollToTop from "@/components/UI/ScrollToTop";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modad - Home",
  description: "Modad Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
