import React from "react";
import { Repository } from "./PinnedRepos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ForkKnife } from "lucide-react"; // Icon for fork
import Link from "next/link";

interface RepoCardProps {
  repo: Repository;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <Link href={repo.url}>
      <Card
        className="w-full max-w-md p-4 shadow-md shadow-[#222] transition-all duration-200 hover:bg-[#141414] hover:shadow-xl hover:scale-105"
      >
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{repo.name}</CardTitle>
          {repo.isArchived && (
            <Badge className="ml-2" variant="outline">
              Archived
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          {repo.description ? (
            <p className="text-sm text-muted-foreground mb-2">{repo.description}</p>
          ) : (
            <p className="text-sm italic text-muted-foreground mb-2">
              No description provided.
            </p>
          )}
          <div className="flex items-center justify-between">
            {repo.primaryLanguage && (
              <span className="flex items-center space-x-1">
                <Badge variant="secondary">{repo.primaryLanguage.name}</Badge>
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="flex items-center space-x-1">
              <ForkKnife className="w-4 h-4" />
              <span>{repo.forkCount}</span>
            </span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Created on: {new Date(repo.createdAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}