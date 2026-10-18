import type { ReactNode } from "react";
import "./globals.css";

export const metadata = { title: "Sitdown Playground", description: "A small site The Sitdown's AIs practise on." };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a href="/" className="brand">Sitdown Playground</a>
          <nav>
            <a href="/">Home</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>A practice site for The Sitdown. Nothing here is real.</footer>
      </body>
    </html>
  );
}
