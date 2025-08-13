export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}
 
export const HERO_CONFIGS = {
  HOME: {
    title: "Economic Development Through Strategic Investments",
    subtitle: "Transparency. Accountability. Prosperity.",
    description: "The Ministry of Finance and Economic Development manages financial resources with transparency, integrity, and efficiency to promote sustainable development and improve service delivery in Imo State.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Our Departments & Agencies",
    description: "Welcome to our Departments & Agencies Hub, where you can explore key government initiatives aimed at driving economic prosperity, enhancing infrastructure, and improving livelihoods across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Our Projects & Programs",
    description: "Welcome to our Projects Hub, where you can explore key government initiatives aimed at driving economic prosperity, enhancing infrastructure, and improving livelihoods across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet the dedicated professionals driving Imo State's financial and economic development initiatives, including Hon. Commissioner Chuk Chukwuemeka and the directors of key departments.",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Services",
    description: "The Ministry of Finance and Economic Development offers a comprehensive range of financial and economic services to support sustainable development, fiscal responsibility, and inclusive economic growth in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "Newsroom / Press Releases / Announcements",
    description: "Stay informed with the latest updates, programs, and events from the Ministry of Finance and Economic Development.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Media Gallery & Success Stories",
    description: "Explore our visual journey of financial management, economic development initiatives, and success stories from beneficiaries across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Upcoming Events & Programs",
    description: "Join us for financial literacy sessions, economic development forums, and community engagements across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Finance and Economic Development",
    description: "At the heart of Imo State's economic development is sound financial management. Our ministry is committed to managing financial resources with transparency, integrity, and efficiency to promote sustainable development and improve service delivery.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
