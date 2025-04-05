import { cn } from "@/lib/utils";
import React from "react";

export default function Education({className}: {className?: string}) {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "Vellore Institute of Technology, Vellore",
      duration: "2023 - 2027",
      score: "CGPA: 9.11 (as of April 2025)",
    },
    {
      degree: "Senior Secondary",
      institution: "Aryaman Vikram Birla Institute of learning, Haldwani",
      duration: " - 2022",
      score: "Percentage: 92%",
    },
  ];

  return (
    <div id="education" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="space-y-1 pb-4 last:pb-0">
            <h3 className="font-semibold text-sm">{edu.degree}</h3>
            <p className="text-sm">{edu.institution}</p>
            <p className="text-sm">{edu.duration}</p>
            <p className="text-sm">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
