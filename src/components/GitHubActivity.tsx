"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ContributionsData } from "@/types/github";

interface Props {
  data: ContributionsData | null;
  totalContributions?: number;
}

// Fallback minimal data when no token is set
const FALLBACK_DATA = [{ date: new Date().toISOString().split("T")[0], count: 0, level: 0 as const }];

export default function GitHubActivity({ data }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-32" />;

  const isDark = resolvedTheme === "dark";

  const activityData = data
    ? data.weeks.flatMap((w) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          count: d.count,
          level: d.level,
        }))
      )
    : FALLBACK_DATA;

  return (
    <div className="overflow-x-auto">
      <ActivityCalendar
        data={activityData}
        colorScheme={isDark ? "dark" : "light"}
        theme={{
          light: ["#e8e4dc", "#bfdbfe", "#93c5fd", "#3b82f6", "#1d4ed8"],
          dark: ["#1a2535", "#1e3a5f", "#1d4ed8", "#3b82f6", "#60a5fa"],
        }}
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
        style={{ fontFamily: "inherit" }}
        fontSize={12}
        blockSize={12}
        blockMargin={4}
        showWeekdayLabels
      />
    </div>
  );
}
