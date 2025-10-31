export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  series?: string;
  tags?: string[];
};

export const posts: PostMeta[] = [
  {
    slug: "teach-the-machine-part-4",
    title: "Teaching the Machine-Teaching the Student  – Part 4: Finding Our Way Out of the Woods",
    date: "2025-10-10",
    summary: "Chain of thought prompting applied at various points along the learning pathway can be a critical reflective and corrective tool.",
    series: "Teaching the Machine – Teaching the Student",
    tags: ["Music Theory", "Prompt Engineering", "Cognitive Errors", "Learning by Teaching"]
  },
  {
    slug: "teach-the-machine-part-3",
    title: "Teaching the Machine-Teaching the Student – Part 3: Solving Problems",
    date: "2025-10-11",
    summary: "Is in-context prompting on its own enough to guide the reasoning in solving actual music theory problems?",
    series: "Teaching the Machine – Teaching the Student",
    tags: ["In-Context Learning","Chain of Thought", "Pedagogy", "Music Theory"]
  },
  {
    slug: "teach-the-machine-part-2",
    title: "Teaching the Machine-Teaching the Student – Part 2: Setting Up the Context",
    date: "2025-10-12",
    summary: "Introducing in-context scaffolding to guide reasoning on core tonal-theory concepts.",
    series: "Teaching the Machine – Teaching the Student",
    tags: ["In-Context Learning", "Music Theory", "Prompt Design"]
  },
  {
    slug: "teach-the-machine-part-1",
    title: "Teaching the Machine – Part 1: Setting the Pattern",
    date: "2025-10-9",
    summary: "Why prompting strategies from AI may provide new perspectives on teaching real students.",
    series: "Teaching the Machine – Teaching the Student",
    tags: ["Prompt Engineering", "Music Theory", "Pedagogy"]
  }
];
