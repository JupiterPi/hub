import type { Metadata } from "next";
import "./style.scss";
import {Navbar} from "@/components/Navbar";
import "./layout.scss";
import {JetBrains_Mono} from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {title: "JupiterPi"};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
      <Navbar />
      <div className="main">
        {children}
      </div>
      </body>
    </html>
  );
}
