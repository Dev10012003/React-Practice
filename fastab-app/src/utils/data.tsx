interface Restaurant {
  value: string;
  label: string;
  locations: Location[];
}

interface Location {
  value: string;
  label: string;
}

export const restaurants: Restaurant[] = [
  {
    value: "All",
    label: "All",
    locations: [{ value: "All Locations", label: "All Locations" } as Location],
  },
  {
    value: "Tray",
    label: "Tray",
    locations: [
      { value: "Location A", label: "Location A" } as Location,
      { value: "Location B", label: "Location B" } as Location,
    ],
  },
  {
    value: "Prairie Bistro",
    label: "Prairie Bistro",
    locations: [
      { value: "Location C", label: "Location C" } as Location,
      { value: "Location D", label: "Location D" } as Location,
    ],
  },
  {
    value: "Omnivore Restaurant",
    label: "Omnivore Restaurant",
    locations: [
      { value: "Location E", label: "Location E" } as Location,
      { value: "Location F", label: "Location F" } as Location,
    ],
  },
  {
    value: "NCR POS System",
    label: "NCR POS System",
    locations: [
      { value: "Location G", label: "Location G" } as Location,
      { value: "Location H", label: "Location H" } as Location,
    ],
  },
  {
    value: "FasTab Squirrel Restaurant",
    label: "FasTab Squirrel Restaurant",
    locations: [
      { value: "Location I", label: "Location I" } as Location,
      { value: "Location J", label: "Location J" } as Location,
    ],
  },
];

// Now you can use the `restaurants` array without TypeScript errors
