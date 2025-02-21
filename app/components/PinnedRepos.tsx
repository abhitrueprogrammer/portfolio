import { getPinnedRepos } from "../services/get-repo";
import RepoCard from "./RepoCard";
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

export default async function PinnedRepos( ) {
  const repos = await getPinnedRepos("abhitrueprogrammer");
  console.log(repos)
  return (
    <div>
      PinnedRepos:
      {repos.map((repo: Repository, index: number) => (
        <RepoCard key={index} repo={repo} />
      ))}
    </div>
  );
}
