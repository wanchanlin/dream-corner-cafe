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
  "菜單預覽，實際品項與價格以開幕公告為準。";

export const menuEditorialNote =
  "目前可用的飲品名稱與價格來自品牌指南中的 menu style example；冰熱選項、客製內容與正式文案尚未提供，因此此頁先保留可編輯的菜單結構。";

export const menuCategories: MenuCategory[] = [
  {
    id: "classic-coffee",
    nameZh: "經典咖啡",
    nameEn: "Classic Coffee",
    description: "以品牌指南示意稿中已出現的基本咖啡品項整理。",
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
    nameZh: "風味咖啡",
    nameEn: "Signature Coffee",
    description: "目前素材中可辨識的風味款，正式口味說明仍待確認。",
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
];
