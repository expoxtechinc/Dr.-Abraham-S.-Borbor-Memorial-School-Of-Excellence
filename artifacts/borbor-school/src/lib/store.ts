import logo from "@assets/1777345079376_1777347760931.jpg";
import imgGrad1 from "@assets/1777345265762_1777347761002.jpg";
import imgGrad2 from "@assets/1777345290657_1777347761062.jpg";
import imgGrad3 from "@assets/1777345276905_1777347761092.jpg";
import imgGrad4 from "@assets/1777345307761_1777347760972.jpg";
import imgStudent from "@assets/1777345286682_1777347761015.jpg";
import imgPodium from "@assets/1777345299039_1777347761078.jpg";
import imgClass1 from "@assets/1777345315916_1777347760950.jpg";
import imgClass2 from "@assets/1777345320267_1777347761048.jpg";
import imgAssembly from "@assets/1777345369823_1777347761033.jpg";
import imgFounder from "@assets/1777345156902_1777347760883.jpg";
import imgPad from "@assets/1777345125095_1777347760989.jpg";

export const ASSETS = {
  logo,
  imgGrad1,
  imgGrad2,
  imgGrad3,
  imgGrad4,
  imgStudent,
  imgPodium,
  imgClass1,
  imgClass2,
  imgAssembly,
  imgFounder,
  imgPad,
};

export type SchoolInfo = {
  name: string;
  shortName: string;
  motto: string;
  tagline: string;
  about: string;
  mission: string;
  vision: string;
  email: string;
  phones: string[];
  whatsapp: string;
  facebook: string;
  address: string;
  city: string;
  country: string;
  established: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
};

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  body: string;
};

export type GalleryItem = {
  id: string;
  url: string;
  caption: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  category: string;
  location?: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export type AdminCredential = {
  email: string;
  password: string;
};

const KEYS = {
  schoolInfo: "borbor.schoolInfo.v1",
  activities: "borbor.activities.v1",
  news: "borbor.news.v1",
  gallery: "borbor.gallery.v1",
  messages: "borbor.messages.v1",
  admin: "borbor.admin.v1",
  events: "borbor.events.v1",
  testimonials: "borbor.testimonials.v1",
  seeded: "borbor.seeded.v2",
};

const DEFAULT_SCHOOL: SchoolInfo = {
  name: "Dr. Abraham S. Borbor Memorial School of Excellence",
  shortName: "DASBMSE",
  motto: "We Don't Just Teach, We Inspire",
  tagline: "Shaping the next generation of Liberian leaders through faith, discipline, and academic excellence.",
  about:
    "Dr. Abraham S. Borbor Memorial School of Excellence is a premier private institution located in Mount Barclay, Lower Johnsonville, Liberia. Founded in 2019 in honor of Dr. Abraham S. Borbor, the school stands as a beacon of academic rigor and character formation in our community. We serve students from primary through senior high, blending a strong national curriculum with values-based education that prepares young Liberians to lead with integrity. Our campus is a place where every learner is known by name, every talent is nurtured, and every dream is taken seriously.",
  mission:
    "To provide an outstanding, holistic education rooted in discipline, integrity, and academic excellence — equipping every student with the knowledge, character, and confidence to transform their family, community, and nation.",
  vision:
    "To be the most trusted and inspiring K-12 institution in Liberia: a school where excellence is the standard, every child is celebrated, and graduates leave ready to lead with wisdom and compassion.",
  email: "borborschool20219@yahoo.com",
  phones: ["+231 886 633 880", "+231 775 633 880", "+231 886 538 191"],
  whatsapp: "231886633880",
  facebook: "https://www.facebook.com/DASBMSE",
  address: "Mount Barclay, Lower Johnsonville",
  city: "Montserrado County",
  country: "Liberia",
  established: "2019",
};

const DEFAULT_ACTIVITIES: Activity[] = [
  {
    id: "a1",
    title: "Annual Graduation Ceremony",
    description:
      "Our most cherished tradition — celebrating the achievements of our senior graduates with pomp, prayer, and pride. Families travel from across Montserrado to honor their scholars.",
    date: "July 2025",
    image: ASSETS.imgGrad1,
    category: "Ceremony",
  },
  {
    id: "a2",
    title: "Inter-Class Sports Tournament",
    description:
      "Football, kickball, athletics and chess. Every term ends with a campus-wide tournament that builds teamwork, sportsmanship, and school spirit.",
    date: "Each Term",
    image: ASSETS.imgAssembly,
    category: "Sports",
  },
  {
    id: "a3",
    title: "Pad Up A Girl Project",
    description:
      "In partnership with the Beckie Initiative and Wider Impact Network, our students champion menstrual health awareness and provide sanitary pads for girls in need across our community.",
    date: "May 28",
    image: ASSETS.imgPad,
    category: "Community",
  },
  {
    id: "a4",
    title: "Science & Innovation Fair",
    description:
      "Junior and Senior High students showcase original research projects in biology, chemistry, physics and applied technology. Winners advance to county-level competition.",
    date: "March",
    image: ASSETS.imgClass1,
    category: "Academics",
  },
];

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "Class of 2025 Graduates with Record Honors",
    excerpt:
      "Twenty-eight seniors received their diplomas in July, with twelve earning distinction in WAEC examinations.",
    body:
      "On a bright July morning, the campus of Dr. Abraham S. Borbor Memorial School of Excellence hosted one of its largest graduation ceremonies to date. Twenty-eight seniors crossed the stage in caps and gowns, twelve of them earning distinction in the West African Senior School Certificate Examination (WAEC). Principal Cecelia F. Ndomahun, in her keynote address, charged the class to 'go and inspire the Liberia we have not yet seen.'",
    date: "August 12, 2025",
  },
  {
    id: "n2",
    title: "New Computer Lab Opens for Junior High",
    excerpt:
      "Twenty workstations now serve our growing JHS program — every Junior High student now has weekly hands-on computing.",
    body:
      "Thanks to the support of our parents and friends, a brand new computer lab opened this term with twenty modern workstations. Every Junior High student now receives weekly hands-on instruction in word processing, internet research, coding fundamentals, and digital citizenship. We thank the community for making this dream a reality.",
    date: "September 2, 2025",
  },
  {
    id: "n3",
    title: "Enrollment Open for the New Academic Year",
    excerpt:
      "Limited seats remain for Primary, Junior High, and Senior High. Visit our campus or call to reserve your child's place.",
    body:
      "Registration for the new academic year is now open. Limited seats remain across Primary 1 through Senior High 3. We encourage interested families to call any of our published numbers or visit the campus office Monday through Friday. Scholarship interviews for high-performing applicants will be held in two cohorts.",
    date: "October 2025",
  },
];

const DEFAULT_GALLERY: GalleryItem[] = [
  { id: "g1", url: ASSETS.imgGrad1, caption: "Class of 2025 — Graduation Day" },
  { id: "g2", url: ASSETS.imgGrad2, caption: "Senior Class with Principal Ndomahun" },
  { id: "g3", url: ASSETS.imgGrad3, caption: "Graduates celebrating their achievement" },
  { id: "g4", url: ASSETS.imgGrad4, caption: "Diplomas in hand — a moment of pride" },
  { id: "g5", url: ASSETS.imgClass1, caption: "Senior High students in uniform" },
  { id: "g6", url: ASSETS.imgClass2, caption: "Whole-class portrait" },
  { id: "g7", url: ASSETS.imgAssembly, caption: "Morning assembly on the campus quad" },
  { id: "g8", url: ASSETS.imgPodium, caption: "Student speakers at graduation" },
  { id: "g9", url: ASSETS.imgStudent, caption: "Joy on graduation day" },
];

const DEFAULT_ADMIN: AdminCredential = {
  email: "borborschool.admin@gmail.com",
  password: "Admin2026",
};

const today = new Date();
function futureDate(daysAhead: number): string {
  const d = new Date(today);
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().slice(0, 10);
}

const DEFAULT_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "PTA General Meeting",
    date: futureDate(7),
    category: "Parents",
    location: "Main Assembly Hall",
    description:
      "An open conversation between parents, teachers, and the principal on academic progress and the upcoming term calendar.",
  },
  {
    id: "e2",
    title: "Mid-Term Examinations Begin",
    date: futureDate(14),
    endDate: futureDate(18),
    category: "Academics",
    location: "All Classrooms",
    description:
      "Mid-term assessments for Primary, Junior High and Senior High. Please ensure all dues are settled before exam week.",
  },
  {
    id: "e3",
    title: "Inter-Class Football Tournament Final",
    date: futureDate(21),
    category: "Sports",
    location: "School Field",
    description: "The grand final of our termly inter-class football tournament. Parents and friends are warmly invited.",
  },
  {
    id: "e4",
    title: "Cultural Day Celebration",
    date: futureDate(35),
    category: "Cultural",
    location: "School Quad",
    description:
      "A vibrant celebration of Liberian culture — traditional dances, attire, food, and storytelling led by every class.",
  },
  {
    id: "e5",
    title: "Open House for New Families",
    date: futureDate(45),
    category: "Admissions",
    location: "Main Office",
    description:
      "Tour the campus, meet our principal and teachers, and learn how Borbor Memorial can serve your child.",
  },
];

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Borbor Memorial has shaped my daughter into a confident young scholar. She comes home eager to share what she learned every single day.",
    author: "Mrs. Kebbeh Tarpeh",
    role: "Parent · Junior High",
  },
  {
    id: "t2",
    quote:
      "The teachers here truly care. They knew my son's strengths, his struggles, and walked with him until he passed WAEC with flying colors.",
    author: "Mr. Augustine Kollie",
    role: "Parent · Class of 2025",
  },
  {
    id: "t3",
    quote:
      "I left Borbor with more than knowledge — I left with discipline, faith, and a vision for the Liberia I want to build.",
    author: "Princess M. Wesseh",
    role: "Alumna · Class of 2024",
  },
];

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("borbor:store-update", { detail: { key } }));
}

export function seedIfNeeded() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(KEYS.seeded) === "1") return;
  write(KEYS.schoolInfo, DEFAULT_SCHOOL);
  write(KEYS.activities, DEFAULT_ACTIVITIES);
  write(KEYS.news, DEFAULT_NEWS);
  write(KEYS.gallery, DEFAULT_GALLERY);
  write(KEYS.messages, []);
  write(KEYS.admin, DEFAULT_ADMIN);
  write(KEYS.events, DEFAULT_EVENTS);
  write(KEYS.testimonials, DEFAULT_TESTIMONIALS);
  window.localStorage.setItem(KEYS.seeded, "1");
}

export function getSchoolInfo(): SchoolInfo {
  return read(KEYS.schoolInfo, DEFAULT_SCHOOL);
}
export function setSchoolInfo(info: SchoolInfo) {
  write(KEYS.schoolInfo, info);
}

export function getActivities(): Activity[] {
  return read(KEYS.activities, DEFAULT_ACTIVITIES);
}
export function setActivities(items: Activity[]) {
  write(KEYS.activities, items);
}

export function getNews(): NewsItem[] {
  return read(KEYS.news, DEFAULT_NEWS);
}
export function setNews(items: NewsItem[]) {
  write(KEYS.news, items);
}

export function getGallery(): GalleryItem[] {
  return read(KEYS.gallery, DEFAULT_GALLERY);
}
export function setGallery(items: GalleryItem[]) {
  write(KEYS.gallery, items);
}

export function getMessages(): ContactMessage[] {
  return read(KEYS.messages, []);
}
export function setMessages(items: ContactMessage[]) {
  write(KEYS.messages, items);
}
export function addMessage(msg: Omit<ContactMessage, "id" | "createdAt" | "read">) {
  const items = getMessages();
  const next: ContactMessage = {
    ...msg,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    read: false,
  };
  setMessages([next, ...items]);
}

export function getAdmin(): AdminCredential {
  return read(KEYS.admin, DEFAULT_ADMIN);
}
export function setAdmin(cred: AdminCredential) {
  write(KEYS.admin, cred);
}

export function getEvents(): EventItem[] {
  return read(KEYS.events, DEFAULT_EVENTS);
}
export function setEvents(items: EventItem[]) {
  write(KEYS.events, items);
}

export function getTestimonials(): Testimonial[] {
  return read(KEYS.testimonials, DEFAULT_TESTIMONIALS);
}
export function setTestimonials(items: Testimonial[]) {
  write(KEYS.testimonials, items);
}

export function uid(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}
