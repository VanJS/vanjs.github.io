import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 w-full bg-background border-b bg-[#FEB92F]">
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
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#upcoming"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Upcoming
            </Link>
            <Link
              href="#past"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Past
            </Link>
            <Link
              href="#speakers"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Speakers
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="https://lu.ma/vanjs" target="blank" prefetch={false}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Attend
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full pt-12 md:pt-24 lg:pt-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid gap-4 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  VanJS
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  A monthly event for JavaScript enthusiasts in Vancouver, BC.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>July 24, 2024</span>
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
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Upcoming Events
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our upcoming VanJS events in Vancouver.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>VanJS July 2024</CardTitle>
                  <CardDescription>
                    Join us for our monthly JavaScript meetup in Vancouver.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>July 24, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Northeastern University, Vancouver, BC</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://lu.ma/kb271tfh" target="blank">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Attend
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VanJS August 2024</CardTitle>
                  <CardDescription>
                    Join us for our monthly JavaScript meetup in Vancouver.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>August 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Northeastern University, Vancouver, BC</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="https://lu.ma/gykjonp2" target="blank">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Attend
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VanJS September 2024</CardTitle>
                  <CardDescription>
                    Join us for our monthly JavaScript meetup in Vancouver.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>September TBD</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>TBD</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    Attend
                  </Button>
                </CardFooter>
              </Card>
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
              <Card>
                <CardHeader>
                  <CardTitle>VanJS June 2024</CardTitle>
                  <CardDescription>
                    Our June meetup featured talks on JSR, Astro, and
                    Type-Safety.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>June 18, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Brainstation</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://lu.ma/vanjs-june-2024"
                    target="blank"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View Recap
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VanJS May 2024</CardTitle>
                  <CardDescription>
                    Our May meetup focused on HTMX, Alpine.js, Open Source AI
                    and Hono.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>May 21, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Brainstation</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://lu.ma/vanjs-may-2024"
                    target="blank"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View Recap
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VanJS April 2024</CardTitle>
                  <CardDescription>
                    Our April meetup covered ExpressoTS, JavaScript Proxies,
                    SOLID Principles and xState.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 23, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Brainstation</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://lu.ma/vanjs-april-2024"
                    target="blank"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    View Recap
                  </Link>
                </CardFooter>
              </Card>
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
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Senior Software Engineer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    John is a seasoned software engineer with a passion for
                    JavaScript. He has been a regular speaker at VanJS, sharing
                    his expertise on the latest frameworks and techniques.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      Twitter
                    </Link>
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      LinkedIn
                    </Link>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle>Jane Doe</CardTitle>
                    <CardDescription>Frontend Engineer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jane is a talented frontend engineer who has been showcasing
                    her expertise in modern JavaScript frameworks at VanJS. She
                    is known for her engaging presentations and practical
                    insights.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      Twitter
                    </Link>
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      LinkedIn
                    </Link>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle>John Smith</CardTitle>
                    <CardDescription>Full-stack Developer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    John is a full-stack developer who has been a regular
                    speaker at VanJS. He has shared his expertise on building
                    scalable and performant web applications using the latest
                    JavaScript technologies.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      Twitter
                    </Link>
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      LinkedIn
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
