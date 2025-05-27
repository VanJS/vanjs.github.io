"use client";

import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CalendarIcon } from "./icons/CalendarIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#", text: "Home"},
  { href: "#upcoming", text: "Upcoming"},
  { href: "#past", text: "Past" },
  { href: "#speakers", text: "Speakers" },
  { href: "#faq", text: "FAQ" },
  { href: "#footer-contact", text: "Contact"},
  { href: "https://www.vanjs.com/flappy-bird/", text: "Flappy duck", icon: "🐤" },
  { href: "https://www.vanjs.com/cross-road/", text: "Jumpy duck", icon: "🦆" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FEB92F]">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
          onClick={closeMobileMenu}
        >
          <Image
            src="/VanJS.png"
            alt="VanJS"
            width={100}
            height={64}
            style={{
              height: "64px",
              objectFit: "cover",
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="hover:underline underline-offset-4 flex items-center gap-1"
              prefetch={false}
            >
              <span>{link.icon}</span>
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="bg-secondary hidden md:flex">
            <Link href="https://lu.ma/vanjs" target="_blank" rel="noopener noreferrer" prefetch={false}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Attend
            </Link>
          </Button>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#FEB92F] shadow-lg z-40">
          <nav className="flex flex-col items-start p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-black hover:bg-black hover:text-brand-yellow flex items-center gap-2"
                prefetch={false}
                onClick={closeMobileMenu}
              >
                <span>{link.icon}</span>
                {link.text}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-secondary hover:bg-secondary/80">
              <Link href="https://lu.ma/vanjs" target="_blank" rel="noopener noreferrer" prefetch={false} onClick={closeMobileMenu}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                Attend
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
