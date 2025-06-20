import { useEffect, useState } from "react";
import { axios } from "../../libs/axios";
import type { GithubIssue } from "../../../type";

type GithubIssueGroup = {
  enhancement: GithubIssue[];
  "good first issue": GithubIssue[];
  "help wanted": GithubIssue[];
};

const ListType = () => {
  const [data, setData] = useState<GithubIssueGroup | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/issues");
        setData(res.data);
      } catch (e: any) {
        console.error("Fetch error:", e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderRows = (issues: GithubIssue[]) =>
    Array.isArray(issues)
      ? issues.map((repo) => (
          <tr
            key={repo.id}
            className="border-t border-white/10 hover:bg-white/10 transition"
          >
            <td className="px-4 py-3 font-semibold text-white underline">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.title}
              </a>
            </td>
            <td className="px-4 py-3 text-[#98a8f8]">{repo.user?.login}</td>
            <td className="px-4 py-3 text-gray-400">
              {new Date(repo.created_at).toLocaleDateString()}
            </td>
          </tr>
        ))
      : null;

  const hasAnyIssue =
    data &&
    ((Array.isArray(data.enhancement) && data.enhancement.length > 0) ||
      (Array.isArray(data["good first issue"]) &&
        data["good first issue"].length > 0) ||
      (Array.isArray(data["help wanted"]) && data["help wanted"].length > 0));

  if (loading && !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="h-[500px] border border-white/20 rounded-xl shadow-lg bg-white/5 backdrop-blur-md p-8 max-w-2xl mx-auto flex flex-col">
      <div className="flex items-center justify-center mb-6">
<img src="/toygma-min.png" alt="logo" title="logo" className="rounded-full h-24 w-24" />

      </div>
      <div className="flex-1 overflow-auto rounded-lg bg-white/5">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-300 uppercase sm:text-xs text-[8px] tracking-wider">
              <th className="px-4 py-3">Github Repo Name</th>
              <th className="px-4 py-3">Github Repo Owner</th>
              <th className="px-4 py-3">Github Repo Created At</th>
            </tr>
          </thead>
          <tbody>
            {hasAnyIssue ? (
              <>
                {renderRows(data!.enhancement)}
                {renderRows(data!["good first issue"])}
                {renderRows(data!["help wanted"])}
              </>
            ) : (
              <tr>
                <td colSpan={3} className="text-center text-gray-400 py-6">
                  No issues found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListType;
