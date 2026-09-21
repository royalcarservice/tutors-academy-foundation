export type Tutor = {
  id: string;
  name: string;
  initials: string;
  subjects: string[];
  classes: number[];
  boards: string[];
  experience: number;
  modes: string[];
  availability: string[];
  fee: number;
  rating: number;
  bio: string;
  approach: string;
  qualifications: string[];
  verificationStatus: string;
};

export const tutors: Tutor[] = [
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    initials: "AS",
    subjects: ["Mathematics", "Science"],
    classes: [6, 7, 8, 9, 10],
    boards: ["CBSE", "ICSE"],
    experience: 8,
    modes: ["Online"],
    availability: ["Weekdays", "Evening"],
    fee: 500,
    rating: 4.8,
    bio: "Focused on building strong concepts, thoughtful problem-solving habits, and exam confidence.",
    approach: "Ananya uses guided practice, visual explanations, and short learning checks to identify gaps before moving forward.",
    qualifications: ["M.Sc. Mathematics", "B.Ed.", "Illustrative teaching credentials"],
    verificationStatus: "Verification preview",
  },
  {
    id: "rahul-menon",
    name: "Rahul Menon",
    initials: "RM",
    subjects: ["Physics", "Mathematics"],
    classes: [9, 10, 11, 12],
    boards: ["CBSE", "State Board"],
    experience: 11,
    modes: ["Online", "Offline"],
    availability: ["Weekends", "Afternoon"],
    fee: 800,
    rating: 4.9,
    bio: "Makes advanced concepts approachable through first-principles thinking and carefully sequenced practice.",
    approach: "Rahul connects theory with practical examples, then moves from fundamentals to board and entrance-style questions.",
    qualifications: ["M.Tech.", "B.Sc. Physics", "Illustrative teaching credentials"],
    verificationStatus: "Information review preview",
  },
  {
    id: "priya-sen",
    name: "Priya Sen",
    initials: "PS",
    subjects: ["English", "Social Science"],
    classes: [4, 5, 6, 7, 8, 9, 10],
    boards: ["CBSE", "ICSE", "State Board"],
    experience: 6,
    modes: ["Online"],
    availability: ["Weekdays", "Weekends", "Morning"],
    fee: 400,
    rating: 4.7,
    bio: "Supports confident reading, structured writing, and clear expression through patient, discussion-led sessions.",
    approach: "Priya combines close reading, vocabulary building, and structured writing frameworks with regular feedback.",
    qualifications: ["M.A. English", "B.Ed.", "Illustrative teaching credentials"],
    verificationStatus: "Verification preview",
  },
  {
    id: "neha-iyer",
    name: "Neha Iyer",
    initials: "NI",
    subjects: ["Chemistry", "Biology", "Science"],
    classes: [7, 8, 9, 10, 11, 12],
    boards: ["CBSE", "ICSE"],
    experience: 9,
    modes: ["Online", "Offline"],
    availability: ["Weekdays", "Evening"],
    fee: 650,
    rating: 4.8,
    bio: "Brings structure to content-heavy subjects with diagrams, recall systems, and concept-led revision.",
    approach: "Neha uses visual maps and progressive recall to help learners understand relationships instead of memorising isolated facts.",
    qualifications: ["M.Sc. Chemistry", "B.Ed.", "Illustrative teaching credentials"],
    verificationStatus: "Information review preview",
  },
];

export const subjectOptions = ["Mathematics", "Science", "Physics", "Chemistry", "Biology", "English", "Social Science", "Hindi", "Computer Science"];

export function subjectsForClass(classNumber: number) {
  if (classNumber <= 5) return ["Mathematics", "Science", "English", "Social Science", "Hindi", "Computer Science"];
  if (classNumber <= 8) return ["Mathematics", "Science", "English", "Social Science", "Hindi", "Computer Science"];
  return subjectOptions;
}

export function getTutor(id: string) {
  return tutors.find((tutor) => tutor.id === id);
}