"use client";

import Image from "next/image";
import { type KeyboardEvent, useRef, useState } from "react";
import styles from "../menu.module.css";

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

type Category = "coffee" | "non-coffee" | "desserts";

const tabs: Array<{ id: Category; label: string; english: string }> = [
  { id: "coffee", label: "咖啡", english: "Coffee" },
  { id: "non-coffee", label: "無咖啡因", english: "Non-Coffee" },
  { id: "desserts", label: "甜點", english: "Desserts" },
];

const coffee: IllustratedMenuItem[] = [
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
];

const nonCoffee: IllustratedMenuItem[] = [
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

export function IllustratedMenuTabs() {
  const [activeTab, setActiveTab] = useState<Category>("coffee");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectTab = (category: Category, focus = false) => {
    const tabIndex = tabs.findIndex((tab) => tab.id === category);
    setActiveTab(category);

    if (focus) {
      tabRefs.current[tabIndex]?.focus();
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      selectTab(tabs[nextIndex].id, true);
    }
  };

  const visibleItems =
    activeTab === "coffee"
      ? coffee
      : activeTab === "non-coffee"
        ? nonCoffee
        : desserts;

  return (
    <>
      <div className={styles.categoryNav} role="tablist" aria-label="菜單分類">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`${tab.id}-tab`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              tabIndex={isActive ? 0 : -1}
              className={isActive ? styles.activeCategory : undefined}
              onClick={() => selectTab(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label} <span>{tab.english}</span>
            </button>
          );
        })}
      </div>

      <section
        key={activeTab}
        id={`${activeTab}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
        className={`${styles.tabPanel} ${
          activeTab === "desserts" ? styles.dessertPanel : ""
        }`}
      >
        {activeTab === "desserts" ? (
          <header className={styles.dessertHeading}>
            {/* <p className={styles.eyebrow}>Desserts</p> */}
            {/* <h2>甜點與日常同樣重要。</h2>
            <p>一片蛋糕，是一段屬於自己的甜時光。</p> */}
          </header>
        ) : null}

        <div className={styles.menuGrid}>
          {visibleItems.map((item) => (
            <MenuItemCard
              key={item.english}
              item={item}
              dessert={activeTab === "desserts"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
