export const navItems = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/find-mentors", label: "Find", icon: "search" },
  { href: "/community", label: "Community", icon: "users" },
  { href: "/sessions", label: "Sessions", icon: "video" },
  { href: "/profile", label: "Profile", icon: "user" },
];

export const mentors = [
  {
    slug: "arjun-sharma",
    name: "Arjun Sharma",
    role: "Product Designer @ Google",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    rating: "4.9",
    price: "$45 / hr",
    availability: "Available Today",
    tags: ["Design Systems", "Scaling", "Portfolio"],
  },
  {
    slug: "michael-chen",
    name: "Michael Chen",
    role: "Staff Engineer @ Google",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    rating: "5.0",
    price: "$60 / hr",
    availability: "Available Now",
    tags: ["System Design", "Architecture"],
  },
  {
    slug: "anna-volkov",
    name: "Anna Volkov",
    role: "Visual Design @ Adobe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    rating: "4.8",
    price: "$55 / hr",
    availability: "Available Mon",
    tags: ["Figma", "Design Systems"],
  },
];

export const messages = [
  ["Arjun Sharma", "Hey Mikey, looking forward to our session tomorrow!", "10:30 AM", true],
  ["Priya Mehta", "Thanks for joining the session. Here are the resources.", "Yesterday", false],
  ["Rohit Verma", "Check out the document I shared with you.", "Yesterday", false],
  ["Neha Singh", "Great progress on your portfolio!", "2d ago", false],
];

export const sessions = [
  {
    day: "Today",
    name: "Arjun Sharma",
    topic: "Design Systems & Scaling",
    time: "Today, 4:00 PM",
    duration: "60 Minutes",
    status: "IN 2 HOURS",
  },
  {
    day: "Tomorrow",
    name: "Michael Chen",
    topic: "System Design Mock Interview",
    time: "Tomorrow, 6:30 PM",
    duration: "45 Minutes",
    status: "UPCOMING",
  },
];
