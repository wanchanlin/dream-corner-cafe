import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/app/components/nav";
import { IllustratedMenuTabs } from "../components/menu-tabs";
import styles from "../menu.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dream Corner | 飲品菜單",
  description:
    "Dream Corner 飲品與甜點菜單，以手繪插畫呈現咖啡、無咖啡因飲品與每日甜點。",
};

export default function MenuPage() {
  return (
    
    <div className="min-h-screen bg-cream text-espresso">
      <a
        href="#menu-sections"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-darkgreen"
      >
        跳到菜單內容 Skip to content
      </a>

      <SiteHeader currentPath="/menu" />

      <main id="menu-sections" className={styles.page}>
        <section
          id="top"
          className="leaf-frame relative overflow-hidden border-b border-[color:var(--soft-line)]"
        >

          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center">
            <div className="relative z-10">
              <p className="section-kicker text-xs text-terracotta">Our Menu</p>
              <h1 className="font-display mt-6 text-[clamp(3rem,7vw,6rem)] leading-[0.96] text-espresso">
               飲品菜單
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-[rgba(74,58,47,0.82)]">
               在轉角，找到今天想喝的那一杯。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
                >
                  看菜單 View Menu
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[color:var(--soft-line)] px-7 py-3 text-sm tracking-[0.12em] uppercase text-espresso hover:bg-[rgba(167,179,154,0.12)]"
                >
                  回首頁 Back Home
                </Link>
              </div>
            </div>

            <div className="relative z-10">
              <img
                src="/drinks.webp"
                alt="Dream Corner"
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
              />
            </div>
          </div>
        </section>
        <section className={styles.menuSheet} aria-labelledby="menu-title">
          <header className={styles.intro}>
            <p className={styles.eyebrow}>Menu</p>
            <h1 id="menu-title">飲品菜單</h1>
            <p className={styles.lede}>一杯好咖啡，開啟更好的日常。</p>
          </header>

          <IllustratedMenuTabs />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
