import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/app/components/site-chrome";
import { LeafIcon, WaveLine } from "@/app/components/site-icons";

export const metadata: Metadata = {
  title: "Dream Corner | 新鮮烘焙咖啡豆",
  description:
    "選擇適合手沖、義式與日常黑咖啡的 Dream Corner 新鮮烘焙咖啡豆，了解風味、烘焙度與訂購方式。",
};

const beans = [
  {
    id: "morning-light",
    nameZh: "晨光配方",
    nameEn: "Morning Light",
    origin: "衣索比亞 × 哥倫比亞",
    process: "水洗 / 日曬",
    roast: "淺中焙",
    roastLevel: 2,
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
    notes: ["黑巧克力", "烤堅果", "香料"],
    brew: "義式 · 法壓 · 冰滴",
    price: 430,
    color: "#4a3a2f",
  },
];

const roastGuide = [
  {
    level: "淺焙 Light",
    taste: "明亮、果香、酸甜清楚",
    brew: "適合手沖與喜歡產地特色的人",
  },
  {
    level: "中焙 Medium",
    taste: "甜感、堅果、平衡順口",
    brew: "適合美式、拿鐵與每天喝的咖啡",
  },
  {
    level: "深焙 Dark",
    taste: "厚實、可可、低酸度",
    brew: "適合義式、奶咖與偏好濃郁口感的人",
  },
];

export default function BeansPage() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-terracotta"
      >
        跳到咖啡豆內容 Skip to content
      </a>

      <SiteHeader currentPath="/beans" />

      <main id="content" className="flex-1">
        <section className="relative overflow-hidden border-b border-[color:var(--soft-line)]">
          <div className="absolute -right-28 top-14 h-80 w-80 rounded-full bg-[rgba(167,179,154,0.18)]" />
          <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full border border-[rgba(208,127,96,0.22)]" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.78fr)] lg:items-center">
            <div>
              <p className="section-kicker text-xs text-terracotta">
                Roasted Coffee Beans
              </p>
              <h1 className="font-display mt-6 max-w-3xl text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.98] text-espresso [text-wrap:balance]">
                把剛烘好的香氣，
                <br />
                帶回你的日常。
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[rgba(74,58,47,0.82)]">
                Dream Corner 提供小批次新鮮烘焙咖啡豆。從清爽果香到濃厚可可感，依照你使用的器具與喜歡的味道，找到適合的一包。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#selection"
                  className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm uppercase tracking-[0.18em] hover:bg-[rgba(208,127,96,0.08)]"
                >
                  選擇咖啡豆 Shop Beans
                </a>
                <a
                  href="#roast-guide"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[color:var(--soft-line)] px-7 py-3 text-sm uppercase tracking-[0.12em] text-espresso hover:bg-[rgba(167,179,154,0.12)]"
                >
                  看烘焙指南 Roast Guide
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="soft-card relative overflow-hidden bg-darkgreen p-7 text-cream shadow-[0_24px_70px_rgba(74,58,47,0.18)] sm:p-9">
                <div className="flex items-start justify-between gap-5 border-b border-white/20 pb-6">
                  <div>
                    <p className="section-kicker text-[0.68rem] text-[rgba(249,246,238,0.65)]">
                      House Roast No. 02
                    </p>
                    <p className="font-display mt-3 text-4xl leading-none">
                      街角配方
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-sage">
                      Corner House
                    </p>
                  </div>
                  <Image
                    src="/coffee-bean.svg"
                    alt=""
                    width={64}
                    height={66}
                    className="h-16 w-16 brightness-0 invert"
                    priority
                  />
                </div>

                <dl className="mt-7 space-y-4 text-sm">
                  <BeanFact label="風味 Taste" value="堅果 · 巧克力 · 黑糖" />
                  <BeanFact label="烘焙 Roast" value="中焙 Medium" />
                  <BeanFact label="適合 Brew" value="義式 · 拿鐵 · 摩卡壺" />
                  <BeanFact label="規格 Size" value="250 g" />
                </dl>

                <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/20 pt-6">
                  <p className="text-xs leading-5 text-[rgba(249,246,238,0.64)]">
                    Whole bean or ground
                    <br />
                    可選原豆或研磨
                  </p>
                  <p className="font-display text-3xl">NT$ 420</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs leading-6 text-[rgba(74,58,47,0.6)]">
                豆單與價格依當期批次調整，訂購前請確認最新供應。
              </p>
            </div>
          </div>
        </section>

        <section
          id="selection"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24"
        >
          <div className="grid gap-8 border-b border-[color:var(--soft-line)] pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-kicker text-xs text-terracotta">
                Current Selection
              </p>
              <p className="mt-3 text-sm text-[rgba(74,58,47,0.65)]">
                每包 250 g · 小批次烘焙
              </p>
            </div>
            <h2 className="font-display text-4xl leading-tight text-espresso sm:text-5xl [text-wrap:balance]">
              先選你想喝到的味道，
              <br className="hidden sm:block" />
              再決定怎麼沖。
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {beans.map((bean) => (
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
                  <ul className="flex flex-wrap gap-2" aria-label={`${bean.nameZh} 風味`}>
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
                  <BeanFact label="產地 Origin" value={bean.origin} dark={false} />
                  <BeanFact label="處理 Process" value={bean.process} dark={false} />
                  <BeanFact label="烘焙 Roast" value={bean.roast} dark={false} />
                  <BeanFact label="沖煮 Brew" value={bean.brew} dark={false} />
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
          </div>
        </section>

        <section
          id="roast-guide"
          className="border-y border-[color:var(--soft-line)] bg-[rgba(203,181,155,0.18)]"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-kicker text-xs text-terracotta">
                Roast Guide
              </p>
              <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
                烘焙度不是強弱，
                <br />
                是風味的方向。
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[rgba(74,58,47,0.8)]">
                淺焙保留更多花果香，中焙讓甜感與平衡更明顯，深焙則帶出厚實可可與烘烤氣息。沒有最好，只有更適合你的沖煮方式。
              </p>
              <WaveLine className="mt-8 h-6 w-36 text-sage" />
            </div>

            <ol className="border-t border-[color:var(--soft-line)]">
              {roastGuide.map((item, index) => (
                <li
                  key={item.level}
                  className="grid gap-4 border-b border-[color:var(--soft-line)] py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start"
                >
                  <span className="text-sm text-terracotta">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl text-espresso">
                      {item.level}
                    </h3>
                    <p className="mt-2 text-sm text-[rgba(74,58,47,0.68)]">
                      {item.taste}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                    {item.brew}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="soft-card grid gap-8 bg-darkgreen p-7 text-cream sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div>
              <p className="section-kicker text-xs text-sage">How to Order</p>
              <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
                告訴我們你怎麼沖，
                <br className="hidden sm:block" />
                我們幫你挑一包。
              </h2>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[rgba(249,246,238,0.72)]">
                <span>① 選豆與數量</span>
                <span>② 原豆或研磨</span>
                <span>③ 確認取貨與付款</span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/dreamcornertw/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-cream px-7 py-3 text-sm uppercase tracking-[0.16em] text-cream hover:bg-cream hover:text-darkgreen"
            >
              Instagram 詢問訂購 ↗
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-[color:var(--soft-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <LeafIcon className="h-10 w-10 text-sage" />
              <p className="max-w-2xl text-sm leading-7 text-[rgba(74,58,47,0.72)]">
                咖啡豆為農產品，每批風味與供應可能不同。頁面為販售說明，實際豆單、烘焙日與價格請以訂購回覆為準。
              </p>
            </div>
            <Link
              href="/menu"
              className="shrink-0 text-sm uppercase tracking-[0.16em] text-terracotta hover:text-espresso"
            >
              看店內飲品 Menu →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function BeanFact({
  label,
  value,
  dark = true,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-start justify-between gap-4 border-b pb-3 ${
        dark ? "border-white/15" : "border-[color:var(--soft-line)]"
      }`}
    >
      <dt className={dark ? "text-[rgba(249,246,238,0.58)]" : "text-[rgba(74,58,47,0.55)]"}>
        {label}
      </dt>
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
