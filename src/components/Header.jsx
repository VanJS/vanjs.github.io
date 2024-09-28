import { Button } from "@/components/ui/button";
import {CalendarIcon} from './icons/CalendarIcon';
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#", text: "Home" },
  { href: "#upcoming", text: "Upcoming" },
  { href: "#past", text: "Past" },
  { href: "#speakers", text: "Speakers" },
  { href: "#faq", text: "FAQ" },
  { href: "#footer-contact", text: "Contact" },
];

export const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b bg-[#FEB92F]">
    <div className="container flex items-center justify-between h-16 px-4 md:px-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold"
        prefetch={false}
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
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <Button asChild className="bg-secondary">
        <Link href="https://lu.ma/vanjs" target="blank" prefetch={false}>
          <CalendarIcon className="w-4 h-4 mr-2" />
          Attend
        </Link>
      </Button>
    </div>
  </header>
);
