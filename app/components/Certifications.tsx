import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Certifications({className}: {className?: string}) {
  const certifications = [
    {
      title: "CS50x",
      type: "Certification",
    },
  ];

  const misc = [
    {
      title: "Open Source Contribution",
      description: "Contributed code to excalidraw, an open source repository with over 102K stars.",
    },
    {
      title: "Projects Head, CodeChef-VIT",
      description: "Planning and organizing projects to ensure timely completion while mentoring members and ensuring high code quality through PR reviews.",
    },
  ];

  return (
    <div id="certifications" className={cn(className)}>
      <h2 className="font-bold text-xl mb-4">Certifications & Misc.</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-2">Certifications</h3>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <div key={index} className="text-sm">
              <span className="font-medium">{cert.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-sm mb-2">Miscellaneous</h3>
        <div className="space-y-3">
          {misc.map((item, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-sm">
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 