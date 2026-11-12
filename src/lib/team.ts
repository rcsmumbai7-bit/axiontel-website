export type Member = {
  name: string;
  role: string;
  group: "leadership" | "sales";
  photo?: string;
  bio: string;
};

export const team: Member[] = [
  {
    name: "Akhilesh Chaudhary",
    role: "Founder",
    group: "leadership",
    photo: "/images/team/akhilesh-chaudhary.webp",
    bio: "Akhilesh founded Axiontel to give Indian businesses two-way radios they can rely on, backed by clear specifications, approved compliance and responsive local support.",
  },
  {
    name: "Abdhesh Chaudhary",
    role: "Chief Technology Officer",
    group: "leadership",
    bio: "Abdhesh leads product engineering and quality at Axiontel, from radio specifications and testing to compliance and after-sales technical support.",
  },
  {
    name: "Sintu Chaudhary",
    role: "Sales",
    group: "sales",
    bio: "Helps security, hospitality and industrial teams choose the right radios and accessories for their sites.",
  },
  {
    name: "Preeti Pal",
    role: "Sales",
    group: "sales",
    bio: "Works with businesses and channel partners on quotations, bulk orders and delivery.",
  },
];
