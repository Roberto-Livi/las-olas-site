import { CalendarDays, Search, Users } from "lucide-react";
import type { BookingField, DrawerLink } from "@/components/hero/home-hero.types";

export const bookingFields: BookingField[] = [
  {
    icon: CalendarDays,
    label: "Dates",
    value: "Check-in  ->  Check-out",
  },
  {
    icon: Users,
    label: "Guests",
    value: "2 Adults, 0 Children",
  },
  {
    icon: Search,
    label: "Rate Option",
    value: "Special codes",
  },
];

export const drawerLinks: DrawerLink[] = [
  { href: "/", label: "Home" },
  { href: "/#residences", label: "Residences" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/eagle-beach", label: "Eagle Beach" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];
