import {
  AccountBalanceOutlined,
  ArticleOutlined,
  Groups2Outlined,
  Home,
  LocalOfferOutlined,
  LocationCity,
  PaidOutlined,
  PaymentsOutlined,
  PeopleOutline,
  QrCodeScanner,
  ReceiptLongOutlined,
  RestaurantMenu,
  ReviewsOutlined,
  SettingsOutlined,
  Storefront,
} from "@mui/icons-material";

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

interface MenuItem {
  primaryText: string;
  icon: JSX.Element;
  link: string;
}
export const menuItems: MenuItem[] = [
  { primaryText: "Dashboard", icon: <Home sx={{ fontSize: 30 }} />, link: "/" },
  {
    primaryText: "Restaurants",
    icon: <Storefront sx={{ fontSize: 30 }} />,
    link: "/restaurants",
  },
  {
    primaryText: "Locations",
    icon: <LocationCity sx={{ fontSize: 30 }} />,
    link: "/locations",
  },
  {
    primaryText: "Menu",
    icon: <RestaurantMenu sx={{ fontSize: 30 }} />,
    link: "/menu",
  },
  {
    primaryText: "QR Codes",
    icon: <QrCodeScanner sx={{ fontSize: 30 }} />,
    link: "/qr-codes",
  },
  {
    primaryText: "Users",
    icon: <PeopleOutline sx={{ fontSize: 30 }} />,
    link: "/users",
  },
  {
    primaryText: "Pomo Codes",
    icon: <LocalOfferOutlined sx={{ fontSize: 30 }} />,
    link: "/pomo-codes",
  },
  {
    primaryText: "Tabs",
    icon: <ReceiptLongOutlined sx={{ fontSize: 30 }} />,
    link: "/tabs",
  },
  {
    primaryText: "Reviews",
    icon: <ReviewsOutlined sx={{ fontSize: 30 }} />,
    link: "/reviews",
  },
  {
    primaryText: "Payments",
    icon: <AccountBalanceOutlined sx={{ fontSize: 30 }} />,
    link: "/payments",
  },
  {
    primaryText: "Disbursements",
    icon: <PaidOutlined sx={{ fontSize: 30 }} />,
    link: "/disbursements",
  },
  {
    primaryText: "Payouts",
    icon: <PaymentsOutlined sx={{ fontSize: 30 }} />,
    link: "/payouts",
  },
  {
    primaryText: "Statements",
    icon: <ArticleOutlined sx={{ fontSize: 30 }} />,
    link: "/statements",
  },
  {
    primaryText: "Guests",
    icon: <Groups2Outlined sx={{ fontSize: 30 }} />,
    link: "/guests",
  },
];
