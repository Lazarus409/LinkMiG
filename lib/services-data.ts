import {
  Briefcase,
  FileText,
  GraduationCap,
  Plane,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type ServiceFact = { label: string; value: string; note?: string };

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  overview: string;
  process: string[];
  benefits: string[];
  pricing: { summary: string; highlight: string; detail: string };
  timeline: ServiceFact[];
};

export const servicesData: Service[] = [
  {
    slug: "travel-visa",
    name: "Travel & Visa Consultations",
    tagline: "Expert visa guidance and travel documentation support.",
    icon: FileText,
    image: "/bg.png",
    overview:
      "Our visa consultation services are designed to simplify the complex process of obtaining travel documents. With in-depth knowledge of immigration requirements across multiple countries, we ensure your application is complete, accurate, and submitted on time.",
    process: [
      "Initial consultation to assess your travel needs and visa requirements",
      "Comprehensive document checklist and guidance on required paperwork",
      "Professional review and verification of all application materials",
      "Embassy/consulate appointment scheduling and preparation",
      "Application submission and tracking",
      "Post-approval support and travel preparation guidance",
    ],
    benefits: [
      "High success rate with visa approvals",
      "Save time and avoid common application mistakes",
      "Expert guidance tailored to your destination",
      "End-to-end support from consultation to travel",
    ],
    pricing: {
      summary: "Consultation from",
      highlight: "$150",
      detail:
        "Service packages are available based on visa complexity and destination country.",
    },
    timeline: [
      {
        label: "Visa processing",
        value: "7 – 30 business days",
        note: "Varies by country and embassy",
      },
    ],
  },
  {
    slug: "study-abroad",
    name: "Study Abroad",
    tagline: "Admissions, visas, and scholarships made easy.",
    icon: GraduationCap,
    image: "/bg2.png",
    overview:
      "Pursuing education abroad is a life-changing decision. Our study abroad consultants provide end-to-end support to help you navigate university applications, secure admissions, obtain student visas, and prepare for your academic journey in a new country.",
    process: [
      "Career counseling and academic goal assessment",
      "University and program matching based on your profile",
      "Application preparation including essays, recommendations, and transcripts",
      "Scholarship and financial aid research and application",
      "Admission offer evaluation and university selection",
      "Student visa application and documentation",
      "Pre-departure briefing covering accommodation, culture, and academics",
    ],
    benefits: [
      "Access to 500+ partner universities worldwide",
      "Expert guidance from certified education consultants",
      "Scholarship assistance worth up to $50,000",
      "Visa success rate of 98%",
      "Post-arrival support and student community network",
      "Career counseling and internship opportunities",
    ],
    pricing: {
      summary: "Packages from",
      highlight: "$500",
      detail:
        "Free initial consultation. Pricing depends on destination and number of applications.",
    },
    timeline: [
      { label: "Application cycle", value: "3 – 6 months" },
      { label: "Visa processing", value: "2 – 8 weeks" },
    ],
  },
  {
    slug: "work-live-abroad",
    name: "Work & Live Abroad",
    tagline: "Global job placement and relocation assistance.",
    icon: Briefcase,
    image: "/bg4.png",
    overview:
      "Working abroad opens doors to global career opportunities and personal growth. We specialize in helping professionals secure work permits, navigate immigration requirements, and successfully relocate to their desired destination with minimal stress.",
    process: [
      "Skills assessment and career profile evaluation",
      "Job market research and opportunity identification",
      "CV/resume optimization for international standards",
      "Employer sponsorship and work permit application",
      "Visa documentation and submission",
      "Relocation logistics including housing, banking, and healthcare",
      "Cultural orientation and integration support",
    ],
    benefits: [
      "Access to exclusive job opportunities in 30+ countries",
      "Work permit success rate of 95%",
      "Employer network across multiple industries",
      "Comprehensive relocation package assistance",
      "Family visa support for dependents",
      "Post-arrival settlement services",
    ],
    pricing: {
      summary: "Packages from",
      highlight: "$800",
      detail:
        "Custom quotes available depending on destination country and visa category.",
    },
    timeline: [
      { label: "Job search", value: "1 – 6 months" },
      {
        label: "Work permit processing",
        value: "4 – 12 weeks",
        note: "Depending on the country",
      },
    ],
  },
  {
    slug: "football-agency",
    name: "Football Agency",
    tagline: "Professional trials, contracts, and career management.",
    icon: Trophy,
    image: "/bg3.png",
    overview:
      "Our football agency division specializes in identifying, developing, and placing talented players with professional clubs around the world. We handle all aspects of career management, from trial arrangements to contract negotiations and athlete visa processing.",
    process: [
      "Player assessment and skill evaluation",
      "Professional highlight reel creation",
      "Club scouting and opportunity matching",
      "Trial arrangement and logistics",
      "Contract negotiation and legal review",
      "Athlete visa and work permit processing",
      "Ongoing career management and development",
    ],
    benefits: [
      "Network of 200+ professional clubs across Europe, Asia, and Americas",
      "Licensed FIFA intermediary agents",
      "Contract negotiation expertise ensuring fair terms",
      "Athlete visa success rate of 99%",
      "Career development and training programs",
      "Endorsement and sponsorship opportunities",
      "Financial planning and investment advice",
    ],
    pricing: {
      summary: "Commission",
      highlight: "5–10%",
      detail: "No upfront fees. Commission is a share of the contract value.",
    },
    timeline: [
      { label: "Trial to contract", value: "2 – 8 weeks" },
      { label: "Visa processing", value: "3 – 6 weeks" },
    ],
  },
  {
    slug: "flight-hotel",
    name: "Flight & Hotel Booking",
    tagline: "Affordable flights, hotels, and travel packages.",
    icon: Plane,
    image: "/labadiBeach.png",
    overview:
      "Experience hassle-free travel with our comprehensive booking services. We offer competitive rates on flights and accommodations worldwide, with access to exclusive deals and packages that you won’t find on standard booking platforms.",
    process: [
      "Travel requirements consultation (dates, destinations, preferences)",
      "Customized search for best flight and hotel options",
      "Price comparison across multiple airlines and hotels",
      "Booking confirmation and documentation",
      "Travel insurance and add-on services",
      "24/7 support for changes or emergencies",
    ],
    benefits: [
      "Access to unpublished fares and exclusive hotel rates",
      "Price match guarantee",
      "Flexible booking and cancellation policies",
      "Loyalty program enrollment and points optimization",
      "Group booking discounts (10+ travelers)",
      "Complimentary travel itinerary planning",
      "Priority customer service and emergency support",
    ],
    pricing: {
      summary: "Booking fees",
      highlight: "$0",
      detail:
        "No booking fees for most reservations. Service charges apply for complex itineraries (from $25).",
    },
    timeline: [
      {
        label: "Confirmation",
        value: "Instant",
        note: "For most flights and hotels",
      },
    ],
  },
];

export function getService(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
