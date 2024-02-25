import type { Metadata } from "next";
import "./style.scss";
import {Navbar} from "@/components/Navbar";

export const metadata: Metadata = {title: "JupiterPi"};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
