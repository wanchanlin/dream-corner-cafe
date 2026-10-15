"use client";

import Image from "next/image";
import { useState } from "react";
import { useSiteLanguage } from "@/app/components/language";

type RoastFilter = "all" | "light-medium" | "medium" | "medium-dark";

type Bean = {
  id: string;
  nameZh: string;
  nameEn: string;
  origin: string;
  originEn: string;
  process: string;
  processEn: string;
  roast: string;
  roastLevel: number;
  roastFilter: Exclude<RoastFilter, "all">;
  notes: string[];
  notesEn: string[];
  brew: string;
  brewEn: string;
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
    originEn: "Ethiopia × Colombia",
    process: "水洗 / 日曬",
    processEn: "Washed / Natural",
    roast: "淺中焙",
    roastLevel: 2,
    roastFilter: "light-medium",
    notes: ["柑橘", "焦糖", "花香"],
    notesEn: ["Citrus", "Caramel", "Floral"],
    brew: "手沖 · 美式",
    brewEn: "Pour-over · Americano",
    price: 450,
    color: "#d07f60",
  },
  {
    id: "corner-house",
    nameZh: "街角配方",
    nameEn: "Corner House",
    origin: "巴西 × 哥倫比亞",
    originEn: "Brazil × Colombia",
    process: "日曬 / 水洗",
    processEn: "Natural / Washed",
    roast: "中焙",
    roastLevel: 3,
    roastFilter: "medium",
    notes: ["堅果", "牛奶巧克力", "黑糖"],
    notesEn: ["Nutty", "Milk chocolate", "Brown sugar"],
    brew: "義式 · 拿鐵 · 摩卡壺",
    brewEn: "Espresso · Latte · Moka pot",
    price: 420,
    color: "#75886d",
    featured: true,
  },
  {
    id: "night-island",
    nameZh: "島嶼深夜",
    nameEn: "Island After Dark",
    origin: "巴西 × 印尼",
    originEn: "Brazil × Indonesia",
    process: "日曬 / 濕剝",
    processEn: "Natural / Wet-hulled",
    roast: "中深焙",
    roastLevel: 4,
    roastFilter: "medium-dark",
    notes: ["黑巧克力", "烤堅果", "香料"],
    notesEn: ["Dark chocolate", "Toasted nuts", "Spice"],
    brew: "義式 · 法壓 · 冰滴",
    brewEn: "Espresso · French press · Cold drip",
    price: 430,
    color: "#4a3a2f",
  },
];

export function BeanSelection() {
  const language = useSiteLanguage();
  const isEnglish = language === "en";
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
      bean.originEn,
      bean.process,
      bean.processEn,
      bean.roast,
      bean.brew,
      bean.brewEn,
      ...bean.notes,
      ...bean.notesEn,
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
            {isEnglish ? "Search coffee beans" : "搜尋咖啡豆"}
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
              placeholder={isEnglish ? "Search name, origin, or tasting notes…" : "搜尋名稱、產地或風味…"}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-espresso outline-none placeholder:text-[rgba(74,58,47,0.42)]"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label={isEnglish ? "Clear search" : "清除搜尋"}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg leading-none text-[rgba(74,58,47,0.55)] hover:bg-[rgba(74,58,47,0.08)] hover:text-espresso"
              >
                ×
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-espresso">
            {isEnglish ? "Filter by roast level" : "依烘焙度篩選"}
          </p>
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="group"
            aria-label={isEnglish ? "Filter beans by roast level" : "依烘焙度篩選咖啡豆"}
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
                  <span>{isEnglish ? filter.english : filter.label}</span>
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
        {isEnglish ? `Showing ${visibleBeans.length} coffees` : `顯示 ${visibleBeans.length} 款咖啡豆`}
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
                {isEnglish ? "House Pick" : "店長推薦"}
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
                  {isEnglish ? bean.nameEn : bean.nameZh}
                </h3>
                {!isEnglish && <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-terracotta">{bean.nameEn}</p>}
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
                aria-label={isEnglish ? `${bean.nameEn} tasting notes` : `${bean.nameZh} 風味`}
              >
                {(isEnglish ? bean.notesEn : bean.notes).map((note) => (
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
              <BeanFact label={isEnglish ? "Origin" : "產地"} value={isEnglish ? bean.originEn : bean.origin} />
              <BeanFact label={isEnglish ? "Process" : "處理"} value={isEnglish ? bean.processEn : bean.process} />
              <BeanFact label={isEnglish ? "Roast" : "烘焙"} value={isEnglish ? filterRoastEn(bean.roastFilter) : bean.roast} />
              <BeanFact label={isEnglish ? "Brew" : "沖煮"} value={isEnglish ? bean.brewEn : bean.brew} />
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
                  aria-label={isEnglish ? `Order ${bean.nameEn}` : `詢問 ${bean.nameZh}`}
                >
                  {isEnglish ? "Order" : "詢問訂購"}
                </a>
              </div>
            </div>
          </article>
        ))}

        {visibleBeans.length === 0 ? (
          <div className="border-y border-[color:var(--soft-line)] py-12 text-center lg:col-span-3">
            <p className="font-display text-2xl text-espresso">
              {isEnglish ? "No coffees match those filters" : "找不到符合條件的咖啡豆"}
            </p>
            <p className="mt-3 text-sm text-[rgba(74,58,47,0.62)]">
              {isEnglish ? "Try another keyword or clear your search and roast filters." : "試試其他關鍵字，或清除目前的搜尋與烘焙度條件。"}
            </p>
            <button
              type="button"
              onClick={resetSearch}
              className="outline-button mt-6 inline-flex min-h-11 items-center justify-center px-5 py-2 text-xs uppercase tracking-[0.16em] hover:bg-[rgba(208,127,96,0.08)]"
            >
              {isEnglish ? "Reset filters" : "清除條件"}
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
  const isEnglish = useSiteLanguage() === "en";
  return (
    <div>
      <div className="mb-2 flex justify-between text-[0.62rem] uppercase tracking-[0.18em] text-[rgba(74,58,47,0.5)]">
        <span>{isEnglish ? "Light" : "淺焙"}</span>
        <span>{isEnglish ? "Roast" : "烘焙度"}</span>
        <span>{isEnglish ? "Dark" : "深焙"}</span>
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

function filterRoastEn(filter: Bean["roastFilter"]) {
  if (filter === "light-medium") return "Light–Medium";
  if (filter === "medium-dark") return "Medium–Dark";
  return "Medium";
}
