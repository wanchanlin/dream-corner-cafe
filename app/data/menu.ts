export type MenuItem = {
  nameZh: string;
  nameEn: string;
  price: number;
  description?: string;
  servingOptions?: string[];
  customizations?: string[];
};

export type MenuCategory = {
  id: string;
  nameZh: string;
  nameEn: string;
  description: string;
  items: MenuItem[];
};

export const menuPreviewNotice =
  "This is a soft-launch menu preview. Final items, flavors, and pricing can still be adjusted before opening.";

export const menuEditorialNote =
  "All menu content lives in this shared data file, so updating or adding drinks here will automatically refresh both the homepage preview and the full menu page.";

export const menuCategories: MenuCategory[] = [
  {
    id: "classic-coffee",
    nameZh: "經典咖啡",
    nameEn: "Classic Coffee",
    description:
      "Simple, balanced coffee favorites for everyday starts and easy afternoon breaks.",
    items: [
      {
        nameZh: "美式咖啡",
        nameEn: "Americano",
        price: 90,
      },
      {
        nameZh: "拿鐵",
        nameEn: "Latte",
        price: 110,
      },
      {
        nameZh: "卡布奇諾",
        nameEn: "Cappuccino",
        price: 120,
      },
    ],
  },
  {
    id: "signature-coffee",
    nameZh: "招牌咖啡",
    nameEn: "Signature Coffee",
    description:
      "Comforting house favorites with a slightly sweeter, more playful Dream Corner character.",
    items: [
      {
        nameZh: "摩卡",
        nameEn: "Mocha",
        price: 120,
      },
      {
        nameZh: "焦糖拿鐵",
        nameEn: "Caramel Latte",
        price: 130,
      },
    ],
  },
  {
    id: "kombucha",
    nameZh: "康普茶",
    nameEn: "Kombucha",
    description:
      "Lightly sparkling fermented tea with bright fruit notes and a refreshing finish.",
    items: [
      {
        nameZh: "原味康普茶",
        nameEn: "Original Kombucha",
        price: 140,
        description: "Clean, crisp, and gently tart with a natural tea finish.",
      },
      {
        nameZh: "柚香康普茶",
        nameEn: "Citrus Kombucha",
        price: 150,
        description: "Sunny citrus flavor with lively sparkle and soft acidity.",
      },
      {
        nameZh: "莓果康普茶",
        nameEn: "Berry Kombucha",
        price: 150,
        description:
          "Fresh berry notes layered over a mellow fermented tea base.",
      },
    ],
  },
];
