"use client";

import { useMemo, useState } from "react";

export default function LineupTable({ rows }) {
  const [sortKey, setSortKey] = useState("game"); // "game" | "year" | "manufacturer"
  const [sortDir, setSortDir] = useState("asc");  // "asc" | "desc"

  const sorted = useMemo(() => {
    const copy = [...(rows || [])];
    copy.sort((a, b) => {
      const av = (a[sortKey] || "").toString().toLowerCase();
      const bv = (b[sortKey] || "").toString().toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return copy;
  }, [rows, sortKey, sortDir]);

  function toggleSort(key) {
    if (key === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  }

  const Arrow = ({ active, dir }) => (
    <span className={`ml-1 inline-block align-middle ${active ? "text-gray-900" : "text-gray-400"}`}>
      {dir === "asc" ? "▲" : "▼"}
    </span>
  );

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold">Current Lineup</h2>
      <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                <button
                  type="button"
                  onClick={() => toggleSort("game")}
                  className="inline-flex items-center underline decoration-transparent hover:decoration-gray-300"
                >
                  Game
                  <Arrow active={sortKey === "game"} dir={sortKey === "game" ? sortDir : "asc"} />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                <button
                  type="button"
                  onClick={() => toggleSort("year")}
                  className="inline-flex items-center underline decoration-transparent hover:decoration-gray-300"
                >
                  Year
                  <Arrow active={sortKey === "year"} dir={sortKey === "year" ? sortDir : "asc"} />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                <button
                  type="button"
                  onClick={() => toggleSort("manufacturer")}
                  className="inline-flex items-center underline decoration-transparent hover:decoration-gray-300"
                >
                  Manufacturer
                  <Arrow active={sortKey === "manufacturer"} dir={sortKey === "manufacturer" ? sortDir : "asc"} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sorted && sorted.length ? (
              sorted.map((row, idx) => (
                <tr key={`${row.game}-${idx}`} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">
                    {row.link ? (
                      <a href={row.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-800">
                        {row.game}
                      </a>
                    ) : (
                      row.game
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{row.year}</td>
                  <td className="px-4 py-3 text-gray-700">{row.manufacturer}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-700">Lineup coming soon.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
