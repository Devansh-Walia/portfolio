export async function GET() {
  return Response.json({
    name: "Devansh Walia",
    title: "Full-Stack Software Engineer",
    location: "Pune, Maharashtra, India",
    experience_years: "5-8",
    skills: {
      languages: ["TypeScript", "JavaScript", "C++"],
      frameworks: ["React", "Next.js", "NestJS", "Node.js"],
      concepts: ["Dynamic Programming", "Backend Architecture", "System Design"],
    },
    history: [
      {
        company: "ThoughtWorks",
        role: "Software Engineer / Consultant",
        highlights: [
          "Enterprise software solutions",
          "Backend workflow optimization",
        ],
      },
      {
        company: "Koshish Family",
        role: "Head of Department (Website) & Tech Lead",
        highlights: ["Cross-departmental alignment", "Digital strategy"],
      },
    ],
  });
}
