import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Certifications({className}: {className?: string}) {
  const certifications = [
    {
      title: "CS50x",
      type: "Certification",
      link: "https://certificates.cs50.io/6690d02d-8c10-4672-af1c-9ee1ce10528a.pdf?size=letter",
    },
  ];

  const misc = [
    {
      title: "Open Source Contribution",
      description: "Contributed code to excalidraw, an open source repository with over 102K stars.",
      link: "https://github.com/excalidraw/excalidraw/pull/9109",
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
              {cert.link ? (
                <Link 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium text-blue-400 hover:text-blue-300 underline"
                >
                  {cert.title}
                </Link>
              ) : (
                <span className="font-medium">{cert.title}</span>
              )}
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
                  {item.link ? (
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
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