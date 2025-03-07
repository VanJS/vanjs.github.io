import Image from "next/image"

const sponsors = [
  {
    name: "TechVan",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Platinum Sponsor",
  },
  {
    name: "CodeNorth",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Partner & Gold Sponsor",
  },
  {
    name: "DevHub",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Featured Sponsor",
  },
  {
    name: "Maple Labs",
    logo: "/placeholder.svg?height=100&width=200",
    type: "Regular Sponsor",
  },
]

export function SponsorsSection() {
  return (
    (<section id="partners" className="border-b py-16">
      <div className="container space-y-12">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#FEB92F]">Partners & Sponsors</h2>
          <h3 className="mt-2 text-3xl font-bold">Fueling the Community Together</h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            The companies that have been helping organize the events numerous times.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col items-center text-center">
              <div className="relative h-16 w-full">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  fill
                  className="object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{sponsor.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

