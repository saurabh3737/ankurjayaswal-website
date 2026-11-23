export const site = {
  name: "Ankur Jayaswal",
  title: "Ankur Jayaswal — Program & Delivery Leader",
  description:
    "Senior program and delivery leader with 25 years in IT consulting and transformation across capital markets, banking and insurance. Based in Dublin, Ireland.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankurjayaswal.com",
  email: "ankur.dublin@gmail.com",
  linkedin: "https://www.linkedin.com/in/ankurjayaswal/",
  linkedinRecommendations: "https://www.linkedin.com/in/ankurjayaswal/details/recommendations/",
  location: "Dublin, Ireland",
  headshot: "/ankur-headshot.jpg",
  resume: "/Ankur_Jayaswal_Resume.pdf",
  /** Shows the "Open to roles" badge on the home page. Set to false to hide it. */
  openToWork: true,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/impact", label: "Impact" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
