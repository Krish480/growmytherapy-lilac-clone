import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
