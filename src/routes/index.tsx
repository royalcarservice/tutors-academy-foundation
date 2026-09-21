import { createFileRoute } from "@tanstack/react-router";
import { TutorsAcademyHome } from "../components/tutors-academy-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tutors Academy — Find the Right Tutor for Classes 1–12" },
      { name: "description", content: "Find personalized academic support for Classes 1–12 across CBSE, ICSE, and State Boards with Tutors Academy." },
      { property: "og:title", content: "Tutors Academy — The Right Tutor Can Change Everything" },
      { property: "og:description", content: "Personalized tutor discovery and matching for students in Classes 1–12." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TutorsAcademyHome,
});
