import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { BookOpen, Briefcase, Code, Brain, AppWindow, Award } from "lucide-react"; // Example icons

const items = [
  {
    title: "Education",
    url: "#education",
    icon: BookOpen, // Icon for education
  },
  {
    title: "Experience",
    url: "#experience",
    icon: Briefcase, // Icon for experience
  },
  {
    title: "Projects",
    url: "#projects",
    icon: AppWindow, // Icon for repositories
  },
  {
    title: "Pinned Repositories",
    url: "#pinned-repos",
    icon: Code, // Icon for repositories
  },
  {
    title: "Skills",
    url: "#skills",
    icon: Brain, // Icon for skills
  },
  {
    title: "Certifications & Responsibilities",
    url: "#certifications",
    icon: Award, // Icon for certifications
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
