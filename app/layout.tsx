import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/src/context/CartContext";
import Navbar from "@/src/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SwiftCart",
  description: "Essentials, curated simply.",
};

const themeScript = `
(function () {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-border py-10 text-center">
            <p className="text-xs tracking-widest uppercase text-subtle">
              &copy; {new Date().getFullYear()} SwiftCart
            </p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
