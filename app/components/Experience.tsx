import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Experience({className}: {className?: string}) {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "AVEVA",
      duration: "Jun 2026 - Jul 2026",
      description: "Designed and implemented Model Context Protocol (MCP)-based AI integrations for AVEVA Enterprise Resource Management using C# and .NET.",
    },
    {
      title: "Full Stack Engineer Intern",
      company: "KenomeAI",
      duration: "May 2025 - Jul 2025",
      description: "Developed the core product and website for KenomeAI, empowering enterprises to create, deploy, and manage AI agents at scale. Implemented RBAC, SSO, and protected routes to improve platform security.",
    },
    {
      title: "Junior Developer",
      company: "Stravah",
      duration: "Feb 2025 - Aug 2025",
      description: "Created and integrated the frontend for Almond, a platform for fraudulent transaction detection. Improved user experience through efficient data fetching.",
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      duration: "Feb 2025 - May 2025",
      description: "Refactored The Ethnic Tribe's e-commerce frontend, built a SignWell-integrated landing page for Peritys, and developed De'Hamray Jamshedpur's hotel website with booking, gallery, and Google Reviews integrations.",
    },
  ];

  return (
    <div id="experience" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Experience</h2>
      <div className="space-y-4 grid grid-cols-1 gap-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-semibold">
                {exp.title} - {exp.company}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm ">
              <p className="text-gray-500 text-xs">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
