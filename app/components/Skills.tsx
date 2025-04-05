import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Skills({className}: {className?: string}) {
  const skills = {
    "Programming Languages": [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Go",
      "Bash",
      "C#",
    ],
    "Frameworks, Libraries, and Tools": [
      "Next.js",
      "TanStack",
      "Flask",
      "Github",
      "Zustand",
    ],
    "Databases and Cloud Services": [
      "MongoDB",
      "Vercel",
      "SQLite",
      "Cloudinary",
      "GitHub Pages",
      "Netlify",
    ],
  };

  return (
    <div id="skills" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Technical Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold text-sm mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm bg-gray-700 text-white"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}