import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";

const organizers = [
  {
    name: "Sarah Chen",
    image: "/placeholder.svg?height=200&width=200",
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Michael Wong",
    image: "/placeholder.svg?height=200&width=200",
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Sharma",
    image: "/placeholder.svg?height=200&width=200",
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "David Kim",
    image: "/placeholder.svg?height=200&width=200",
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export function OrganizersSection() {
  return (
    <section id="organizers" className="border-b py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#FEB92F]">
            Team
          </h2>
          <h3 className="mt-2 text-3xl font-bold">Organizers</h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            The people that have been organizing the events over the years.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {organizers.map((organizer) => (
            <div
              key={organizer.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={organizer.image || "/placeholder.svg"}
                  alt={organizer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="mt-4 text-lg font-semibold">{organizer.name}</h4>
              <div className="mt-2 flex gap-2">
                <Link
                  href={organizer.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.twitter className="h-5 w-5 text-gray-600 hover:text-[#FEB92F]" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href={organizer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.code className="h-5 w-5 text-gray-600 hover:text-[#FEB92F]" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href={organizer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="h-5 w-5 text-gray-600 hover:text-[#FEB92F]" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
