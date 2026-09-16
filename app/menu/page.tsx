import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/app/components/site-chrome";
import { LeafIcon, WaveLine } from "@/app/components/site-icons";
import {
  menuCategories,
  menuEditorialNote,
  menuPreviewNotice,
} from "@/app/data/menu";

export const metadata: Metadata = {
  title: "Dream Corner | 飲品菜單",
  description:
    "Dream Corner 飲品菜單頁，延續品牌的奶油與陶土色調，整理目前可確認的飲品示意內容。",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-terracotta"
      >
        跳到菜單內容 Skip to content
      </a>

      <SiteHeader currentPath="/menu" />

      <main id="content" className="flex-1">
        <section
          id="top"
          className="leaf-frame relative overflow-hidden border-b border-[color:var(--soft-line)]"
        >
          <div className="absolute right-0 top-0 hidden h-72 w-72 rounded-full bg-[rgba(167,179,154,0.14)] blur-3xl lg:block" />
          <div className="absolute bottom-10 left-10 hidden h-24 w-24 rounded-full border border-[rgba(208,127,96,0.24)] lg:block" />

          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4">
                <p className="section-kicker text-xs text-terracotta">
                  Our Menu
                </p>
                <WaveLine className="hidden sm:block" />
              </div>
              <h1 className="font-display mt-6 text-[clamp(2.8rem,7vw,5.2rem)] leading-[1.05] text-espresso">
                飲品菜單
              </h1>
              <p className="mt-3 text-[0.8rem] uppercase tracking-[0.32em] text-terracotta">
                Our Menu
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[rgba(74,58,47,0.82)]">
                在轉角，找到今天想喝的那一杯。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
                >
                  回首頁 Back Home
                </Link>
                <a
                  href="#menu-sections"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[color:var(--soft-line)] px-7 py-3 text-sm tracking-[0.12em] uppercase text-espresso hover:bg-[rgba(167,179,154,0.12)]"
                >
                  查看品項 Browse Menu
                </a>
              </div>
            </div>

            <aside className="menu-paper soft-card relative z-10 p-6 sm:p-8">
              <p className="section-kicker text-[0.72rem] text-terracotta">
                Preview
              </p>
              <p className="mt-4 text-base leading-8 text-[rgba(74,58,47,0.82)]">
                {menuPreviewNotice}
              </p>
              <p className="mt-4 text-sm leading-7 text-[rgba(74,58,47,0.72)]">
                {menuEditorialNote}
              </p>
            </aside>
          </div>
        </section>

        <section
          id="menu-sections"
          className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-20"
        >
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-xs text-terracotta">
                Dream Corner
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-espresso sm:text-5xl">
                像一張印刷菜單一樣，
                <br className="hidden sm:block" />
                清楚、留白、好閱讀。
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[rgba(74,58,47,0.74)] sm:text-base">
              現階段只呈現已能從現有素材辨識出的飲品資料；價格靠右、資訊分組、欄位已預留，之後可直接補上正式文案與選項。
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {menuCategories.map((category) => (
              <section
                key={category.id}
                aria-labelledby={`${category.id}-title`}
                className="menu-paper soft-card p-6 sm:p-8"
              >
                <header className="border-b border-[color:var(--soft-line)] pb-5">
                  <h2
                    id={`${category.id}-title`}
                    className="font-display text-3xl text-espresso"
                  >
                    {category.nameZh}
                  </h2>
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.26em] text-terracotta">
                    {category.nameEn}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[rgba(74,58,47,0.76)]">
                    {category.description}
                  </p>
                </header>

                <ul className="divide-y divide-[color:var(--soft-line)]">
                  {category.items.map((item) => (
                    <li
                      key={item.nameEn}
                      className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-[1.7rem] leading-tight text-espresso">
                          {item.nameZh}
                        </p>
                        <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-terracotta">
                          {item.nameEn}
                        </p>

                        {item.description ? (
                          <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.74)]">
                            {item.description}
                          </p>
                        ) : null}

                        {item.servingOptions?.length ? (
                          <p className="mt-3 text-sm text-[rgba(74,58,47,0.74)]">
                            供應方式：{item.servingOptions.join(" / ")}
                          </p>
                        ) : null}

                        {item.customizations?.length ? (
                          <p className="mt-2 text-sm text-[rgba(74,58,47,0.74)]">
                            可調整：{item.customizations.join(" / ")}
                          </p>
                        ) : null}
                      </div>

                      <div className="shrink-0 text-left sm:min-w-28 sm:text-right">
                        <p className="text-lg tracking-[0.08em] text-espresso tabular-nums">
                          NT$ {item.price}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="soft-card mt-8 flex flex-col gap-4 bg-[rgba(255,255,255,0.52)] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker text-[0.72rem] text-terracotta">
                Editing
              </p>
              <p className="mt-3 text-base leading-8 text-[rgba(74,58,47,0.82)]">
                菜單品項與價格目前集中放在獨立資料檔，之後若要補上正式說明、冰熱選項、燕麥奶或其他客製欄位，不需要重改版面。
              </p>
            </div>
            <LeafIcon className="h-12 w-12 shrink-0 text-sage" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
