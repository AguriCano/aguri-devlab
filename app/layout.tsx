import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aguri Cano | Full Stack Developer",
  description: "Portafolio profesional de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
