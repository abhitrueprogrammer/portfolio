import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Experience({className}: {className?: string}) {
  const experiences = [
    {
      title: "Full Stack Engineer Intern",
      company: "KenomeAI",
      duration: "May 2025 - Jul 2025",
      description: "Developed the core product and website for KenomeAI, empowering enterprises to create, deploy, and manage AI agents at scale. Used RBAC and SSO to authenticate users and wrote protected routes to access data and database tables to store the data resulting in improved security of the platform.",
    },
    {
      title: "Junior Developer",
      company: "Stravah",
      duration: "Feb 2025 - Aug 2025",
      description: "Created and integrated the frontend for almond, a platform for fraudulent transaction detection. Improved user experience by enabling efficient data fetching.",
    },
    {
      title: "SDE Intern",
      company: "The Ethnic Tribe",
      duration: "Feb 2025 - May 2025",
      description: "Maintained and improved the frontend of an e-commerce website with focus on refactoring and organizing the code.",
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