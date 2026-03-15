import { Repo, ContributionsData } from "@/types/github";

const GITHUB_USERNAME = "cgaldston";
const FEATURED_REPOS = [
  "Deep-Learning-for-Climate-Model-Emulation",
  "VolleyballReinforcementLearning",
  "Unconditional-Symbolic-Music-Generation",
  "Vermont-Business-Recommender-System",
  "goodreads_reccomendation",
  "MLB-pitch-sequencing",
];

const headers: HeadersInit = {
  Accept: "application/vnd.github.v3+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getFeaturedRepos(): Promise<Repo[]> {
  const results = await Promise.allSettled(
    FEATURED_REPOS.map((name) =>
      fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`, {
        headers,
        next: { revalidate: 3600 },
      }).then((r) => r.json())
    )
  );

  return results
    .filter(
      (r): r is PromiseFulfilledResult<Repo> =>
        r.status === "fulfilled" && !r.value.message
    )
    .map((r) => r.value);
}

export async function getContributions(): Promise<ContributionsData | null> {
  if (!process.env.GITHUB_TOKEN) return null;

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME } }),
      next: { revalidate: 3600 },
    });

    const json = await response.json();
    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) return null;

    const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };

    return {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks.map((week: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) => ({
        contributionDays: week.contributionDays.map((day: { date: string; contributionCount: number; contributionLevel: string }) => ({
          date: day.date,
          count: day.contributionCount,
          level: levelMap[day.contributionLevel] ?? 0,
        })),
      })),
    };
  } catch {
    return null;
  }
}
