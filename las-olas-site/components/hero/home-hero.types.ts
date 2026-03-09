import type { ComponentType } from "react";

export type BookingField = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export type DrawerLink = {
  href: string;
  label: string;
};
