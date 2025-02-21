import Link from "next/link";
import PinnedRepos from "./components/PinnedRepos";
import {Github, Linkedin} from "lucide-react";
export default function Home() {
  const name = "abhinav pant";


  return (
    <div className=" text-lg  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div className="flex justify-between">
          <p>
            Hello world from{" "}
            <span className="text-xl text-green-600">{name}</span>
          </p>
          <div className="flex gap-4 mr-6">
            <p>
              <Link
                className="text-white underline"
                href="https://github.com/abhitrueprogrammer/"
              >
                <Github/>
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
        <div className="flex gap-4 flex-wrap">
          <PinnedRepos />
        </div>
      </div>
    </div>
  );
}
