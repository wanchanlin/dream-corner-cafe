import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/app/components/site-chrome";
import { IllustratedMenuTabs } from "../components/menu-tabs";
import styles from "../menu.module.css";

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
