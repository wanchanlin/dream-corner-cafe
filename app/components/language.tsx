"use client";

import { useEffect, useState } from "react";

export type SiteLanguage = "en" | "zh-TW";

export function useSiteLanguage() {
  const [language, setLanguage] = useState<SiteLanguage>("zh-TW");

  useEffect(() => {
    const update = (event?: Event) => {
      const detail = (event as CustomEvent<SiteLanguage> | undefined)?.detail;
      const nextLanguage =
        detail ??
        (window.localStorage.getItem("dream-corner-language") === "en"
          ? "en"
          : "zh-TW");
      setLanguage(nextLanguage);
      document.documentElement.lang = nextLanguage;
    };
    update();
    window.addEventListener("dream-corner-language-change", update);
    return () => window.removeEventListener("dream-corner-language-change", update);
  }, []);

  return language;
}

export function LanguageText({
  zh,
  en,
}: {
  zh: string;
  en: string;
}) {
  return useSiteLanguage() === "en" ? en : zh;
}
