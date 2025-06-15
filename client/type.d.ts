export type GithubLabel = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description?: string | null;
};

export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
}

export type GithubIssue = {
  created_at: string;
  id: number;
  user:GithubUser;
  labels: GithubLabel[];
  labels_url: string;
  repository_url: string;
  state: "open" | "closed";
  title: string;
  url: string;
};