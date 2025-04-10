import { getPinnedRepos } from "../services/get-repo";
import RepoCard from "./RepoCard";
import { cn } from "@/lib/utils";
interface Language {
  name: string;
  id: string;
  color: string;
}

export interface Repository {
  name: string;
  url: string;
  stargazerCount: number;
  primaryLanguage: Language;
  description: string | null;
  createdAt: string;
  forkCount: number;
  homepageUrl: string | null;
  id: string;
  isArchived: boolean;
  isFork: boolean;
  isInOrganization: boolean;
  isTemplate: boolean;
  languages: {
    edges: {
      node: Language;
    }[];
  };
}
// refetch every 60 seconds
export const revalidate = 60;

export default async function PinnedRepos({className}: {className?: string}) {
  const repos = await getPinnedRepos("abhitrueprogrammer");
 return (
    <div id="pinned-repos" className={cn(className)}>
      <h1 className="font-bold text-xl">Pinned Repos</h1>
      <div className="my-2 text-xs text-gray-500">All the repos are dynamically fetched using github graphQL API</div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  w-full gap-4">
        {repos.map((repo: Repository, index: number) => (
          <RepoCard key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}
