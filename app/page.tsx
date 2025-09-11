import Link from "next/link";
import PinnedRepos from "./components/PinnedRepos";
import { Cloud, Download, File, Github, Linkedin } from "lucide-react";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import { Button } from "@/components/ui/button";

export default function Home() {
  const name = "Abhinav Pant";

  return (
    <div className=" text-lg  items-center justify-items-center min-h-screen   p-10 pt-2 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div className="flex te justify-between">
          <p className="text-3xl font-bold text-white">
            Hello world from <span className=" text-green-600">{name}</span>
          </p>
          <div className="flex gap-2">
            <Link
              className="text-white underline"
              href="https://github.com/abhitrueprogrammer/"
            >
              <Button variant={"secondary"}>
                <Github />
              </Button>
            </Link>
            <Link
              className="text-blue-400 underline"
              href="https://www.linkedin.com/in/abhinavpant/"
            >
              <Button variant={"secondary"}>
                <Linkedin className="text-blue-400" />
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1jAhPKUQXB49AFaHUXoh6XBkcgxDXhltj/view?usp=drive_link"
              target="_blank"
            >
              <Button variant={"secondary"}>
                <File /> <Cloud />{" "}
              </Button>
            </Link>
            <Link href="/resume" target="_blank">
              <Button variant={"secondary"}>
                <File /> <Download  />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8 ">
          <Education className="border-b pb-7 border-white" />
          <Experience className="border-b pb-7 border-white" />
          <Projects className="border-b pb-7 border-white" />

          <div className="flex gap-4 border-b border-white flex-wrap">
            <PinnedRepos className=" pb-6" />
          </div>
          <Skills className="border-b pb-7 border-white" />
          <Certifications />
        </div>
      </div>
    </div>
  );
}
