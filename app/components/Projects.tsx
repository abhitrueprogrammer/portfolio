import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Projects({ className }: { className?: string }) {
  const experiences = [
    {
      title: "Papers",
      description:
        "Major contributor and project maintainer of papers.codechefvit.com, providing VIT students access to previous-year question papers. Designed the architecture and flow to keep papers maintained and updated efficiently.",
      tech: ["Next.js", "MongoDB", "cloudinary", "TypeScript", "Shadcn", "Tanstack"],
      impact: "Nearly 45k active users during exam seasons.",
    },
    {
      title: "DEVSOC’25",
      description:
        "Developed Registration Portal, and Admin Portal to facilitate seamless participant management and convey information efficiently. These platforms helped manage over 1000 participants and streamline event operations. Hosted at github.",
      tech: ["Next.js", "TypeScript", "Shadcn", "Zustand", "Tanstack"],
      impact: "Managed 1000+ participants.",
    },
    {
      title: "GitGaze",
      description: "Built a backend for real-time GitHub analytics and contributor leaderboards using the GitHub API, MySQL, Redis, JWT, and Spring Boot.",
      tech: ["Java 21", "Spring Boot", "Redis", "MySQL"],
      impact: "Real-time analytics and contributor leaderboards.",
    },
  ];

  return (
    <div id="projects" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Projects</h2>
      <div className="space-y-4 grid grid-cols-1 gap-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-semibold">
                {exp.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm ">
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
