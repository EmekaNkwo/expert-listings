import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclidCircularA = localFont({
  src: [
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Medium Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A SemiBold Italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/euclid-circular-a/Euclid Circular A Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-euclid-circular-a",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Expert Listing - Dashboard",
  description: "Expert Listing Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclidCircularA.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
