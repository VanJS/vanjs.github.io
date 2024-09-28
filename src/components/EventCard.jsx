import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@/components/icons/MapPinIcon";

export const EventCard = ({
  title,
  description,
  date,
  location,
  link,
  stickerSrc,
  past
}) => (
  <Card className="relative">
    {stickerSrc && (
      <Image
        src="sticker-1.png"
        alt="VanJS October 2024"
        width={100}
        height={100}
        className="absolute right-0 bottom-0"
      />
    )}
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center gap-2 text-muted-foreground">
        <CalendarIcon className="w-4 h-4" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPinIcon className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </CardContent>
    <CardFooter>
      {past ? (
        <Link
          href={link}
          target="blank"
          className="text-primary hover:underline"
          prefetch={false}
        >
          View Recap
        </Link>
      ) : (
        <Button asChild>
          <Link href={link} target="blank">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Attend
          </Link>
        </Button>
      )}
    </CardFooter>
  </Card>
);
