import Image from "next/image";

const navItems = [
  { href: "#story", label: "品牌故事", english: "Story" },
  { href: "#menu", label: "菜單預覽", english: "Menu" },
  { href: "#opening", label: "營業資訊", english: "Opening" },
];

const storyHighlights = [
  {
    title: "好咖啡 Good Coffee",
    description: "以日常也想一再回來的那杯咖啡，陪伴每個普通卻值得的時刻。",
    icon: CupIcon,
  },
  {
    title: "美味早午餐 Tasty Brunch",
    description: "讓早午餐成為放慢節奏的理由，留下剛剛好的飽足與好心情。",
    icon: CroissantIcon,
  },
  {
    title: "更明亮的每一天 Brighter Days",
    description: "把熱帶暖意與街角人情帶進生活裡，讓停留變成一種充電。",
    icon: SunIcon,
  },
  {
    title: "小小角落 A Small Corner",
    description: "不追求喧鬧，只想在青埔留一個舒適、自然、容易靠近的位置。",
    icon: ChairIcon,
  },
];

const menuPreview = [
  {
    title: "咖啡 Coffee",
    description: "以咖啡作為品牌核心，完整品項與售價將於正式菜單公布。",
    icon: CupIcon,
  },
  {
    title: "早午餐 Brunch",
    description: "品牌方向已確認會有早午餐內容，實際餐點將配合開幕資訊一併公開。",
    icon: CroissantIcon,
  },
  {
    title: "外帶日常 To Go",
    description: "為附近生活節奏準備的日常補給，細節與供應方式待正式公告。",
    icon: ToGoIcon,
  },
];

const openingCards = [
  {
    label: "位置 Location",
    value: "青埔，台灣",
    detail: "Qingpu, Taiwan",
  },
  {
    label: "營業時間 Hours",
    value: "即將公告",
    detail: "To be announced",
  },
  {
    label: "開幕資訊 Opening",
    value: "待正式發布",
    detail: "Details coming soon",
  },
];

export default function Home() {
  return (
    <div className="bg-cream text-espresso">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-terracotta"
      >
        跳到主要內容 Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-[color:var(--soft-line)] bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="min-w-0">
            <span className="font-display block text-2xl tracking-[0.08em] text-espresso sm:text-3xl">
              Dream Corner
            </span>
            <span className="font-latin mt-1 block text-[0.68rem] uppercase tracking-[0.32em] text-terracotta">
              Qingpu, Taiwan
            </span>
          </a>
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-2 md:justify-end"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-espresso hover:bg-[rgba(167,179,154,0.14)] hover:text-terracotta"
              >
                <span>{item.label}</span>
                <span className="font-latin ml-2 text-[0.7rem] uppercase tracking-[0.24em] text-terracotta">
                  {item.english}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="content">
        <section
          id="top"
          className="leaf-frame relative overflow-hidden border-b border-[color:var(--soft-line)]"
        >
          <div className="absolute left-0 top-20 hidden h-56 w-56 rounded-full bg-[rgba(167,179,154,0.14)] lg:block" />
          <div className="absolute bottom-10 right-10 hidden h-28 w-28 rounded-full border border-[rgba(208,127,96,0.26)] lg:block" />
          <div className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl gap-12 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:gap-16">
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="section-kicker font-latin text-xs text-terracotta">
                  Coffee • People • A Brighter Tomorrow
                </span>
                <WaveLine className="hidden sm:block" />
              </div>

              <div className="space-y-5">
                <p className="font-display text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.92] tracking-[0.04em] text-espresso">
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
                <p className="font-latin max-w-lg text-sm uppercase tracking-[0.28em] text-terracotta sm:text-[0.82rem]">
                  A small corner for good coffee, easy brunch, and brighter days.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#menu"
                  className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm tracking-[0.18em] uppercase hover:bg-[rgba(208,127,96,0.08)]"
                >
                  菜單預覽 View Menu
                </a>
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
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[color:var(--soft-line)] pt-4">
                <p className="font-display text-xl italic text-terracotta sm:text-2xl">
                  Good Coffee, Brighter Days
                </p>
                <p className="font-latin text-[0.7rem] uppercase tracking-[0.3em] text-[rgba(74,58,47,0.62)]">
                  Cream • Sage • Terracotta
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker font-latin text-xs text-terracotta">
              Our Story
            </p>
            <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
              一個街角，一點熱帶暖意，
              <br className="hidden sm:block" />
              一份更明亮的日常。
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
              Dream Corner 想把小島的鬆弛與鄰里的親切帶進每天的生活裡。來這裡，不一定要趕著完成什麼，只要喝杯咖啡、吃點早午餐，讓心情慢慢回到舒服的步調。
            </p>
            <p className="font-latin mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.22em] text-terracotta">
              Inspired by tropical warmth, made for everyday pauses in Qingpu.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {storyHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="soft-card flex h-full flex-col gap-5 bg-[rgba(255,255,255,0.56)] p-6"
                >
                  <Icon className="h-12 w-12 text-terracotta" />
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl leading-snug text-espresso">
                      {item.title}
                    </h3>
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
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-kicker font-latin text-xs text-terracotta">
                Menu Preview
              </p>
              <h2 className="font-display mt-5 text-4xl leading-tight text-espresso sm:text-5xl">
                先看方向，
                <br />
                再等完整菜單登場。
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(74,58,47,0.82)] sm:text-lg">
                目前品牌已清楚指向咖啡、早午餐與外帶日常，但正式品項、價格與供應時段尚未提供。我把這一區做成可直接替換內容的真實版型，等你補資料就能上線。
              </p>
            </div>

            <div className="grid gap-5">
              {menuPreview.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="soft-card bg-cream p-6 sm:p-8"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-xl">
                        <h3 className="font-display text-3xl text-espresso">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.8)] sm:text-base">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[color:var(--soft-line)] bg-[rgba(167,179,154,0.12)]">
                        <Icon className="h-8 w-8 text-terracotta" />
                      </div>
                    </div>
                  </article>
                );
              })}

              <article className="soft-card border-terracotta/35 bg-[rgba(249,246,238,0.76)] p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-latin text-xs uppercase tracking-[0.28em] text-terracotta">
                      Missing Content
                    </p>
                    <p className="mt-3 text-base leading-8 text-[rgba(74,58,47,0.85)]">
                      這一頁還缺正式菜單品項、價格、供應時段，以及若有的單品照片或插畫素材。
                    </p>
                  </div>
                  <LeafIcon className="h-12 w-12 shrink-0 text-sage" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="opening" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="section-kicker font-latin text-xs text-terracotta">
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
                  key={card.label}
                  className="soft-card flex min-h-48 flex-col justify-between bg-[rgba(255,255,255,0.56)] p-6"
                >
                  <p className="font-latin text-[0.72rem] uppercase tracking-[0.28em] text-terracotta">
                    {card.label}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-espresso">
                      {card.value}
                    </h3>
                    <p className="font-latin mt-3 text-xs uppercase tracking-[0.22em] text-[rgba(74,58,47,0.6)]">
                      {card.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="soft-card mt-10 flex flex-col gap-5 bg-[rgba(167,179,154,0.12)] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-display text-2xl text-espresso sm:text-3xl">
                待補內容 / Content still needed
              </p>
              <p className="mt-3 text-sm leading-7 text-[rgba(74,58,47,0.8)] sm:text-base">
                正式地址、營業時間、社群連結、開幕日期，以及獨立的 logo / 店景 / 菜單素材目前都尚未提供；現在版面已預留好位置，可以直接接續補上。
              </p>
            </div>
            <a
              href="#top"
              className="outline-button inline-flex min-h-13 items-center justify-center px-7 py-3 text-sm uppercase tracking-[0.18em] hover:bg-[rgba(208,127,96,0.08)]"
            >
              回到上方 Back to Top
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoPill({ label, text }: { label: string; text: string }) {
  return (
    <div className="soft-card bg-[rgba(255,255,255,0.56)] px-5 py-4">
      <p className="font-latin text-[0.68rem] uppercase tracking-[0.28em] text-terracotta">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-[rgba(74,58,47,0.78)]">{text}</p>
    </div>
  );
}

function PalmMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="12" r="7" fill="currentColor" opacity="0.55" />
      <path
        d="M31 20v24M31 36c-5 8-12 10-22 10M31 35c5 8 12 10 22 10M31 28c-6-7-13-8-20-7M31 28c6-7 13-8 20-7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M18 48c8 3 20 3 28 0"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WaveLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 6c8-5 16-5 24 0s16 5 24 0 16-5 24 0 16 5 24 0 16-5 20 0"
        stroke="currentColor"
        strokeWidth="1.8"
        className="text-sage"
      />
    </svg>
  );
}

function CupIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M10 19h18v7a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 21h4a5 5 0 0 1 0 10h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 38h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CroissantIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 31c3-10 9-15 12-15s9 5 12 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 31c2 4 6 6 12 6s10-2 12-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 23c1 4 4 8 7 10M31 23c-1 4-4 8-7 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 7v6M24 35v6M41 24h-6M13 24H7M35.5 12.5 31 17M17 31l-4.5 4.5M35.5 35.5 31 31M17 17l-4.5-4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChairIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M17 13h10a4 4 0 0 1 4 4v9H13v-9a4 4 0 0 1 4-4ZM13 26h18v4H13zM16 30v8M28 30v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToGoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 11h12l2 4H16l2-4ZM16 15h16l-2 21H18l-2-21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 32c8-1 15-8 18-19 3 13-1 24-10 28M17 18c5 4 8 10 9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
