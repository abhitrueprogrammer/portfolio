import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Projects({ className }: { className?: string }) {
  const experiences = [
    {
      title: "DEVSOC’25",
      duration: "Jan 2025 - Jan 2025",
      description:
        "Built Registration and Admin Portals for participant management.",
      tech: ["Next.js", "TypeScript", "Shadcn", "Zustand", "Tanstack"],
      impact: "Managed 1000+ participants.",
    },
    {
      title: "Papers",
      duration: "Oct 2024 - Nov 2024",
      description:
        "Contributed to papers.codechefvit.com, a question paper platform.",
      tech: [
        "Next.js",
        "MongoDB",
        "Cloudinary",
        "TypeScript",
        "Shadcn",
        "Tanstack",
      ],
      impact: "10k active users during exams.",
    },
    {
      title: "Cookoff Admin Portal",
      duration: "Sept 2024 - Nov 2024",
      description: "Admin portal for Cookoff coding event.",
      tech: ["Next.js", "TypeScript", "Tanstack", "Tailwind CSS", "Shadcn"],
    },
    {
      title: "FFCS Combogen",
      company: "Project",
      duration: "Nov 2024 - Nov 2024",
      description: "Mock timetable generator for FFCS allotment.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <div id="projects" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Projects</h2>
      <div className="space-y-4 grid grid-cols-2  gap-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-semibold">
                {exp.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm ">
              <p className="text-gray-500 text-xs">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
              {exp.tech && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              {exp.impact && (
                <p className="text-xs text-gray-500 mt-1">{exp.impact}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
