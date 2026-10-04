import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/Components/layout/NavBar";
import Footer from "@/Components/layout/Footer";
import MotionProvider from "@/Components/ui/MotionProvider";
import FloatingWhatsApp from "@/Components/ui/FloatingWhatsApp";

// Inter for body text, Plus Jakarta Sans for headings
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Link MiG Travel & Tour",
  description:
    "Creating unforgettable journeys and connecting travelers with extraordinary experiences around the world since 2025",
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          display.variable,
          "flex min-h-screen flex-col",
        )}
      >
        <MotionProvider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
