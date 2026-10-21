export const models = [
  {
    id: "city",
    category: "01 / CITY",
    name: "The city explorer",
    description: "A fresh silhouette for coffee runs, city corners and a little everyday exploring.",
    image: "/images/city-photo.png",
    alt: "Sage electric scooter in a sunlit plaster studio",
    story: "A fresh perspective on the familiar streets. Explore a compact silhouette, a relaxed step-through design and a style that feels right at home in the city.",
    highlights: ["City-inspired styling", "Step-through silhouette", "Sage finish"],
  },
  {
    id: "commute",
    category: "02 / COMMUTE",
    name: "The daily companion",
    description: "Sculpted lines and a contemporary spirit for the journeys that make up your day.",
    image: "/images/commute-photo.png",
    alt: "Graphite electric scooter in a warm minimalist studio",
    story: "Make the journey part of your day. Discover a bold, sculpted silhouette with a contemporary feel, and get to know it in person at the showroom.",
    highlights: ["Sculpted bodywork", "Contemporary styling", "Graphite finish"],
  },
  {
    id: "comfort",
    category: "03 / COMFORT",
    name: "The easy-going ride",
    description: "Soft curves, classic details and a look that invites you to take your time.",
    image: "/images/comfort-photo.png",
    alt: "Cream electric scooter with chrome mirrors in a sunlit studio",
    story: "Slow down and take a closer look. Soft curves, a timeless palette and a familiar shape make this concept a natural choice to explore at the showroom.",
    highlights: ["Classic curved silhouette", "Retro-inspired details", "Cream finish"],
  },
] as const;

export type ScooterModel = (typeof models)[number];
export const heroFinishes = [
  { id: "graphite", name: "Graphite", color: "#4c5050", image: "/images/scooter-hero.png" },
  { id: "sage", name: "Sage", color: "#bac3a2", image: "/images/scooter-sage.png" },
  { id: "pearl", name: "Pearl", color: "#f0ecdf", image: "/images/scooter-pearl.png" },
] as const;

export const faqs = [
  { id: "choosing", question: "Which scooter is right for me?", answer: "Think about your daily distance, charging access, riding position and storage needs. Visit the showroom to compare models and find a comfortable fit." },
  { id: "charging", question: "How do I charge my scooter?", answer: "Charging requirements vary by model. The showroom team can explain the manufacturer's instructions and the charging arrangements for your chosen scooter." },
  { id: "warranty", question: "What warranty and service support is available?", answer: "Vehicle and battery coverage depends on the model and manufacturer. Ask the showroom for the applicable terms, exclusions and service schedule before choosing." },
  { id: "booking", question: "How do I book a test ride?", answer: "Choose Book a test ride to explore the next step. This preview has not yet been connected to a dealership booking contact, so no enquiry is submitted." },
] as const;

export const footerGroups = [
  { title: "Explore", links: [["Our scooters", "#range"], ["Why electric", "#benefits"], ["About VOLT", "#showroom"]] },
  { title: "Visit & connect", links: [["Find a showroom", "#showroom"], ["Book a test ride", "#book-test-ride"], ["Contact our team", "#book-test-ride"]] },
  { title: "Support", links: [["FAQs", "#faq"], ["Charging guide", "#charging"], ["Service & warranty", "#warranty"]] },
] as const;
