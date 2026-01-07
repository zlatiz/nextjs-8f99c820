import React from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Home | Garber Bros, Inc. | Morgan City, LA | Marine Transportation Vessels",
  description: "For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
