export type Suite = {
  title: string;
  sleeps: string;
  copy: string;
  highlights: string[];
  gallery: string[];
};

export type Amenity = {
  body: string;
  image: string;
  tag: string;
  title: string;
};

export const keyBenefits = [
  {
    title: "2-minute walk to Eagle Beach",
    body: "Step onto the boardwalk and reach Aruba’s most iconic shoreline in minutes.",
  },
  {
    title: "Residences, not rooms",
    body: "Full kitchens, living space, and balconies so your stay feels like home.",
  },
  {
    title: "Hotel-level care",
    body: "Concierge-style service with the privacy and calm of a luxury residence.",
  },
] as const;

const suiteImages = [
  "/images/residences/studio/studio-apartment-1-1600.jpg",
  "/images/residences/studio/studio-apartment-2-1600.jpg",
  "/images/residences/studio/studio-apartment-3-1600.jpg",
];

export const suites: Suite[] = [
  {
    title: "Studio Apartment",
    sleeps: "Sleeps 2",
    copy: "Streamlined studio with full kitchen, seating area, and private balcony or terrace-perfect for solo stays or couples.",
    highlights: ["Full kitchen", "Balcony/terrace", "Open layout"],
    gallery: suiteImages,
  },
  {
    title: "One Bedroom Apartment",
    sleeps: "Sleeps 2-4",
    copy: "Full kitchen, living with sofa bed, balcony/terrace, and a serene bedroom for couples or small families.",
    highlights: ["Full kitchen", "Balcony/terrace", "Sofa bed"],
    gallery: suiteImages,
  },
  {
    title: "One Bedroom Suite",
    sleeps: "Sleeps 2-4",
    copy: "Expanded living area, elevated finishes, fully equipped kitchen, and private balcony for an elevated stay.",
    highlights: ["Expanded living", "Upgraded finishes", "Private balcony"],
    gallery: suiteImages,
  },
  {
    title: "Two Bedroom Apartment",
    sleeps: "Sleeps 4-6",
    copy: "Two bedrooms, two baths, dining area, full kitchen, and terrace-ideal for families or groups.",
    highlights: ["Two bathrooms", "Dining area", "Balcony/terrace"],
    gallery: suiteImages,
  },
  {
    title: "Three Bedroom Apartment",
    sleeps: "Sleeps 6-8",
    copy: "Generous living and dining spaces, multiple baths, full kitchen, and balcony for larger gatherings.",
    highlights: ["Multiple baths", "Generous dining", "Balcony/terrace"],
    gallery: suiteImages,
  },
  {
    title: "Three Bedroom Penthouse",
    sleeps: "Sleeps 6-8",
    copy: "Top-floor views, expansive open layout, upgraded finishes, and a private terrace for elevated privacy.",
    highlights: ["Top-floor views", "Open layout", "Private terrace"],
    gallery: suiteImages,
  },
];

export const amenities: Amenity[] = [
  {
    title: "On-Site Restaurant",
    body: "Fresh meals and drinks all day, steps from your apartment.",
    tag: "Casual dining · Walk-in friendly",
    image: "/images/amenities/restaurant.jpg",
  },
  {
    title: "Specialty Coffee Shop",
    body: "Espresso, pastries, and grab-and-go before the beach.",
    tag: "Morning favorites · To-go options",
    image: "/images/amenities/coffee.jpg",
  },
  {
    title: "Car Rental Office",
    body: "Pick up a rental on-property and explore Aruba freely.",
    tag: "On-property pickup · Explore Aruba",
    image: "/images/amenities/car-rental.jpg",
  },
  {
    title: "Pool & Jacuzzi",
    body: "Sun deck loungers and a jacuzzi for post-beach unwind.",
    tag: "Sun deck · Relax & recharge",
    image: "/images/amenities/pool.jpg",
  },
];
