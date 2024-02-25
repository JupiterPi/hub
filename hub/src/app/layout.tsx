import type { Metadata } from "next";
import "./style.scss";
import {Navbar} from "@/components/Navbar";
import "./layout.scss";

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
      <div className="main">
        {children}
      </div>
      </body>
    </html>
  );
}
