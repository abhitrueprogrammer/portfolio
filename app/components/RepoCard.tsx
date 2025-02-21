import React from "react";
import { Repository } from "./PinnedRepos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {  ForkKnife } from "lucide-react"; // Icons for star, fork, and homepage

interface RepoCardProps {
  repo: Repository;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card className="w-full max-w-md p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{repo.name}</CardTitle>
        {repo.isArchived && <Badge className="ml-2" variant="outline">Archived</Badge>}
        {/* {repo.isFork && <Badge className="ml-2" variant="outline">Forked</Badge>} */}
      </CardHeader>

      <CardContent>
        {repo.description ? (
          <p className="text-sm text-muted-foreground mb-2">{repo.description}</p>
        ) : (
          <p className="text-sm italic text-muted-foreground mb-2">No description provided.</p>
        )}

        <div className="flex items-center justify-between">
          {repo.primaryLanguage && (
            <span className="flex items-center space-x-1">
              <Badge variant="secondary">{repo.primaryLanguage.name}</Badge>
            </span>
          )}

          {/* <span className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{repo.stargazerCount}</span>
          </span> */}
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="flex items-center space-x-1">
            <ForkKnife className="w-4 h-4" />
            <span>{repo.forkCount}</span>
          </span>
{/* 
          {repo.homepageUrl && (
            <a
              href={repo.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-blue-500"
            >
              <Globe className="w-4 h-4" />
              <span>Website</span>
            </a>
          )} */}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Created on: {new Date(repo.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
