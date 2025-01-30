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
      <head>
        <meta name="description" content="Hi, I'm JupiterPi. I'm a software-developing and music-making student from Mannheim, Germany." />
      </head>
      <body className={jetbrainsMono.className}>
      <Navbar />
      <div className="main">
        {children}
      </div>
      </body>
    </html>
  );
}
