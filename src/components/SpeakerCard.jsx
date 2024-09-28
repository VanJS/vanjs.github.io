import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SpeakerCard = ({ name, title, description, link }) => (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="flex items-center gap-2 bg-primary hover:underline">
          <Link href={link} className="text-black" prefetch={false}>
            Connect
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
