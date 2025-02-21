import React from "react";
import { Repository } from "./PinnedRepos";

export default function RepoCard({ repo }: { repo: Repository }) {
  return <div>{repo.name}</div>;
}
