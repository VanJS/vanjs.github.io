import { events, pastEvents } from "@/data/events";

import { AccordionFAQ } from "@/components/ui/accordion/index";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { SpeakerCard } from "@/components/SpeakerCard";
import StickerBanner from "@/components/sticker-banner/sticker-banner";
import { speakers } from "@/data/speakers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <StickerBanner />
      <main className="flex-1">
        <section id="hero" className="w-full pt-12 md:pt-24 lg:pt-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid gap-4 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="inline lg:leading-tighter align-bottom text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  VanJS
                </h1>
                <Image
                  src="ducky.png"
                  width={145}
                  height={145}
                  alt="duck"
                  className="inline transform -rotate-12"
                />
                <p className="text-muted-foreground md:text-xl mt-3">
                  A monthly event for JavaScript enthusiasts in Vancouver, BC.
                  The focus is on JavaScript, front-end technology, and the open
                  web. Our GitHub repo contains our goals, our Call for
                  Speakers, and our Code of Conduct, so come check it out and
                  propose a talk!
                </p>
                <ul className="text-muted-foreground md:text-xl list-disc ml-11 mt-3">
                  <li>
                    The&nbsp;
                    <Link
                      href="https://github.com/VanJS/meetup"
                      className="text-black"
                    >
                      VanJS GitHub&nbsp;
                    </Link>
                    repo
                  </li>
                  <li>
                    Our&nbsp;
                    <Link
                      href="https://github.com/VanJS/meetup/blob/master/SPEAKING.md"
                      className="text-black"
                    >
                      Call for Speakers
                    </Link>
                  </li>
                  <li>
                    Our&nbsp;
                    <Link
                      href="https://github.com/VanJS/meetup/blob/master/CONDUCT.md"
                      className="text-black"
                    >
                      Code of Conduct
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>August 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Northeastern University, Vancouver, BC</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  src="/hero.jpg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="upcoming" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Upcoming Events
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our upcoming VanJS events in Vancouver.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </div>
          </div>
        </section>
        <section id="past" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Past Events
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our past VanJS events in Vancouver.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.title} {...event} past />
              ))}
            </div>
          </div>
        </section>
        <section id="speakers" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Speakers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the talented speakers who have graced our VanJS events.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.name} {...speaker} />
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full md:py-24 lg:py-30 bg-muted">
          <div className="container space-y-12 px-2 md:px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex">
                <Image
                  src="ducky.png"
                  width={85}
                  height={85}
                  alt="duck"
                  className="rotate-12"
                />
                <h2 className="content-center text-3xl font-bold sm:text-5xl my-2">
                  FAQs
                </h2>
              </div>
              <p className="max-w-[900px] my-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Some frequent questions from our community:
              </p>
              <AccordionFAQ />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
