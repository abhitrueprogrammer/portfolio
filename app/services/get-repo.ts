export async function getPinnedRepos(username: string) {
  if (!process.env.TOKEN)
    throw new Error("You must set your GitHub API token in env first");

  const query = `
            query{
                user(login: "${username}") {
                    pinnedItems(first: 6, types: REPOSITORY) {
                        nodes {
                            ... on Repository {
                                name
                                url
                                stargazerCount
                                primaryLanguage {
                                    name
                                    color
                                    id
                                }
                                description
                                createdAt
                                forkCount
                                homepageUrl
                                id
                                isArchived
                                isFork
                                isInOrganization
                                isTemplate
                                languages(first: 100) {
                                    edges {
                                        node {
                                            name
                                            id
                                            color
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;
  const url = "https://api.github.com/graphql";

  const res = await fetch(url, {
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  // Parse the response body as JSON
  const data = await res.json();
  
  // Log the parsed response body
  return data.data.user.pinnedItems.nodes
}
