import Link from "next/link";
import PinnedRepos from "./components/PinnedRepos";
export default function Home() {
  const name = "abhinav pant";


  return (
    <div className=" text-lg  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <p>
          Hello world from{" "}
          <span className="text-xl text-green-600">{name}</span>
        </p>
        <p>
          My github:{" "}
          <Link
            className="text-blue-400 underline"
            href="https://github.com/abhitrueprogrammer/"
          >
            abhitrueprogrammer
          </Link>
        </p>
        <p>
          My linkedIn:{" "}
          <Link
            className="text-blue-400 underline"
            href="https://www.linkedin.com/in/abhinav-pant/"
          >
            abhinav-pant
          </Link>
        </p>
        <div className="flex gap-4 flex-wrap">
          <PinnedRepos />
        </div>
      </div>
    </div>
  );
}
