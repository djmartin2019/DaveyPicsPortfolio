// app/layout.tsx
import { Oswald, Lora } from "@next/font/google";
import "./globals.css"; // Ensure you have a global CSS file
import Navbar from "./components/Navbar";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.className} ${lora.className}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
          integrity="sha512-5AZfVgC5jE1I1fVhzkHZ3QkxMJjYbCMg6RB4J/vI7Z2yw/65vsYpvpoM6g0c8+2h3Qfs/yS4N0eIV6hP5F+Rgw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
