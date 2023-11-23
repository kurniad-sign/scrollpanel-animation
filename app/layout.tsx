import type { Metadata } from "next";
import clsx from "clsx";

import { melodrama, switzer } from "@/lib/fonts";

import "./globals.css";
import { ReactLenisProvider } from "../components/providers/react-lenis";

export const metadata: Metadata = {
  title: "Scroll Panels",
  description: "Scroll panel animation with Nextjs GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(melodrama.variable, switzer.variable)}>
        <ReactLenisProvider>{children}</ReactLenisProvider>
      </body>
    </html>
  );
}
