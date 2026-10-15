"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSiteLanguage } from "@/app/components/language";

const navItems = [
  { href: "/story", label: "品牌故事", english: "Story" },
  { href: "/menu", label: "菜單", english: "Menu" },
  { href: "/beans", label: "咖啡豆", english: "Beans" },
  { href: "/#opening", label: "營業資訊", english: "Opening" },
];

const footerMenuItems = [
  { href: "/", label: "回首頁", english: "Home" },
  ...navItems,
];

const socialItems = [
  {
    href: "https://www.instagram.com/dreamcornertw/",
    label: "Instagram",
    detail: "@dreamcornertw",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    detail: "Dream Corner Cafe",
  },
  {
    href: "https://line.me",
    label: "LINE",
    detail: "Chat with us",
    detailZh: "歡迎私訊我們",
  },
];

type SiteHeaderProps = {
  currentPath?: "/" | "/menu" | "/story" | "/beans";
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  const language = useSiteLanguage();

  function toggleLanguage() {
    const nextLanguage = language === "zh-TW" ? "en" : "zh-TW";
    window.localStorage.setItem("dream-corner-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.dispatchEvent(new CustomEvent("dream-corner-language-change", { detail: nextLanguage }));
  }

  const isEnglish = language === "en";
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--soft-line)] bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-4 px-5 py-4 sm:px-8 md:items-center">
        <Link href="/" className="relative z-[60] min-w-0">
          {/* <span className="font-latin block text-[2.2rem] leading-none text-espresso sm:text-[2.7rem]">
            Dream Corner
          </span> */}
          <img
            src="/logo.svg"
            alt="Dream Corner"
      
        
            className="h-10 w-auto"
          />       
        </Link>

        <nav
          aria-label={isEnglish ? "Primary" : "主選單"}
          className="hidden flex-wrap items-center gap-2 md:flex md:justify-end"
        >
          {navItems.map((item) => {
            const isCurrent =
              (currentPath === "/menu" && item.href === "/menu") ||
              (currentPath === "/story" && item.href === "/story") ||
              (currentPath === "/beans" && item.href === "/beans");

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-[rgba(167,179,154,0.14)] hover:text-terracotta ${
                  isCurrent
                    ? "bg-[rgba(208,127,96,0.1)] text-terracotta"
                    : "text-espresso"
                }`}
              >
                <span>{isEnglish ? item.english : item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={isEnglish ? "Switch to Traditional Chinese" : "切換至英文"}
          className="shrink-0 rounded-full border border-[color:var(--soft-line)] px-3 py-2 text-xs font-medium text-espresso transition-colors hover:bg-[rgba(167,179,154,0.14)]"
        >
          {isEnglish ? "繁體中文" : "EN"}
        </button>

        <details className="group static md:hidden">
          <summary className="nav-summary relative z-[60] flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-full bg-[ px-4 text-espresso ">
            <span className="sr-only">{isEnglish ? "Open menu" : "開啟選單"}</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-5 rounded-full bg-current transition-transform group-open:translate-y-[7px] group-open:rotate-45" />
              <span className="block h-[2px] w-5 rounded-full bg-current transition-opacity group-open:opacity-0" />
              <span className="block h-[2px] w-5 rounded-full bg-current transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>

          <nav
            aria-label={isEnglish ? "Mobile primary" : "手機版主選單"}
            className="fixed inset-0 z-50 flex min-h-screen flex-col bg-[linear-gradient(180deg,rgba(239,229,216,0.96))] px-5 pb-10 pt-28"
          >
           

            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
              <div className="mb-6 text-[0.72rem] uppercase tracking-[0.3em] text-terracotta">
                {isEnglish ? "Dream Corner Menu" : "夢角咖啡選單"}
              </div>

              <div className="flex flex-1 flex-col justify-center gap-3">
                {navItems.map((item) => {
                  const isCurrent =
                    (currentPath === "/menu" && item.href === "/menu") ||
                    (currentPath === "/story" && item.href === "/story") ||
                    (currentPath === "/beans" && item.href === "/beans");

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`rounded-[1.75rem]  px-6 py-5 text-2xl leading-tight transition-colors ${
                        isCurrent
                          ? "bg-[rgba(208,127,96,0.12)] text-terracotta"
                          : "bg-[ text-espresso hover:bg-[rgba(167,179,154,0.14)] hover:text-terracotta"
                      }`}
                    >
                      <span className="font-display block">
                        {isEnglish ? item.english : item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-[color:var(--soft-line)] pt-6 text-sm text-[rgba(74,58,47,0.72)]">
                <p>{isEnglish ? "Good coffee, easy brunch, brighter days." : "好咖啡、悠閒早午餐，讓每一天更明亮。"}</p>
                <p className="section-kicker text-[0.68rem] text-terracotta">
                  Qingpu
                </p>
              </div>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const [language, setLanguage] = useState<"en" | "zh-TW">("zh-TW");

  useEffect(() => {
    const syncLanguage = (event?: Event) => {
      const changed = (event as CustomEvent<"en" | "zh-TW"> | undefined)?.detail;
      setLanguage(changed ?? (window.localStorage.getItem("dream-corner-language") === "en" ? "en" : "zh-TW"));
    };
    syncLanguage();
    window.addEventListener("dream-corner-language-change", syncLanguage);
    return () => window.removeEventListener("dream-corner-language-change", syncLanguage);
  }, []);

  const isEnglish = language === "en";
  return (
    <footer className="border-t border-[color:var(--soft-line)] bg-[rgba(255,255,255,0.42)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-start">
        <div className="max-w-xl">
          <p className="font-latin text-[2.4rem] leading-none text-espresso">
            Dream Corner
          </p>
          <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.8)]">
            {isEnglish
              ? "A quiet neighborhood cafe in Qingpu, serving carefully made coffee, easy brunch, and little moments worth slowing down for."
              : "藏身青埔巷弄的溫暖角落，細心沖煮咖啡、準備悠閒早午餐，陪你放慢腳步，享受日常片刻。"}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="outline-button inline-flex min-h-12 items-center justify-center px-5 py-3 text-sm tracking-[0.14em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
            >
              {isEnglish ? "Home" : "首頁"}
            </Link>
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--soft-line)] px-5 py-3 text-sm tracking-[0.14em] uppercase text-espresso hover:bg-[rgba(167,179,154,0.12)]"
            >
              {isEnglish ? "Menu" : "菜單"}
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer" className="min-w-0">
            <p className="section-kicker text-[0.72rem] text-terracotta">
              {isEnglish ? "Explore" : "網站導覽"}
            </p>
            <ul className="mt-4 space-y-3">
              {footerMenuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-3 text-sm text-espresso hover:text-terracotta"
                  >
                    <span>{isEnglish ? item.english : item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="section-kicker text-[0.72rem] text-terracotta">
              {isEnglish ? "Follow Along" : "追蹤我們"}
            </p>
            <ul className="mt-4 space-y-3">
              {socialItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-espresso hover:text-terracotta"
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.68rem] uppercase tracking-[0.16em] text-[rgba(74,58,47,0.58)]">
                      {isEnglish ? item.detail : item.detailZh ?? item.detail}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
