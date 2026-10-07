"use client";

import Image from "next/image";
import { useState } from "react";

type RoastFilter = "all" | "light-medium" | "medium" | "medium-dark";

type Bean = {
  id: string;
  nameZh: string;
  nameEn: string;
  origin: string;
  process: string;
  roast: string;
  roastLevel: number;
  roastFilter: Exclude<RoastFilter, "all">;
  notes: string[];
  brew: string;
  price: number;
  color: string;
  featured?: boolean;
};

const filters: Array<{
  id: RoastFilter;
  label: string;
  english: string;
}> = [
  { id: "all", label: "全部", english: "All" },
  { id: "light-medium", label: "淺中焙", english: "Light–Medium" },
  { id: "medium", label: "中焙", english: "Medium" },
  { id: "medium-dark", label: "中深焙", english: "Medium–Dark" },
];

const beans: Bean[] = [
  {
    id: "morning-light",
    nameZh: "晨光配方",
    nameEn: "Morning Light",
    origin: "衣索比亞 × 哥倫比亞",
    process: "水洗 / 日曬",
    roast: "淺中焙",
    roastLevel: 2,
    roastFilter: "light-medium",
    notes: ["柑橘", "焦糖", "花香"],
    brew: "手沖 · 美式",
    price: 450,
    color: "#d07f60",
  },
  {
    id: "corner-house",
    nameZh: "街角配方",
    nameEn: "Corner House",
    origin: "巴西 × 哥倫比亞",
    process: "日曬 / 水洗",
    roast: "中焙",
    roastLevel: 3,
    roastFilter: "medium",
    notes: ["堅果", "牛奶巧克力", "黑糖"],
    brew: "義式 · 拿鐵 · 摩卡壺",
    price: 420,
    color: "#75886d",
    featured: true,
  },
  {
    id: "night-island",
    nameZh: "島嶼深夜",
    nameEn: "Island After Dark",
    origin: "巴西 × 印尼",
    process: "日曬 / 濕剝",
    roast: "中深焙",
    roastLevel: 4,
    roastFilter: "medium-dark",
    notes: ["黑巧克力", "烤堅果", "香料"],
    brew: "義式 · 法壓 · 冰滴",
    price: 430,
    color: "#4a3a2f",
  },
];

export function BeanSelection() {
  const [activeFilter, setActiveFilter] = useState<RoastFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("zh-Hant");

  const visibleBeans = beans.filter((bean) => {
    const matchesRoast =
      activeFilter === "all" || bean.roastFilter === activeFilter;
    const searchableText = [
      bean.nameZh,
      bean.nameEn,
      bean.origin,
      bean.process,
      bean.roast,
      bean.brew,
      ...bean.notes,
    ]
      .join(" ")
      .toLocaleLowerCase("zh-Hant");
    const matchesSearch =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

    return matchesRoast && matchesSearch;
  });

  const resetSearch = () => {
    setSearchQuery("");
    setActiveFilter("all");
  };

  return (
    <>
      <div className="mt-9 grid gap-6 border-y border-[color:var(--soft-line)] py-6 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:items-end">
        <div role="search">
          <label
            htmlFor="bean-search"
            className="text-sm font-medium text-espresso"
          >
            搜尋咖啡豆
            <span className="ml-2 text-xs font-normal text-[rgba(74,58,47,0.58)]">
              Search beans
            </span>
          </label>
          <div className="mt-3 flex min-h-12 items-center gap-3 rounded-full border border-[color:var(--soft-line)] bg-[rgba(255,255,255,0.38)] px-4 focus-within:border-darkgreen focus-within:ring-2 focus-within:ring-[rgba(39,52,33,0.12)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[rgba(74,58,47,0.55)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              id="bean-search"
              name="bean-search"
              type="search"
              autoComplete="off"
              spellCheck={false}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="搜尋名稱、產地或風味…"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-espresso outline-none placeholder:text-[rgba(74,58,47,0.42)]"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="清除搜尋"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg leading-none text-[rgba(74,58,47,0.55)] hover:bg-[rgba(74,58,47,0.08)] hover:text-espresso"
              >
                ×
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-espresso">
            依烘焙度篩選
            <span className="ml-2 text-xs font-normal text-[rgba(74,58,47,0.58)]">
              Filter by roast level
            </span>
          </p>
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="group"
            aria-label="依烘焙度篩選咖啡豆"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-darkgreen bg-darkgreen text-cream"
                      : "border-[color:var(--soft-line)] bg-transparent text-espresso hover:border-darkgreen hover:bg-[rgba(167,179,154,0.12)]"
                  }`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[0.62rem] uppercase tracking-[0.12em] ${
                      isActive
                        ? "text-[rgba(249,246,238,0.68)]"
                        : "text-[rgba(74,58,47,0.5)]"
                    }`}
                  >
                    {filter.english}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p
        className="mt-6 text-sm text-[rgba(74,58,47,0.62)]"
        role="status"
        aria-live="polite"
      >
        顯示 {visibleBeans.length} 款咖啡豆
      </p>

      <div className="mt-5 grid gap-6 lg:grid-cols-3">
        {visibleBeans.map((bean) => (
          <article
            key={bean.id}
            className={`soft-card relative flex h-full flex-col overflow-hidden p-6 sm:p-7 ${
              bean.featured
                ? "bg-[rgba(167,179,154,0.18)]"
                : "bg-[rgba(255,255,255,0.5)]"
            }`}
          >
            {bean.featured ? (
              <p className="absolute right-5 top-5 rounded-full bg-darkgreen px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-cream">
                House Pick
              </p>
            ) : null}

            <div className="flex items-start gap-4 pr-20">
              <span
                className="mt-1 h-4 w-4 shrink-0 rounded-full border border-espresso/20"
                style={{ backgroundColor: bean.color }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display text-3xl leading-tight text-espresso">
                  {bean.nameZh}
                </h3>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-terracotta">
                  {bean.nameEn}
                </p>
              </div>
            </div>

            <div className="my-7 flex items-center gap-4 border-y border-[color:var(--soft-line)] py-5">
              <Image
                src="/coffee-bean.svg"
                alt=""
                width={48}
                height={50}
                className="h-11 w-11 opacity-80"
              />
              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${bean.nameZh} 風味`}
              >
                {bean.notes.map((note) => (
                  <li
                    key={note}
                    className="rounded-full border border-[color:var(--soft-line)] bg-cream/70 px-3 py-1.5 text-xs"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="space-y-3 text-sm leading-6 text-[rgba(74,58,47,0.78)]">
              <BeanFact label="產地 Origin" value={bean.origin} />
              <BeanFact label="處理 Process" value={bean.process} />
              <BeanFact label="烘焙 Roast" value={bean.roast} />
              <BeanFact label="沖煮 Brew" value={bean.brew} />
            </dl>

            <div className="mt-auto pt-7">
              <RoastMeter level={bean.roastLevel} />
              <div className="mt-6 flex items-center justify-between gap-4">
                <p>
                  <span className="block text-xs uppercase tracking-[0.18em] text-[rgba(74,58,47,0.55)]">
                    250 g
                  </span>
                  <span className="font-display mt-1 block text-2xl">
                    NT$ {bean.price}
                  </span>
                </p>
                <a
                  href={`https://www.instagram.com/dreamcornertw/?bean=${bean.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button inline-flex min-h-11 items-center justify-center px-5 py-2 text-xs uppercase tracking-[0.16em] hover:bg-[rgba(208,127,96,0.08)]"
                  aria-label={`詢問 ${bean.nameZh}`}
                >
                  詢問訂購
                </a>
              </div>
            </div>
          </article>
        ))}

        {visibleBeans.length === 0 ? (
          <div className="border-y border-[color:var(--soft-line)] py-12 text-center lg:col-span-3">
            <p className="font-display text-2xl text-espresso">
              找不到符合條件的咖啡豆
            </p>
            <p className="mt-3 text-sm text-[rgba(74,58,47,0.62)]">
              試試其他關鍵字，或清除目前的搜尋與烘焙度條件。
            </p>
            <button
              type="button"
              onClick={resetSearch}
              className="outline-button mt-6 inline-flex min-h-11 items-center justify-center px-5 py-2 text-xs uppercase tracking-[0.16em] hover:bg-[rgba(208,127,96,0.08)]"
            >
              清除條件 Reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

function BeanFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[color:var(--soft-line)] pb-3">
      <dt className="text-[rgba(74,58,47,0.55)]">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}

function RoastMeter({ level }: { level: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(74,58,47,0.5)]">
        <span>Light</span>
        <span>Roast</span>
        <span>Dark</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5" aria-label={`烘焙度 ${level} / 5`}>
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className={`h-2 rounded-full ${
              item <= level ? "bg-terracotta" : "bg-[rgba(74,58,47,0.12)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
