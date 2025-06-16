import fetch from "node-fetch";

export async function fetchIssues(query: string) {
  const token = process.env.GITHUB_TOKEN;
  const createdAfter = new Date(Date.now() + 3 * 60 * 60 * 1000 - 10 * 60 * 60 * 1000).toISOString();
  const q = `${query} created:>${createdAfter}`;
  const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=20&sort=created&order=desc`;
  const res = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github.v3+json",
    },
  });
  if (!res.ok) {
    const errTxt = await res.text();
    throw new Error(`GitHub API error: ${res.status} ${res.statusText} - ${errTxt}`);
  }
  return await res.json();
}
