import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/app/components/site-chrome";
import {
  ChairIcon,
  CornerSketchIllustration,
  CroissantIcon,
  CupIcon,
  LeafIcon,
  PalmMark,
  SunIcon,
  WaveLine,
} from "@/app/components/site-icons";
import { menuCategories, menuPreviewNotice } from "@/app/data/menu";

const storyHighlights = [
  {
    title: "好咖啡",
    english: "Good Coffee",
    description: "以日常也想一再回來的那杯咖啡，陪伴每個普通卻值得的時刻。",
    icon: CupIcon,
  },
  {
    title: "美味早午餐",
    english: "Tasty Brunch",
    description: "讓早午餐成為放慢節奏的理由，留下剛剛好的飽足與好心情。",
    icon: CroissantIcon,
  },
  {
    title: "更明亮的每一天",
    english: "Brighter Days",
    description: "把熱帶暖意與街角人情帶進生活裡，讓停留變成一種充電。",
    icon: SunIcon,
  },
  {
    title: "小小角落",
    english: "A Small Corner",
    description: "不追求喧鬧，只想在青埔留一個舒適、自然、容易靠近的位置。",
    icon: ChairIcon,
  },
];

const openingCards = [
  {
    label: "位置",
    english: "Location",
    value: "青埔，台灣",
    detail: "Qingpu, Taiwan",
  },
  {
    label: "營業時間",
    english: "Hours",
    value: "即將公告",
    detail: "To be announced",
  },
  {
    label: "開幕資訊",
    english: "Opening",
    value: "待正式發布",
    detail: "Details coming soon",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-terracotta"
      >
        跳到主要內容 Skip to content
      </a>

      <SiteHeader />

      <main id="content" className="flex-1">
        <section
          id="top"
          className="leaf-frame relative overflow-hidden border-b border-[color:var(--soft-line)]"
        >
          <div className="absolute left-0 top-20 hidden h-56 w-56 rounded-full bg-[rgba(167,179,154,0.14)] lg:block" />
          <div className="absolute bottom-10 right-10 hidden h-28 w-28 rounded-full border border-[rgba(208,127,96,0.26)] lg:block" />

          <div className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl gap-12 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:gap-16">
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="section-kicker text-xs text-terracotta">
                  Coffee • People • A Brighter Tomorrow
                </span>
                <WaveLine className="hidden sm:block" />
              </div>

              <div className="space-y-5">
                <p className="font-latin text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.88] text-espresso">
                  Dream
                  <br />
                  Corner
                </p>
                <div className="flex items-center gap-4">
                  <PalmMark className="h-14 w-14 text-sage" />
                  <p className="max-w-md text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
                    在青埔留下一個溫暖的小角落，用好咖啡、舒服早午餐，陪你把平凡的一天慢慢變亮。
                  </p>
                </div>
                <p className="max-w-lg text-sm uppercase tracking-[0.28em] text-terracotta sm:text-[0.82rem]">
                  A small corner for good coffee, easy brunch, and brighter days.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
                >
                  飲品菜單 View Menu
                </Link>
                <a
                  href="#opening"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[color:var(--soft-line)] px-7 py-3 text-sm tracking-[0.12em] uppercase text-espresso hover:bg-[rgba(167,179,154,0.12)]"
                >
                  營業資訊 Opening Info
                </a>
              </div>

              <div className="grid gap-4 text-sm sm:grid-cols-3">
                <InfoPill
                  label="Coffee"
                  text="用咖啡和溫度，照顧每一個想暫停一下的片刻。"
                />
                <InfoPill
                  label="Brunch"
                  text="早午餐不是趕時間的選項，而是留給自己的節奏。"
                />
                <InfoPill
                  label="Natural"
                  text="奶油、鼠尾草與陶土色，延續品牌裡的自然島嶼感。"
                />
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative border border-[color:var(--soft-line)] bg-[rgba(255,255,255,0.45)] p-4 sm:p-5">
                <div className="absolute left-4 top-4 rounded-full border border-[color:var(--soft-line)] bg-cream px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-terracotta">
                  Brand Guide
                </div>
                <Image
                  src="/dream-corner-brand-guide.png"
                  alt="Dream Corner branding guide with logo, color palette, typography, icons, and storefront mockups."
                  width={1125}
                  height={1402}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="pointer-events-none relative mt-4 ml-auto w-36 rotate-[-7deg] rounded-[1.75rem] border border-[rgba(208,127,96,0.2)] bg-[rgba(249,246,238,0.92)] p-3 text-terracotta shadow-[0_18px_45px_rgba(74,58,47,0.12)] sm:w-40 md:absolute md:-bottom-12 md:-left-4 md:mt-0 md:ml-0 md:w-44 lg:w-52">
                <CornerSketchIllustration className="h-auto w-full" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[color:var(--soft-line)] pt-4">
                <p className="font-display text-xl text-terracotta sm:text-2xl">
                  好咖啡，亮一點的日常
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[rgba(74,58,47,0.62)]">
                  Cream • Sage • Terracotta
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="story"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker text-xs text-terracotta">Our Story</p>
            <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
              一個街角，一點熱帶暖意，
              <br className="hidden sm:block" />
              一份更明亮的日常。
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
              Dream Corner 想把小島的鬆弛與鄰里的親切帶進每天的生活裡。來這裡，不一定要趕著完成什麼，只要喝杯咖啡、吃點早午餐，讓心情慢慢回到舒服的步調。
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.22em] text-terracotta">
              Inspired by tropical warmth, made for everyday pauses in Qingpu.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {storyHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.english}
                  className="soft-card flex h-full flex-col gap-5 bg-[rgba(255,255,255,0.56)] p-6"
                >
                  <Icon className="h-12 w-12 text-terracotta" />
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl leading-snug text-espresso">
                      {item.title}
                    </h3>
                    <p className="text-[0.72rem] uppercase tracking-[0.24em] text-terracotta">
                      {item.english}
                    </p>
                    <p className="text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="menu"
          className="border-y border-[color:var(--soft-line)] bg-[rgba(203,181,155,0.18)]"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-kicker text-xs text-terracotta">Menu</p>
              <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
                飲品菜單已獨立成頁，
                <br />
                版型也準備好了。
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
                我把 Dream Corner 的飲品菜單整理成獨立頁面，延續品牌指南中的奶油、鼠尾草與陶土色，閱讀節奏更像一張真正可以上線的咖啡菜單。
              </p>
              <div
                role="note"
                className="soft-card mt-6 bg-[rgba(255,255,255,0.5)] px-5 py-4 text-sm leading-7 text-[rgba(74,58,47,0.82)]"
              >
                <p className="section-kicker text-[0.68rem] text-terracotta">
                  Preview Note
                </p>
                <p className="mt-2">{menuPreviewNotice}</p>
              </div>
              <Link
                href="/menu"
                className="outline-button mt-6 inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
              >
                前往飲品菜單 Open Menu
              </Link>
            </div>

            <div className="grid gap-5">
              {menuCategories.map((category) => (
                <article
                  key={category.id}
                  className="soft-card bg-cream p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-3 border-b border-[color:var(--soft-line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="font-display text-3xl text-espresso">
                        {category.nameZh}
                      </h3>
                      <p className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-terracotta">
                        {category.nameEn}
                      </p>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                      {category.description}
                    </p>
                  </div>

                  <ul className="divide-y divide-[color:var(--soft-line)]">
                    {category.items.map((item) => (
                      <li
                        key={item.nameEn}
                        className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
                      >
                        <div className="min-w-0">
                          <p className="font-display text-2xl leading-snug text-espresso">
                            {item.nameZh}
                          </p>
                          <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-terracotta">
                            {item.nameEn}
                          </p>
                        </div>
                        <p className="shrink-0 text-left text-lg tracking-[0.08em] text-espresso sm:text-right">
                          NT$ {item.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <article className="soft-card border-terracotta/35 bg-[rgba(249,246,238,0.76)] p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="section-kicker text-[0.68rem] text-terracotta">
                      Editable Data
                    </p>
                    <p className="mt-3 text-base leading-8 text-[rgba(74,58,47,0.85)]">
                      目前示意價格取自品牌指南中的 menu example。若之後有正式品項、冰熱選項或客製資訊，只要更新資料檔，就能同步反映到菜單頁。
                    </p>
                  </div>
                  <LeafIcon className="h-12 w-12 shrink-0 text-sage" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="opening"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="section-kicker text-xs text-terracotta">
                Opening Information
              </p>
              <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
                準備開張的消息，
                <br />
                我們先把位置留好。
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
                為了避免杜撰資訊，這裡只放目前從素材中能確定的內容，並保留了地址、營業時間、聯絡方式與正式開幕日期的欄位。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {openingCards.map((card) => (
                <article
                  key={card.english}
                  className="soft-card flex min-h-48 flex-col justify-between bg-[rgba(255,255,255,0.56)] p-6"
                >
                  <div>
                    <p className="section-kicker text-[0.72rem] text-terracotta">
                      {card.label}
                    </p>
                    <p className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-[rgba(74,58,47,0.58)]">
                      {card.english}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-espresso">
                      {card.value}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[rgba(74,58,47,0.6)]">
                      {card.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function InfoPill({ label, text }: { label: string; text: string }) {
  return (
    <div className="soft-card bg-[rgba(255,255,255,0.56)] px-5 py-4">
      <p className="section-kicker text-[0.68rem] text-terracotta">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[rgba(74,58,47,0.78)]">{text}</p>
    </div>
  );
}
