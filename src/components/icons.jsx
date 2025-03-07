import { Building, Calendar, Code, Heart, Linkedin, Mic, Twitter, Users, Youtube } from "lucide-react";

export const Icons = {
  logo: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
      <path d="m8 16 4-4 4 4" />
      <path d="M8 16h8" />
    </svg>
  ),
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
  users: Users,
  code: Code,
  heart: Heart,
  building: Building,
  mic: Mic,
  calendar: Calendar,
}

