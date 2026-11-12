export const site = {
  name: "Axiontel",
  legalName: "Axiontel",
  url: "https://axiontel.co",
  tagline: "Reliable Two-Way Communication for Work That Can't Miss a Message.",
  description:
    "Axiontel designs rugged, ETA-approved two-way radios for Indian businesses. Explore the R-26 walkie-talkie, accessories and industry solutions, and request a quote.",
  email: "sales@axiontel.co",
  enquiryEmail: "inquiry@axiontel.co",
  phones: [
    { display: "+91 70391 53605", tel: "+917039153605" },
    { display: "+91 99670 41167", tel: "+919967041167" },
  ],
  whatsapp: "919967041167",
  instagram: "https://www.instagram.com/axiontel/",
  address: {
    line1: "Sangam Glass House",
    city: "Mumbai",
    region: "Maharashtra",
    country: "IN",
    countryName: "India",
  },
  geo: { lat: 19.14609123584932, lng: 72.8296756788713 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123028169984!2d72.8296756788713!3d19.14609123584932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b637cbdec6f9%3A0xbacd9621496bb3bd!2sSangam%20Glass%20House!5e0!3m2!1sen!2sin!4v1794495275448!5m2!1sen!2sin",
  mapLink: "https://maps.google.com/?q=Sangam+Glass+House,+Mumbai",
  etaNumber: "ETA-SD-20260605298",
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/walkie-talkies/",
    children: [
      { label: "All walkie-talkies", href: "/walkie-talkies/" },
      { label: "Handheld radios", href: "/walkie-talkies/handheld-radios/" },
      { label: "Axiontel R-26", href: "/products/r-26/" },
      { label: "Accessories", href: "/walkie-talkie-accessories/" },
    ],
  },
  { label: "Solutions", href: "/solutions/" },
  { label: "Resources", href: "/resources/" },
  { label: "About Us", href: "/about-axiontel/" },
  { label: "Support", href: "/support/" },
  { label: "Contact", href: "/contact/" },
];

export const whatsappLink = (text = "Hello Axiontel, I'd like to know more about your two-way radios.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
