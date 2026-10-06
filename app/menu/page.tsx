import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/app/components/site-chrome";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Dream Corner | 飲品菜單",
  description:
    "Dream Corner 飲品與甜點菜單，以手繪插畫呈現咖啡、無咖啡因飲品與每日甜點。",
};

type MenuArtwork = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

type IllustratedMenuItem = {
  name: string;
  english: string;
  price: number;
  artwork: MenuArtwork[];
};

const drinks: IllustratedMenuItem[] = [
  {
    name: "美式咖啡（冰/熱）",
    english: "Americano",
    price: 120,
    artwork: [
      {
        src: "/menu-illustrations/americano-hot.png",
        alt: "熱美式咖啡",
        width: 264,
        height: 221,
        className: styles.hotCup,
      },
      {
        src: "/menu-illustrations/americano-iced.png",
        alt: "冰美式咖啡",
        width: 302,
        height: 489,
        className: styles.icedGlass,
      },
    ],
  },
  {
    name: "拿鐵（冰/熱）",
    english: "Latte",
    price: 140,
    artwork: [
      {
        src: "/menu-illustrations/latte-hot.png",
        alt: "熱拿鐵",
        width: 258,
        height: 213,
        className: styles.hotCup,
      },
      {
        src: "/menu-illustrations/latte-iced.png",
        alt: "冰拿鐵",
        width: 191,
        height: 336,
        className: styles.icedGlass,
      },
    ],
  },
  {
    name: "抹茶拿鐵（冰/熱）",
    english: "Matcha Latte",
    price: 150,
    artwork: [
      {
        src: "/menu-illustrations/matcha-hot.png",
        alt: "熱抹茶拿鐵",
        width: 291,
        height: 236,
        className: styles.hotCup,
      },
      {
        src: "/menu-illustrations/matcha-iced.png",
        alt: "冰抹茶拿鐵",
        width: 186,
        height: 334,
        className: styles.icedGlass,
      },
    ],
  },
  {
    name: "康普茶",
    english: "Kombucha",
    price: 150,
    artwork: [
      {
        src: "/menu-illustrations/kombucha.png",
        alt: "柑橘康普茶",
        width: 194,
        height: 339,
        className: styles.tallDrink,
      },
    ],
  },
  {
    name: "卡布奇諾",
    english: "Cappuccino",
    price: 140,
    artwork: [
      {
        src: "/menu-illustrations/cappuccino.png",
        alt: "卡布奇諾",
        width: 299,
        height: 239,
        className: styles.singleCup,
      },
    ],
  },
  {
    name: "焦糖拿鐵（冰/熱）",
    english: "Caramel Latte",
    price: 150,
    artwork: [
      {
        src: "/menu-illustrations/mocha.png",
        alt: "熱焦糖拿鐵",
        width: 259,
        height: 238,
        className: styles.hotCup,
      },
      {
        src: "/menu-illustrations/caramel-iced.png",
        alt: "冰焦糖拿鐵",
        width: 299,
        height: 494,
        className: styles.icedGlass,
      },
    ],
  },
  {
    name: "摩卡",
    english: "Mocha",
    price: 150,
    artwork: [
      {
        src: "/menu-illustrations/mocha.png",
        alt: "摩卡咖啡",
        width: 259,
        height: 238,
        className: styles.singleCup,
      },
    ],
  },
  {
    name: "泰式奶茶",
    english: "Thai Milk Tea",
    price: 140,
    artwork: [
      {
        src: "/menu-illustrations/thai-milk-tea.png",
        alt: "泰式奶茶",
        width: 194,
        height: 332,
        className: styles.tallDrink,
      },
    ],
  },
];

const desserts: IllustratedMenuItem[] = [
  {
    name: "巴斯克乳酪蛋糕",
    english: "Basque Cheesecake",
    price: 150,
    artwork: [
      {
        src: "/menu-illustrations/basque-cheesecake.png",
        alt: "巴斯克乳酪蛋糕",
        width: 387,
        height: 255,
        className: styles.dessertWide,
      },
    ],
  },
  {
    name: "檸檬蛋糕",
    english: "Lemon Cake",
    price: 140,
    artwork: [
      {
        src: "/menu-illustrations/lemon-cake.png",
        alt: "檸檬蛋糕",
        width: 461,
        height: 478,
        className: styles.dessertSquare,
      },
    ],
  },
  {
    name: "香蕉磅蛋糕",
    english: "Banana Bread",
    price: 130,
    artwork: [
      {
        src: "/menu-illustrations/banana-bread.png",
        alt: "香蕉磅蛋糕",
        width: 499,
        height: 484,
        className: styles.dessertSquare,
      },
    ],
  },
  {
    name: "手工餅乾",
    english: "Cookies",
    price: 100,
    artwork: [
      {
        src: "/menu-illustrations/cookies.png",
        alt: "手工巧克力豆餅乾",
        width: 319,
        height: 222,
        className: styles.dessertWide,
      },
    ],
  },
];

function MenuItemCard({
  item,
  dessert = false,
}: {
  item: IllustratedMenuItem;
  dessert?: boolean;
}) {
  return (
    <article className={styles.menuItem}>
      <div
        className={`${styles.artwork} ${dessert ? styles.dessertArtwork : ""}`}
      >
        {item.artwork.map((art) => (
          <Image
            key={art.src}
            src={art.src}
            alt={art.alt}
            width={art.width}
            height={art.height}
            sizes="(max-width: 520px) 22vw, 180px"
            className={art.className}
          />
        ))}
      </div>
      <h3>{item.name}</h3>
      <p className={styles.english}>{item.english}</p>
      <p className={styles.price}>${item.price}</p>
    </article>
  );
}

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

          <nav className={styles.categoryNav} aria-label="菜單分類">
            <a className={styles.activeCategory} href="#coffee-menu">
              咖啡 <span>Coffee</span>
            </a>
            <a href="#coffee-menu">
              無咖啡因 <span>Non-Coffee</span>
            </a>
            <a href="#desserts-menu">
              甜點 <span>Desserts</span>
            </a>
          </nav>

          <div id="coffee-menu" className={styles.menuGrid}>
            {drinks.map((drink) => (
              <MenuItemCard key={drink.english} item={drink} />
            ))}
          </div>

          <section
            id="desserts-menu"
            className={styles.dessertSection}
            aria-labelledby="desserts-title"
          >
            <header>
              <p className={styles.eyebrow}>Desserts</p>
              <h2 id="desserts-title">甜點與日常同樣重要。</h2>
              <p>一片蛋糕，是一段屬於自己的甜時光。</p>
            </header>

            <div className={styles.menuGrid}>
              {desserts.map((dessert) => (
                <MenuItemCard
                  key={dessert.english}
                  item={dessert}
                  dessert
                />
              ))}
            </div>
          </section>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
