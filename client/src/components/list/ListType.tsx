import { useEffect, useState } from "react";
import { axios } from "../../libs/axios";
import type { GithubIssue } from "../../../type";

const LOCAL_KEY = "github_issue_v1";

type GithubIssueGroup = {
  enhancement: GithubIssue[];
  "good first issue": GithubIssue[];
  "help wanted": GithubIssue[];
};

const ListType = () => {
  const [data, setData] = useState<GithubIssueGroup | null>(null);
  const [loading, setLoading] = useState(true);

  const loadFromCache = (key: string) => {
    try {
      const cached = localStorage.getItem(key);
      if (!cached) return null;

      const item = JSON.parse(cached);
      const now = new Date();
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return JSON.parse(item.value);
    } catch {
      return null;
    }
  };

  const saveToLocalStorage = (key: string, value: string) => {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + 1000 * 60 * 60, // 1 saatlik geçerlilik
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  useEffect(() => {
    // Önce cache'den veriyi al ve göster
    const cachedData = loadFromCache(LOCAL_KEY);
    if (cachedData) {
      setData(cachedData);
      setLoading(false); // hızlı gösterim
    }

    // Sonra API'den güncel veriyi al ve varsa güncelle
    const fetchData = async () => {
      try {
        const res = await axios.get("/issues");

        const isSame = JSON.stringify(res.data) === JSON.stringify(cachedData);
        if (!isSame) {
          setData(res.data);
          saveToLocalStorage(LOCAL_KEY, JSON.stringify(res.data));
        }
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
        <span className="inline-block rounded-full bg-gradient-to-r from-[#ff80b5] via-[#9089fc] to-[#6ee7b7] w-20 h-20 shadow-lg border-4 border-white/20" />
      </div>
      <div className="flex-1 overflow-auto rounded-lg bg-white/5">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-300 uppercase text-xs tracking-wider">
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
