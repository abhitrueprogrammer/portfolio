import Link from "next/link";
import PinnedRepos from "./components/PinnedRepos";
import { Github, Linkedin } from "lucide-react";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
export default function Home() {
  const name = "abhinav pant";

  return (
    <div className=" text-lg  items-center justify-items-center min-h-screen   p-10 pt-2 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div className="flex te justify-between">
          <p className="text-3xl font-bold text-white">
            Hello world from{" "}
            <span className=" text-green-600">{name}</span>
          </p>
          <div className="flex gap-4 mr-6">
            <p>
              <Link
                className="text-white underline"
                href="https://github.com/abhitrueprogrammer/"
              >
                <Github />
              </Link>
            </p>
            <p>
              <Link
                className="text-blue-400 underline"
                href="https://www.linkedin.com/in/abhinav-pant/"
              >
                <Linkedin />
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8 ">
          <Education className="border-b pb-7 border-white"/>
          <Experience className="border-b pb-7 border-white"/>
          <Projects className="border-b pb-7 border-white"/>

          <div className="flex gap-4 border-b border-white flex-wrap">
            <PinnedRepos className=" pb-6"/>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
}
