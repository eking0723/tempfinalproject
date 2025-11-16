import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SerVSU",
  description: "Web-based freelancer platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>This is the main layout!</h1>
        {children}
      </body>
    </html>
  );
}
