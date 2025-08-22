export interface NavLink {
  href: string;
  label: string;
} 

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/department",
    label: "Department"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const CONTACT_INFO = {
  address: "Block 4, Imo State Secretariat, Port Harcourt Road, Owerri, Imo State",
  email: "info@finance.im.gov",
  phone: "083-230940",
  hours: "Monday to Friday, 8:00 AM – 4:00 PM"
};
