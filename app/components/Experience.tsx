import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Experience({className}: {className?: string}) {
  const experiences = [
    {
      title: "Full Stack Engineer Intern",
      company: "KenomeAI",
      duration: "May 2025 - Current",
      description: "Developed the core product and website for KenomeAI, empowering enterprises to create, deploy, and manage AI agents at scale. Used RBAC and SSO to authenticate users and wrote protected routes to access data and database tables to store the data.",
    },
    {
      title: "Junior Developer",
      company: "Stravah",
      duration: "Feb 2025 - Current",
      description: "Creating the frontend for Almond, a platform for fraudulent transaction detection. Focused on improving user experience by enabling optimistic updates and efficient data fetching.",
    },
    {
      title: "SDE Intern",
      company: "The Ethnic Tribe",
      duration: "Feb 2025 - May 2025",
      description: "Maintained an ecommerce website by fixing technical bugs and enhancing code quality.",
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