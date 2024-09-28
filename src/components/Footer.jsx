import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer
    id="footer-contact"
    className="bottom-0 w-full p-2 border-b h-18 bg-[#FEB92F]"
  >
    <div className="container flex items-center justify-between	gap-8 h-16 p-4 md:px-8">
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
      <div className="flex items-center justify-end gap-8">
        <Link
          href="https://lu.ma/vanjs"
          className="hover:underline hover:opacity-60 flex items-center gap-2 text-sm font-medium"
          title="Tickets"
          prefetch={false}
        >
          <Image
            src="/tickets.svg"
            alt="tickets"
            width={45}
            height={45}
            style={{
              borderRadius: 5,
              objectFit: "cover",
            }}
          />
        </Link>
        <Link
          href="https://www.meetup.com/vancouver-javascript-developers/"
          className="flex items-center hover:opacity-60 gap-2"
          title="MeetUp"
          prefetch={false}
        >
          <Image
            src="/meetup.svg"
            alt="meetup"
            width={45}
            height={45}
            style={{
              borderRadius: 5,
              objectFit: "cover",
            }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/vancouverjs/"
          className="flex items-center hover:opacity-60 gap-2"
          title="Linkedin"
          prefetch={false}
        >
          <Image
            src="/linkedin.svg"
            alt="linkedin"
            width={38}
            height={38}
            style={{
              borderRadius: 5,
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
    </div>
  </footer>
);
