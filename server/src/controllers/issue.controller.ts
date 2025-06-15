import { Request, Response } from "express";
import { fetchIssues } from "../services/githubServices";
import dotenv from "dotenv"
dotenv.config();

type GithubIssue = {
  title: string;
  html_url: string;
  user: {
    login: string;
  };
  created_at: string;
};



const GITHUB_QUERIES: { label: string, q: string }[] = [
  { label: "good first issue", q: process.env.ISSUE_QUERY_GOOD_FIRST! },
  { label: "enhancement", q: process.env.ISSUE_QUERY_ENHANCEMENT! },
  { label: "help wanted", q: process.env.ISSUE_QUERY_HELP_WANTED! },
];
export const getIssues = async (_req: Request, res: Response) => {
  const results: Record<string, GithubIssue[]> = {};
  for (const query of GITHUB_QUERIES) {
    try {
      const data: any = await fetchIssues(query.q);
      results[query.label] = data.items;
    } catch (error: any) {
      results[query.label] = [];
      console.error("Error fetching issues:", error);
    }
  }
  res.json(results);
};