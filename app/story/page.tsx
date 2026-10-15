import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/app/components/nav";
import { LeafIcon, PalmMark, SunIcon, WaveLine } from "@/app/components/site-icons";
import { LanguageText } from "@/app/components/language";

export const metadata: Metadata = {
  title: "Dream Corner | 品牌故事",
  description:
    "Dream Corner 的品牌故事，記錄一個想讓平凡日常變得更明亮的青埔咖啡角落。",
};

const storyValues = [
  {
    title: "好咖啡，從一杯開始",
    english: "Good Coffee Starts with a Cup",
    titleEn: "Good Coffee Starts with a Cup",
    description:
      "我們相信，一杯順口、舒服、帶點暖意的咖啡，就能把一天的節奏拉回來。從濃淡到香氣，我們想讓每一口都像一個小小的提醒：慢一點，活得更自在。",
    descriptionEn: "A smooth, comforting cup can bring your day back to a gentler pace. Every sip is a small reminder to slow down and feel at ease.",
    icon: "/coffee.svg",
  },
  {
    title: "甜點與日常同樣重要",
    english: "Desserts Deserve the Same Care",
    titleEn: "Desserts Deserve the Same Care",
    description:
      "不是只有趕時間才需要點一份甜點，任何一個想坐下來喘口氣的下午，都該有屬於自己的甘甜。來到 Dream Corner，讓一片蛋糕、一杯飲品，都成為一種安穩的陪伴。",
    descriptionEn: "Dessert is for any afternoon when you want to sit down and catch your breath. At Dream Corner, a slice of cake and a drink can be a comforting companion.",
    icon: "/cake.svg",
  },
  {
    title: "把熱帶暖意帶進生活",
    english: "Warmth in Everyday Life",
    titleEn: "Warmth in Everyday Life",
    description:
      "品牌靈感來自熱帶海島與街角的人情，帶著光、風與適當的放鬆感。即使在台灣的日常裡，也希望讓人感受到一點不費力的明亮與自在。",
    descriptionEn: "Inspired by tropical islands and neighborhood warmth, our space brings in light, fresh air, and ease, adding a little brightness to everyday life in Taiwan.",
    icon: "/sun.svg",
  },
];

const moments = [
  {
    label: "開始",
    value: "一個想留住日常微光的念頭",
  },
  {
    label: "氣氛",
    value: "自然、輕鬆、舒服地停留一陣子",
  },
  {
    label: "目標",
    value: "成為青埔人想再回來的那個角落",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-terracotta"
      >
        <LanguageText zh="跳到故事內容" en="Skip to story" />
      </a>

      <SiteHeader currentPath="/story" />

      <main id="content" className="flex-1">
        <section
          id="top"
          className="leaf-frame relative overflow-hidden border-b border-[color:var(--soft-line)]"
        >

          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center">
            <div className="relative z-10">
              <p className="section-kicker text-xs text-terracotta"><LanguageText zh="品牌故事" en="Our Story" /></p>
              <h1 className="font-display mt-6 text-[clamp(3rem,7vw,6rem)] leading-[0.96] text-espresso">
                <LanguageText zh="讓每個" en="Make every" />
                <br />
                <LanguageText zh="普通時刻" en="ordinary moment" />
                <br />
                <LanguageText zh="也變亮。" en="a little brighter." />
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-[rgba(74,58,47,0.82)]">
                <LanguageText zh="Dream Corner 來自一個簡單的想法：這個城市需要一個更舒服的角落，讓人能停下來、喝一杯咖啡、安安靜靜地把心情放下來。" en="Dream Corner began with a simple idea: our city needs a more comfortable corner where people can pause, enjoy a coffee, and let their thoughts settle." />
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
                >
                  <LanguageText zh="看菜單" en="View Menu" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-[color:var(--soft-line)] px-7 py-3 text-sm tracking-[0.12em] uppercase text-espresso hover:bg-[rgba(167,179,154,0.12)]"
                >
                  <LanguageText zh="回首頁" en="Back Home" />
                </Link>
              </div>
            </div>

            <div className="relative z-10">
              {/* <div className="soft-card bg-[rgba(255,255,255,0.54)] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[color:var(--soft-line)] pb-5">
                  <div>
                    <p className="section-kicker text-[0.7rem] text-terracotta">
                      Dream Corner
                    </p>
                    <p className="mt-2 font-display text-3xl text-espresso">
                      一個慢下來的地方
                    </p>
                  </div>
                  <PalmMark className="h-12 w-12 text-sage" />
                </div>

                <div className="mt-6 space-y-5 text-base leading-8 text-[rgba(74,58,47,0.8)]">
                  <p>
                    我們希望不把咖啡館當成一個只能匆忙打卡的場所，而是讓人願意久留、想再回來的地方。
                  </p>
                  <p>
                    在青埔，這裡不追求聲音很大，也不需要太多裝飾；我們相信安穩、自然與溫暖，才是最值得長久存在的氣氛。
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {moments.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[color:var(--soft-line)] bg-[rgba(249,246,238,0.7)] p-4">
                      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-terracotta">
                        {item.label}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[rgba(74,58,47,0.8)]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
              <img
                src="/story.webp"
                alt="Dream Corner"
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker text-xs text-terracotta"><LanguageText zh="我們的初衷" en="Why We Exist" /></p>
            <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
              <LanguageText zh="我們想做的，不是熱鬧，" en="We are here for warmth," />
              <br className="hidden sm:block" />
              <LanguageText zh="而是溫暖且值得停留。" en="and a place worth staying awhile." />
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
              <LanguageText zh="有時候，人只是想找個地方坐下來；不是為了辦事，而是為了讓自己回到舒服的節奏。Dream Corner 希望成為這樣的地方：不浮誇、不急促、也不太忙。" en="Sometimes you just need somewhere to sit, not to get things done, but to find a comfortable rhythm again. Dream Corner hopes to be that place: unpretentious, unhurried, and never too busy." />
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {storyValues.map((item) => (
              <article
                key={item.title}
                className="soft-card flex h-full flex-col gap-5 bg-[rgba(255,255,255,0.56)] p-6"
              >
                <Image
                  src={item.icon}
                  alt={item.english}
                  width={52}
                  height={52}
                  className="h-14 w-14"
                />
                <div className="space-y-3">
                  <h3 className="font-display text-2xl leading-snug text-espresso">
                    <LanguageText zh={item.title} en={item.titleEn} />
                  </h3>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-terracotta">
                  </p>
                  <p className="text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                    <LanguageText zh={item.description} en={item.descriptionEn} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[color:var(--soft-line)] bg-[rgba(203,181,155,0.18)]">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
            <div>
              <p className="section-kicker text-xs text-terracotta"><LanguageText zh="空間氛圍" en="The Feeling" /></p>
              <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
                <LanguageText zh="這裡不是很吵的咖啡館，" en="Not the loudest cafe," />
                <br className="hidden sm:block" />
                <LanguageText zh="但一定是讓人想再坐一會的地方。" en="but one that makes you want to stay a little longer." />
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="soft-card bg-[rgba(255,255,255,0.52)] p-6">
                <SunIcon className="h-10 w-10 text-terracotta" />
                <p className="mt-4 font-display text-2xl text-espresso"><LanguageText zh="自然與暖意" en="Natural warmth" /></p>
                <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                  <LanguageText zh="奶油、鼠尾草與黏土色的平衡，讓空間帶著一種從容、放鬆的美感。" en="Cream, sage, and terracotta tones bring a calm, relaxed feeling to the space." />
                </p>
              </div>

              <div className="soft-card bg-[rgba(255,255,255,0.52)] p-6">
                <WaveLine className="h-10 w-10 text-sage" />
                <p className="mt-4 font-display text-2xl text-espresso"><LanguageText zh="慢下來的節奏" en="A slower rhythm" /></p>
                <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                  <LanguageText zh="把工作、煩惱與疲累留在門外；這裡給你一點專屬於自己的空白時間。" en="Leave work, worries, and weariness at the door. Take a little time that belongs only to you." />
                </p>
              </div>

              <div className="soft-card bg-[rgba(255,255,255,0.52)] p-6 sm:col-span-2">
                <LeafIcon className="h-10 w-10 text-sage" />
                <p className="mt-4 font-display text-2xl text-espresso"><LanguageText zh="屬於青埔的日常溫度" en="Everyday warmth in Qingpu" /></p>
                <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.78)]">
                  <LanguageText zh="Dream Corner 最終想提供的，不只是療癒，而是讓每個來過這裡的人都能帶走一點更舒服的心情。這種被照顧的感覺，會慢慢變成想再次相見的理由。" en="Dream Corner hopes to offer more than a place to unwind. We want everyone to leave feeling a little better, with a sense of care that makes them want to come back." />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
