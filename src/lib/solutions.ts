export type Solution = {
  slug: string;
  name: string;
  short: string;
  image: string;
  title: string;
  description: string;
  problem: string;
  fit: string[];
  considerations: string[];
  accessories: string[];
  icon: "shield" | "hotel" | "hardhat" | "calendar" | "warehouse" | "store" | "factory";
};

export const solutions: Solution[] = [
  {
    slug: "security",
    name: "Security & Surveillance",
    short: "Instant push-to-talk for guards and patrol teams in all conditions.",
    image: "/images/industries/security.webp",
    icon: "shield",
    title: "Walkie-Talkies for Security Teams | Axiontel",
    description:
      "Two-way radio communication for security guards, patrol teams and facility operations. Explore the IP68 Axiontel R-26 and request a recommendation.",
    problem:
      "Security teams spread across gates, floors and perimeters need to raise an alert and get a response in seconds. Mobile calls are slow to connect, depend on network coverage and only reach one person at a time.",
    fit: [
      "One press of the PTT button reaches every guard on the channel at once.",
      "The voice scrambler helps keep routine and sensitive messages private.",
      "IP68 protection lets outdoor patrols keep working through monsoon rain and dust.",
      "Earpieces keep communication discreet in lobbies and public areas.",
    ],
    considerations: [
      "Number of guards and supervisors per shift",
      "Perimeter size and building obstructions (basements, concrete cores)",
      "Separate channels for gate, patrol and control room",
      "Spare batteries and a charging rota for 24×7 operation",
    ],
    accessories: ["Earpiece", "Spare 4200 mAh battery", "Desktop charger"],
  },
  {
    slug: "hospitality",
    name: "Hotels & Hospitality",
    short: "Coordinate housekeeping and maintenance teams for seamless guest service.",
    image: "/images/industries/hospitality.webp",
    icon: "hotel",
    title: "Two-Way Radios for Hotels & Resorts | Axiontel",
    description:
      "Keep front desk, housekeeping, engineering and F&B teams connected. Two-way radio communication options for hotels, resorts and venues.",
    problem:
      "Guest requests move between the front desk, housekeeping, maintenance and F&B. When teams rely on landlines or personal phones, requests get delayed and guests notice.",
    fit: [
      "Dedicated channels for housekeeping, engineering and front office.",
      "Earpieces keep radio traffic out of earshot of guests.",
      "A full-shift battery means fewer radios lost to charging.",
      "Compact 302 g body that is easy to carry all day.",
    ],
    considerations: [
      "Property layout: towers, basements, villas and outdoor areas",
      "Departments that need their own channel",
      "Discreet audio accessories for guest-facing staff",
      "Charging stations at the back office",
    ],
    accessories: ["Earpiece", "Hand strap & belt clip", "Desktop charger"],
  },
  {
    slug: "construction",
    name: "Construction & Site Management",
    short: "Coordinate supervisors, crane operators and safety officers to prevent accidents.",
    image: "/images/industries/construction.webp",
    icon: "hardhat",
    title: "Walkie-Talkies for Construction Sites | Axiontel",
    description:
      "Rugged two-way radios for construction and infrastructure sites. IP68 protection, long battery life and clear audio for site coordination.",
    problem:
      "On a busy site, a delayed instruction between a crane operator and a signaller is a safety risk. Noise, dust and rain make phones impractical and easy to damage.",
    fit: [
      "IP68 rating against dust, mud and water on open sites.",
      "Squelch control filters background noise for clearer audio.",
      "4200 mAh battery sized for long site shifts.",
      "Instant group calls for supervisors and safety officers.",
    ],
    considerations: [
      "Site area, floors under construction and steel/concrete obstructions",
      "Channels for lifting operations versus general coordination",
      "Number of contractor teams sharing the site",
      "Ruggedness and spare battery planning",
    ],
    accessories: ["Spare 4200 mAh battery", "Hand strap & belt clip", "Desktop charger"],
  },
  {
    slug: "events-production",
    name: "Events & Crowd Management",
    short: "Manage foot traffic and logistics with crisp audio even in loud venues.",
    image: "/images/industries/events.webp",
    icon: "calendar",
    title: "Two-Way Radios for Events & Production Crews | Axiontel",
    description:
      "Crew communication for concerts, exhibitions, weddings and productions. Find a two-way radio setup for temporary deployments.",
    problem:
      "Event crews are set up fast, spread across stages, gates and back-of-house, and work in very loud environments. Communication has to work from the first minute of load-in.",
    fit: [
      "Simple, ready-to-use 16-channel setup for stage, gate and logistics teams.",
      "VOX hands-free operation for crew who are carrying equipment.",
      "Earpieces for clear audio over crowd noise.",
      "Channel scan so supervisors can monitor several teams.",
    ],
    considerations: [
      "Number of crew and teams on the day",
      "Indoor arena versus open ground",
      "Charging plan for multi-day events",
      "Accessory kit per role (stage, security, hospitality)",
    ],
    accessories: ["Earpiece", "Spare 4200 mAh battery", "Desktop charger"],
  },
  {
    slug: "warehousing-logistics",
    name: "Logistics & Warehousing",
    short: "Real-time updates for dock controllers and floor teams to speed up loading.",
    image: "/images/industries/warehousing.webp",
    icon: "warehouse",
    title: "Walkie-Talkies for Warehouses & Logistics | Axiontel",
    description:
      "Two-way radio communication for warehouse floors, loading docks and logistics yards. Coordinate teams in real time with Axiontel.",
    problem:
      "Dock schedules change by the minute. Floor teams, forklift operators and dock controllers need to share updates instantly to keep loading on time.",
    fit: [
      "Group calls reach every picker and loader at once.",
      "Rugged build for racking aisles and loading bays.",
      "Long battery life across warehouse shifts.",
      "Separate channels for inbound, outbound and inventory.",
    ],
    considerations: [
      "Warehouse size and metal racking density",
      "Yard and dock areas outside the main building",
      "Number of shifts and radios shared between them",
      "Belt clips for hands-free movement",
    ],
    accessories: ["Hand strap & belt clip", "Spare 4200 mAh battery", "Desktop charger"],
  },
  {
    slug: "industrial-operations",
    name: "Industrial Operations",
    short: "Reliable communication across factory floors, plants and large industrial sites.",
    image: "/images/industries/industrial.webp",
    icon: "factory",
    title: "Two-Way Radios for Factories & Plants | Axiontel",
    description:
      "Two-way radio communication for factory floors, plants and industrial sites. Rugged, IP68 radios with clear audio in noisy environments.",
    problem:
      "Production lines, maintenance crews and shift supervisors need to react quickly to stoppages and safety issues, often in noisy halls where phones are impractical.",
    fit: [
      "Squelch and clear audio output for noisy plant environments.",
      "IP68 protection against dust, oil mist and washdowns.",
      "Dedicated maintenance and production channels.",
      "Wide −20 °C to +60 °C operating range.",
    ],
    considerations: [
      "Plant layout and heavy machinery obstructions",
      "Noise levels and need for earpieces",
      "Shift handover and charging routine",
      "Any site-specific safety rules for electronic devices",
    ],
    accessories: ["Earpiece", "Spare 4200 mAh battery", "Desktop charger"],
  },
  {
    slug: "retail-campuses",
    name: "Retail, Malls & Campuses",
    short: "Staff coordination and quick operational response across large premises.",
    image: "/images/industries/security-guard-radio.webp",
    icon: "store",
    title: "Two-Way Radios for Malls, Retail & Campuses | Axiontel",
    description:
      "Coordinate store staff, facility teams and security across malls, retail outlets, schools and large campuses with Axiontel two-way radios.",
    problem:
      "Large premises such as malls, schools and campuses depend on quick coordination between facility, housekeeping and security staff to respond to visitors and incidents.",
    fit: [
      "Instant one-to-many communication across departments.",
      "Discreet earpieces for customer-facing staff.",
      "Simple operation that new staff learn in minutes.",
      "Full-shift battery for long opening hours.",
    ],
    considerations: [
      "Number of floors, buildings and outdoor areas",
      "Departments and channels needed",
      "Visitor-facing staff who need discreet audio",
      "Central charging and issue/return process",
    ],
    accessories: ["Earpiece", "Hand strap & belt clip", "Desktop charger"],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
