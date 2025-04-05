import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Experience({className}: {className?: string}) {
  const experiences = [
    {
      title: "SDE Intern",
      company: "The Ethnic Tribe",
      duration: "Feb 2025 - Current",
      description: "Maintained an ecommerce website by fixing bugs and enhancing code quality.",
    },
    {
      title: "SDE Intern",
      company: "Stravah",
      duration: "Feb 2025 - Current",
      description: "Developed frontend for Almond, a fraudulent transaction detection platform.",
    },

  ];

  return (
    <div id="experience" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Experience</h2>
      <div className="space-y-4 grid grid-cols-2  gap-4">
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