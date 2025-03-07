import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"

const founders = [
  {
    name: "Emily Johnson",
    image: "/placeholder.svg?height=200&width=200",
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
]

export function FoundersSection() {
  return (
    (<section className="border-b py-16">
      <div className="container space-y-12">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#FEB92F]">History</h2>
          <h3 className="mt-2 text-3xl font-bold">Honorable founders</h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            The people who founded the meetup in 2015 and grown it into one of the largest communities in Vancouver.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <Image
                src={founders[0].image || "/placeholder.svg"}
                alt={founders[0].name}
                fill
                className="object-cover" />
            </div>
            <h4 className="mt-4 text-lg font-semibold">{founders[0].name}</h4>
            <div className="mt-2 flex gap-2">
              <Link href={founders[0].twitter} target="_blank" rel="noopener noreferrer">
                <Icons.twitter className="h-5 w-5 text-gray-600 hover:text-[#FEB92F]" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href={founders[0].github} target="_blank" rel="noopener noreferrer">
                <Icons.code className="h-5 w-5 text-gray-600 hover:text-[#FEB92F]" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={founders[0].linkedin} target="_blank" rel="noopener noreferrer">
                <Icons.linkedin className="h-5 w-5 text-gray-600 hover:text-[#FEB92F]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

