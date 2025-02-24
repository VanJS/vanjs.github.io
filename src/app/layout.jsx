import { Inter } from "next/font/google";
import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


export const metadata = {
  title: 'VanJS - JavaScript Enthusiasts in Vancouver',
  description:
    "A monthly event for JavaScript enthusiasts in Vancouver, BC. Join us for talks on JavaScript, front-end technology, and the open web.",
    icons : {
      icon: '/ducky.png',
    },
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
