export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  updated: string;
  readMins: number;
  answer: string;
  sections: { h: string; p?: string[]; list?: string[] }[];
  related: { label: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: "how-to-choose-a-walkie-talkie-for-business",
    title: "How to Choose a Walkie-Talkie for Your Business",
    description:
      "A practical checklist for choosing business walkie-talkies in India: users, site, band and licensing, battery, ruggedness and accessories.",
    category: "Buying guide",
    date: "2026-11-12",
    updated: "2026-11-12",
    readMins: 6,
    answer:
      "Pick a business walkie-talkie by matching it to your team and site: how many users, how large and obstructed the site is, how long shifts last, how harsh the conditions are, and whether the frequency band needs a licence. Then check battery capacity, IP rating, audio accessories and after-sales support.",
    sections: [
      {
        h: "1. Count your users and groups",
        p: [
          "List every person who needs a radio and group them by role: security, housekeeping, maintenance, supervisors. Each group usually gets its own channel. A radio with 16 channels, like the Axiontel R-26, gives room for separate teams plus spare channels.",
        ],
      },
      {
        h: "2. Understand your site",
        p: [
          "Range is set by your environment more than by the radio. Note the site area, number of floors, basements, steel structures and outdoor zones. UHF radios such as the R-26 generally handle buildings and urban sites better than VHF.",
        ],
      },
      {
        h: "3. Check the band and licensing",
        p: [
          "In India, radios operating strictly within 446.0–446.2 MHz are exempt from an operating licence, but must carry Equipment Type Approval (ETA). Ask every supplier for the exact frequency and ETA number. The Axiontel R-26 operates in 446.0–446.2 MHz with ETA-SD-20260605298.",
        ],
      },
      {
        h: "4. Match battery to your shifts",
        list: [
          "Single 8–10 hour shift: one battery per radio is usually enough.",
          "24×7 operations: plan spare batteries and a charging rota.",
          "The R-26's 4200 mAh battery is designed for a full shift (up to about 20 hours, depending on use).",
        ],
      },
      {
        h: "5. Choose the right ruggedness",
        p: [
          "Outdoor patrols, construction sites and events need protection from rain and dust. An IP68 rating means the radio is dust-tight and protected against continuous immersion under the manufacturer's test conditions.",
        ],
      },
      {
        h: "6. Plan accessories and support",
        list: [
          "Earpieces for discreet or noisy environments.",
          "Desktop chargers at a central charging point.",
          "Belt clips and hand straps for hands-free movement.",
          "Local after-sales support and spares availability.",
        ],
      },
    ],
    related: [
      { label: "Axiontel R-26 specifications", href: "/products/r-26/" },
      { label: "Talk to our team", href: "/contact/" },
    ],
  },
  {
    slug: "walkie-talkie-range-explained",
    title: "Walkie-Talkie Range: What Affects Real-World Coverage?",
    description:
      "Why advertised walkie-talkie range rarely matches reality, and the factors that decide coverage on your site: terrain, buildings, height, power and antennas.",
    category: "Explainer",
    date: "2026-11-12",
    updated: "2026-11-12",
    readMins: 5,
    answer:
      "Walkie-talkie range depends mainly on the environment: line of sight, buildings, walls and metal structures, the height of the users, antenna condition, transmit power and interference. The same radio can cover far more in an open field than inside a concrete building, so range should be tested on your site rather than taken from a box.",
    sections: [
      {
        h: "Line of sight matters most",
        p: [
          "Radio waves at UHF frequencies travel best in a straight line. Hills, buildings and even dense trees absorb or reflect the signal. Raising the radio, for example from a rooftop or upper floor, often improves coverage more than any other change.",
        ],
      },
      {
        h: "Buildings and materials",
        list: [
          "Reinforced concrete and lift cores block signals heavily.",
          "Basements and car parks are the hardest areas to cover.",
          "Metal racking in warehouses reflects signals and creates dead spots.",
          "Glass facades with metallic coatings can reduce indoor coverage.",
        ],
      },
      {
        h: "Power, antenna and battery",
        p: [
          "Transmit power, antenna condition and battery charge all affect performance. The Axiontel R-26 transmits at 0.5 W, appropriate for its licence-exempt 446 MHz band. A damaged antenna or a nearly empty battery can noticeably shorten range.",
        ],
      },
      {
        h: "How to check coverage on your site",
        p: [
          "Walk the site with two radios: one at your control point, one moving to the furthest and most obstructed areas such as basements, stairwells and back corners. Note where audio breaks up. Our team can help you plan channels and placement for your site.",
        ],
      },
    ],
    related: [
      { label: "Industry solutions", href: "/solutions/" },
      { label: "Request a site recommendation", href: "/contact/" },
    ],
  },
  {
    slug: "vhf-vs-uhf-two-way-radios",
    title: "VHF vs UHF Two-Way Radios: Key Differences",
    description:
      "VHF vs UHF explained for business buyers: frequency, building penetration, outdoor range and which band suits hotels, sites, warehouses and events.",
    category: "Comparison",
    date: "2026-11-12",
    updated: "2026-11-12",
    readMins: 4,
    answer:
      "VHF radios (about 136–174 MHz) suit open outdoor areas with few obstructions. UHF radios (about 400–520 MHz) handle buildings, concrete and urban environments better, which is why most hotels, malls, factories and construction sites use UHF. The Axiontel R-26 is a UHF radio in the 446.0–446.2 MHz band.",
    sections: [
      {
        h: "At a glance",
        list: [
          "VHF: longer wavelength, good over open land, farms and water.",
          "UHF: shorter wavelength, better through walls, floors and around buildings.",
          "Radios on different bands cannot talk to each other.",
          "Licensing in India depends on the exact frequency, not just VHF or UHF.",
        ],
      },
      {
        h: "Which should a business choose?",
        p: [
          "If your team works mostly indoors or across mixed indoor and outdoor areas (hotels, hospitals, malls, factories, warehouses, construction sites), UHF is usually the better fit. VHF is more common for open outdoor operations over large distances.",
        ],
      },
      {
        h: "Where the Axiontel R-26 fits",
        p: [
          "The R-26 operates at 446.0–446.2 MHz, a UHF band that is exempt from an operating licence in India for compliant, ETA-approved equipment. That makes it a straightforward choice for teams that want to deploy radios quickly without applying for a frequency licence.",
        ],
      },
    ],
    related: [
      { label: "Axiontel R-26", href: "/products/r-26/" },
      { label: "Licensing and ETA in India", href: "/resources/walkie-talkie-licensing-eta-india/" },
    ],
  },
  {
    slug: "walkie-talkie-licensing-eta-india",
    title: "Walkie-Talkie Licensing and ETA in India: Buyer Guide",
    description:
      "What Indian buyers should check before buying walkie-talkies: the 446.0–446.2 MHz exemption, Equipment Type Approval (ETA) and when a WPC licence is needed.",
    category: "Compliance",
    date: "2026-11-12",
    updated: "2026-11-12",
    readMins: 5,
    answer:
      "In India, walkie-talkies operating strictly within 446.0–446.2 MHz are exempt from an operating licence, but they must have Equipment Type Approval (ETA) before they can be imported or sold. Radios on other frequencies may need a WPC licence. Always ask for the exact frequency and ETA number before you buy.",
    sections: [
      {
        h: "The 446 MHz exemption",
        p: [
          "A January 2026 Government of India release clarified that only walkie-talkies operating strictly within 446.0–446.2 MHz are exempt from licensing under the relevant rules, and that even these require ETA before import or sale.",
        ],
      },
      {
        h: "What is ETA?",
        p: [
          "Equipment Type Approval is issued by the Wireless Planning & Coordination (WPC) wing of the Department of Telecommunications. It confirms a device meets the technical conditions for its band. A genuine ETA has a certificate number you can quote and verify.",
        ],
      },
      {
        h: "Checklist before you buy",
        list: [
          "Exact operating frequency (not just 'UHF').",
          "Transmit power.",
          "ETA certificate number.",
          "Whether your intended use needs any additional authorisation.",
          "Seller's GST invoice and warranty terms.",
        ],
      },
      {
        h: "Axiontel R-26 compliance",
        p: [
          "The Axiontel R-26 operates in 446.0–446.2 MHz at 0.5 W and is ETA approved by WPC (certificate ETA-SD-20260605298). Customers should continue to follow applicable DoT / WPC requirements for their use.",
        ],
      },
      {
        h: "Official sources",
        list: [
          "Press Information Bureau: CCPA action on unauthorised sale of walkie-talkies (16 January 2026).",
          "Department of Telecommunications eServices: Short Range UHF Hand Held Radio.",
          "Department of Telecommunications: WPC overview.",
        ],
      },
    ],
    related: [
      { label: "Certifications", href: "/certifications/" },
      { label: "R-26 compliance details", href: "/products/r-26/#compliance" },
    ],
  },
  {
    slug: "walkie-talkie-battery-care",
    title: "Walkie-Talkie Battery Care and Maintenance",
    description:
      "Simple habits that extend walkie-talkie battery life: charging routines, storage, spare packs and cleaning contacts. Written for business radio fleets.",
    category: "Support",
    date: "2026-11-12",
    updated: "2026-11-12",
    readMins: 4,
    answer:
      "To get the most from a walkie-talkie battery, charge it with the supplied charger, avoid running it completely flat every day, keep the contacts clean and dry, and store spare packs partly charged in a cool place. For 24×7 teams, rotate spare batteries so no single pack is overworked.",
    sections: [
      {
        h: "Daily charging routine",
        list: [
          "Charge at the end of each shift on the desktop charger.",
          "Remove the radio once fully charged if it will sit for days.",
          "Avoid charging in direct sun or very hot vehicles.",
        ],
      },
      {
        h: "Storage and spares",
        p: [
          "Li-ion batteries such as the R-26's 4200 mAh pack age fastest when stored fully charged or fully empty in heat. Store spares at a partial charge, in a cool dry place, and rotate them into use regularly.",
        ],
      },
      {
        h: "Keep contacts clean",
        p: [
          "Dust and moisture on battery contacts cause intermittent power and charging faults. Wipe contacts gently with a dry cloth and make sure the battery clicks firmly into place.",
        ],
      },
      {
        h: "When to replace a battery",
        p: [
          "If a battery no longer lasts a shift after a full charge, swells, or gets unusually warm, stop using it and contact Axiontel support for a replacement.",
        ],
      },
    ],
    related: [
      { label: "R-26 accessories", href: "/walkie-talkie-accessories/" },
      { label: "Support", href: "/support/" },
    ],
  },
  {
    slug: "walkie-talkie-accessories-explained",
    title: "Walkie-Talkie Accessories Explained",
    description:
      "Chargers, batteries, antennas, belt clips and earpieces: what each walkie-talkie accessory does and which teams benefit most.",
    category: "Product guide",
    date: "2026-11-12",
    updated: "2026-11-12",
    readMins: 3,
    answer:
      "The essential walkie-talkie accessories are a charger, a spare battery, a good antenna and a belt clip. Earpieces are the most useful add-on for security, hospitality and events teams who need discreet or clearer audio in noisy places.",
    sections: [
      {
        h: "Included with the Axiontel R-26",
        list: [
          "Desktop charger",
          "4200 mAh Li-ion battery",
          "USB-C charging cable",
          "Antenna",
          "Hand strap & belt clip",
        ],
      },
      {
        h: "Optional: earpiece",
        p: [
          "An earpiece keeps radio traffic private around guests and the public and makes it easier to hear in loud environments. It's popular with security, hotel and event teams.",
        ],
      },
      {
        h: "Planning accessories for a fleet",
        p: [
          "For larger teams, set up a central charging point with desktop chargers, keep about one spare battery for every few radios on 24×7 duty, and match audio accessories to each role.",
        ],
      },
    ],
    related: [
      { label: "Accessories", href: "/walkie-talkie-accessories/" },
      { label: "Request a quote", href: "/contact/" },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
