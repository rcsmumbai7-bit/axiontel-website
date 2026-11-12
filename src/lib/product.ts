export type SpecRow = [string, string];

export const r26 = {
  slug: "r-26",
  name: "Axiontel R-26",
  model: "R-26",
  category: "Handheld two-way radio",
  tagline: "Engineered to excel.",
  summary:
    "The Axiontel R-26 is a rugged handheld walkie-talkie for professional teams. It runs in the 446.0–446.2 MHz band, carries an IP68 rating against water and dust, and a 4200 mAh battery built to last a full shift.",
  image: "/images/product/r-26-front.png",
  highlights: [
    { title: "IP68 waterproof & dustproof", text: "Fully submersible protection, rated for heavy rain, dust and mud." },
    { title: "4200 mAh battery", text: "Built to power through a full shift, with up to 20 hours depending on usage." },
    { title: "Voice scrambler", text: "Built-in scrambling keeps conversations private on every channel." },
    { title: "16 channels", text: "Configure channels to match how your team is organised." },
    { title: "VOX hands-free", text: "Voice-activated transmission keeps hands free while staying in contact." },
    { title: "TOT & squelch", text: "Time-out timer prevents channel blocking; squelch filters background noise." },
    { title: "Channel scan", text: "Automatically scans active channels so a transmission is never missed." },
    { title: "ETA approved by WPC", text: "Equipment Type Approval certificate ETA-SD-20260605298." },
  ],
  general: [
    ["Frequency range", "446.0 – 446.2 MHz"],
    ["Channel capacity", "16"],
    ["Channel spacing", "W 25 kHz / N 12.5 kHz"],
    ["Operating voltage", "DC 7.4 V"],
    ["Battery type", "Li-ion"],
    ["Battery capacity", "4200 mAh"],
    ["Operating temperature", "−20 °C to +60 °C"],
    ["Frequency stability", "±2.5 ppm"],
    ["Antenna impedance", "50 Ω"],
    ["Standby current", "≤ 20 mA"],
    ["Dimensions (H×W×D, without antenna)", "140 × 55 × 43 mm"],
    ["Weight (with antenna & battery)", "302 g"],
  ] as SpecRow[],
  transmitter: [
    ["Carrier frequency tolerance", "±2.5 ppm"],
    ["Carrier output power", "0.5 W"],
    ["Modulation limit", "W ≤ 5 kHz, N ≤ 2.5 kHz"],
    ["Audio distortion", "≤ 5%"],
    ["TX audio response", "+1 ~ −3 dB (0.3–3 kHz) / per 6 dB octave"],
    ["Adjacent channel power", "≥ 70 dB"],
    ["Spurious RF component", "≤ −36 dBm"],
  ] as SpecRow[],
  receiver: [
    ["Receiving sensitivity", "≤ 0.25 µV"],
    ["Audio output power", "0.7 W"],
    ["Audio distortion", "≤ 5%"],
    ["RX audio response", "+1 ~ −3 dB (0.3–3 kHz)"],
    ["Adjacent channel selectivity", "≥ 70 dB"],
  ] as SpecRow[],
  compliance: [
    ["Operating band", "446.0 – 446.2 MHz (PMR 446)"],
    ["Transmit power", "0.5 W"],
    ["ETA certificate", "ETA-SD-20260605298 (approved by WPC)"],
    ["Operating licence", "Under current DoT rules, radios operating strictly within 446.0–446.2 MHz are exempt from an operating licence."],
  ] as SpecRow[],
};

export const accessories = [
  { slug: "desktop-charger", name: "Desktop charger", image: "/images/accessories/desktop-charger.webp", inBox: true, text: "Drop-in charging cradle that keeps the R-26 topped up between shifts." },
  { slug: "battery", name: "4200 mAh Li-ion battery", image: "/images/accessories/battery.webp", inBox: true, text: "High-capacity 7.4 V Li-ion pack. Spare packs keep shift-change downtime to zero." },
  { slug: "usb-c-charger", name: "USB-C charging cable", image: "/images/accessories/usb-c-charger.webp", inBox: true, text: "Charge from a USB-C power source in vehicles, offices or on the go." },
  { slug: "antenna", name: "Antenna", image: "/images/accessories/antenna.webp", inBox: true, text: "Flexible 50 Ω antenna matched to the R-26 for clear transmission." },
  { slug: "hand-strap-belt-clip", name: "Hand strap & belt clip", image: "/images/accessories/hand-strap-belt-clip.webp", inBox: true, text: "Secure carry on a belt or wrist, so the radio is always within reach." },
  { slug: "earpiece", name: "Earpiece (optional)", image: "/images/accessories/earpiece.webp", inBox: false, text: "Discreet earpiece with in-line PTT for security, hospitality and events." },
];
