"use client";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard"; // O'zingizni papkangizga qarab yo'lni to'g'rilang

// 1. Yangiliklar bo'limi uchun 5 ta mahsulot (Siz yuborgan birinchi 5 ta rasm)
const yangiliklarProducts = [
  {
    id: 1,
    name: "Konstruktor LEGO Editions 43020 FIFA Jahon chempionati rasmiy...",
    image: "https://cdn.mediapark.uz/imgs/536b96cb-e1dc-430f-8c92-f497f15ab5a2_1.webp",
    monthly: "470 778",
    price: "4 350 000",
    badges: [{ text: "Faqat onlayn", bg: "#2563eb", color: "#fff" }],
  },
  {
    id: 2,
    name: "Smartfon HONOR 200 8/256GB Orange",
    image: "https://cdn.mediapark.uz/imgs/23b7aa1d-d1c9-4ad8-9f52-f43c3b17e3ef_1.webp",
    monthly: "733 440",
    price: "6 777 000",
    badges: [{ text: "IMEI ✓", bg: "#16a34a", color: "#fff" }],
  },
  {
    id: 3,
    name: "Smartfon Xiaomi Redmi A3 Pro 4/128 Mist Blue",
    image: "https://cdn.mediapark.uz/imgs/4e883928-3e58-4059-b57c-5567d470f790_1.webp",
    monthly: "189 069",
    price: "1 747 000",
    badges: [{ text: "IMEI ✓", bg: "#16a34a", color: "#fff" }],
  },
  {
    id: 4,
    name: "Televizor Samsung UE55M70HAUXUZ",
    image: "https://cdn.mediapark.uz/imgs/8d8fa9ad-f0ba-4f99-a93c-2d6d35ef0c3a_1.webp",
    monthly: "1 234 739",
    price: "11 409 000",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
  {
    id: 5,
    name: "Konditsioner LG WZ12AWN Inverter Pro",
    image: "https://cdn.mediapark.uz/imgs/de66b568-72a8-408e-b8ba-964fc2a99d26_1.webp",
    monthly: "599 891",
    oldPrice: "6 449 000",
    price: "5 543 000",
    discount: "-14%",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
];

// 2. Televizorlar bo'limi uchun 5 ta mahsulot (Siz yuborgan keyingi 5 ta rasm)
const televizorProducts = [
  {
    id: 6,
    name: "Televizor Artel Prime Edition Google Tv UHD A55MQ9700",
    image: "https://cdn.mediapark.uz/imgs/083018c3-6c55-4f9c-a21e-d1975ee98042_TV11300.webp",
    monthly: "541 125",
    oldPrice: "7 825 000",
    price: "5 000 000",
    discount: "-36%",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
  {
    id: 7,
    name: "Televizor Samsung Vision AI Smart TV QE55Q7FAAUXUZ",
    image: "https://cdn.mediapark.uz/imgs/46fad57c-4805-413d-ad24-5b708a4c8440_Televizor-SAMSUNG-QE55Q7FAAUXUZ.webp",
    monthly: "757 575",
    oldPrice: "10 600 000",
    price: "7 000 000",
    discount: "-34%",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
  {
    id: 8,
    name: "Televizor LG Nanocell AI 4K 50NANO81A6A",
    image: "https://cdn.mediapark.uz/imgs/c27a9da0-079f-429f-bb5c-87cd80e4beb6_c25af4f178957c0b73d37c37929e4714ea6238a4530d376bce153a9ad28352fe.jpg.webp",
    monthly: "687 228",
    oldPrice: "8 300 000",
    price: "6 350 000",
    discount: "-23%",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
  {
    id: 9,
    name: "Televizor Smart TV LG Nanocell AI NANO80 50NANO80A6B",
    image: "https://cdn.mediapark.uz/imgs/a9a32066-6d57-4fe7-b7c5-99dc3903459d_Televizor-LG-50NANO80A6B.webp",
    monthly: "676 406",
    oldPrice: "8 315 000",
    price: "6 250 000",
    discount: "-25%",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
  {
    id: 10,
    name: "Televizor ARTEL A55M9000",
    image: "https://cdn.mediapark.uz/imgs/a609ec75-5935-4bae-8f28-e1b0b22c0a5f_1.webp",
    monthly: "482 683",
    oldPrice: "6 530 000",
    price: "4 460 000",
    discount: "-32%",
    badges: [{ text: "Yandex Plus", bg: "#4f46e5", color: "#fff" }],
  },
];

export default function NewProducts() {
  return (
    <>
      <style>{`
        .section-wrapper {
          padding: 24px 20px;
          max-width: 1440px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .block-container {
          margin-bottom: 40px; /* Ikki blok orasidagi masofa */
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-all-link {
          color: #1f2937;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          background: #f3f4f6;
          padding: 6px 14px;
          border-radius: 20px;
          transition: background 0.2s ease;
        }
        
        .section-all-link:hover {
          background: #e5e7eb;
        }

        /* 5 ta yonma-yon ustunli Mediapark grid tizimi */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        @media (max-width: 1200px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
          .section-title { font-size: 18px; }
        }
      `}</style>

      <div className="section-wrapper">
        
        {/* 1-QATOR: YANGILIKLAR BLOKI */}
        <div className="block-container">
          <div className="section-header">
            <h2 className="section-title">Yangiliklar</h2>
            <Link href="#" className="section-all-link">
              Barchasi &rsaquo;
            </Link>
          </div>
          <div className="products-grid">
            {yangiliklarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* 2-QATOR: TELEVIZORLAR BLOKI */}
        <div className="block-container">
          <div className="section-header">
            <h2 className="section-title">
              🌏 Yorqin lahzalar uchun televizorlar!
            </h2>
            <Link href="#" className="section-all-link">
              Barchasi &rsaquo;
            </Link>
          </div>
          <div className="products-grid">
            {televizorProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}