import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./index.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore Waitlist",
  description: "Entre já e garanta acesso antecipado ao Explore!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
