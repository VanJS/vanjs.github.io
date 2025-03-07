import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { OrganizersSection } from "@/components/organizers-section";
import { FoundersSection } from "@/components/founders-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { WorkshopsSection } from "@/components/workshops-section";
import { RecordingsSection } from "@/components/recordings-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-[#FEB92F]">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/VanJS.png" alt="VanJS" className="h-[70px]" />
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex">
              <ul className="flex gap-6 text-sm">
                <li>
                  <Link
                    href="#values"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="#collaborate"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Collaborate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#organizers"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Organizers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#partners"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Link
            href="https://lu.ma/vanjs"
            target="_blank"
            rel="vanjs-website"
            className="bg-[#FEB92F] hover:bg-[#e9a820] text-black font-semibold px-4 py-2 rounded-md"
          >
            Join next meetup
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container grid gap-6 py-12 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Your JS Community{" "}
                <span className="text-[#FEB92F]">in Vancouver</span>
              </h1>
              <p className="text-gray-600">
                Join the largest JavaScript community in Vancouver, Canada!The
                focus is on JavaScript, front-end technology, and the open web.
                Our GitHub repo contains our goals, our Call for Speakers, and
                our Code of Conduct, so come check it out and propose a talk!
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="https://lu.ma/vanjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/tickets.svg" alt="Luma" className="h-6 w-6" />
                  <span className="sr-only">Luma</span>
                </Link>
                <Link
                  href="https://www.meetup.com/vancouver-javascript-developers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/meetup.svg" alt="Meetup" className="h-6 w-6" />
                  <span className="sr-only">Meetup</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@VancouverJS/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.youtube className="h-6 w-6 text-gray-800 hover:text-[#FEB92F]" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/vancouverjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="h-6 w-6 text-gray-800 hover:text-[#FEB92F]" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-lg md:min-h-[400px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="VanJS meetup"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="border-b py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#FEB92F]">
                Community Values
              </h2>
              <h3 className="mt-2 text-3xl font-bold">A better way to share</h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Join the community and enjoy sharing your learning journey,
                network with like-minded people.
              </p>
            </div>

            <div className="grid mt-10 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEB92F]">
                  <Icons.users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">For Everyone</h4>
                <p className="text-gray-600">
                  VanJS is a community-led initiative. Our events are a safe
                  space and expect every attendee to follow our{" "}
                  <Link
                    href="https://github.com/VanJS/meetup/blob/master/CONDUCT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code of Conduct.
                  </Link>
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEB92F]">
                  <Icons.code className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Open source</h4>
                <p className="text-gray-600">
                  Open source is our backbone. Our events, website, and
                  resources are all open for everyone to contribute to and
                  access.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEB92F]">
                  <Icons.heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Non Profit</h4>
                <p className="text-gray-600">
                  We&apos;re non-profit and volunteer-run. Our event entry fee
                  is either donated or reinvested into following events. The
                  meetup organizers don&apos;t take any profits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborate Section */}
        <section id="collaborate" className="border-b py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#FEB92F]">
                Collaborate
              </h2>
              <h3 className="mt-2 text-3xl font-bold">
                Help maintain the community
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                This helps this community we need attendants, speakers and
                sponsors.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mt-10 ">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEB92F]">
                  <Icons.building className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">
                  Ask you company to Sponsor
                </h4>
                <p className="text-gray-600">
                  If your company wants to support the community, we have
                  different sponsorship tiers available.
                </p>
                <Button
                  variant="outline"
                  className="border-[#FEB92F] text-[#FEB92F] hover:bg-[#FEB92F] hover:text-white"
                >
                  Sponsor the event
                </Button>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEB92F]">
                  <Icons.mic className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Share your experience</h4>
                <p className="text-gray-600">
                  Found something in that you want to tell? We'd love to hear
                  what you have to present!
                </p>
                <Button
                  variant="outline"
                  className="border-[#FEB92F] text-[#FEB92F] hover:bg-[#FEB92F] hover:text-white"
                >
                  Become a speaker
                </Button>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEB92F]">
                  <Icons.calendar className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Join the community</h4>
                <p className="text-gray-600">
                  Stay in the loop about future events by following us on social
                  media and joining our community.
                </p>
                <Button
                  variant="outline"
                  className="border-[#FEB92F] text-[#FEB92F] hover:bg-[#FEB92F] hover:text-white"
                >
                  Join the next meetup
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <OrganizersSection />

        {/* Founders Section */}
        <FoundersSection />

        {/* Sponsors Section */}
        <SponsorsSection />

        {/* Workshops Section */}
        {/* <WorkshopsSection /> */}

        {/* Recordings Section */}
        <RecordingsSection />

        <section
          id="jokes"
          class="w-full py-4 bg-muted relative overflow-hidden"
        >
          <img
            alt="Jason the duck laughing"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            class="absolute left-0 -bottom-5 transform -rotate-12 md:left-14 "
            src="/JasonLaughing.png"
          />
          <div class="container space-y-12 px-2 md:px-4">
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="inline-flex ">
                <h2 class="content-center text-3xl font-bold sm:text-5xl my-2">
                  Make Us LOL!
                </h2>
                <img
                  alt="Jason the duck with nerd glasses on"
                  loading="lazy"
                  width="85"
                  height="85"
                  decoding="async"
                  data-nimg="1"
                  class=" transform rotate-12  "
                  src="/JasonNerd.png"
                />
              </div>
              <p class="max-w-[900px] z-20 my-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
                We love a good laugh! Submit your funniest joke and it might be
                featured at our upcoming event.
              </p>
              <a
                target="blank"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-black bg-[#FEB92F] hover:bg-[#FEB92F] z-20 text-black hover:underline"
                href="https://forms.gle/oWZraeaaTRjkBJ8s7"
              >
                Submit Your Joke
              </a>
              <a href="https://forms.gle/oWZraeaaTRjkBJ8s7"></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-[#FEB92F] py-6 text-white mt-6">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <img src="/VanJS.png" alt="VanJS Logo" className="h-14" />
            </div>
            <div className="flex gap-8 text-sm">
              <Link
                href="https://github.com/VanJS/meetup/blob/master/CONDUCT.md"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                Code of Conduct
              </Link>
              <Link
                href="https://github.com/VanJS/meetup"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                Our GitHub
              </Link>
            </div>
            <div className="text-sm text-gray-400">2025 VanJS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
