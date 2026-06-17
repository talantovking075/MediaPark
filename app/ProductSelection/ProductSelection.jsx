"use client";

import { useState } from "react";
import Link from "next/link";

/* ════════════════════════════════════════════════════════════════
   1. NEW PROMO BANNER (Yangi aksiya banneri)
   ════════════════════════════════════════════════════════════════ */
function PromoBanner() {
  return (
    <div className="mp-new-banner-container">
      <Link href="/sale/summer-promo">
        <img 
          src="https://cdn.mediapark.uz/imgs/79ab1ca7-6478-4af1-993d-c5843c57ff63_MOB_RU-(172).webp" 
          alt="Mediapark Yangi Banner" 
          className="mp-new-banner-img"
        />
      </Link>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   2. PRODUCT CARD COMPONENT (Mahsulot kartochkasi)
   ════════════════════════════════════════════════════════════════ */
function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  const [compared, setCompared] = useState(false);
  
  const { name, image, monthly, oldPrice, price, discount, badges = [], yandex } = product;

  return (
    <div className="mp-pc-card">
      {/* Chap tomondagi Yandex Plus va Custom Badgelar */}
      <div className="mp-pc-badges-wrapper">
        {yandex && (
          <span className="mp-pc-badge-yandex">
            <span style={{ marginRight: "3px" }}>🎁</span>Yandex Plus
          </span>
        )}
        {badges.map((b, idx) => (
          <span key={idx} className="mp-pc-badge-custom" style={{ background: b.bg, color: b.color }}>
            {b.text}
          </span>
        ))}
      </div>

      {/* O'ng yuqori burchak: Taqqoslash va Saralanganlar tugmalari */}
      <div className="mp-pc-actions-panel">
        <button 
          className={`mp-pc-action-btn ${compared ? "active" : ""}`} 
          onClick={(e) => { e.stopPropagation(); setCompared(!compared); }}
          title="Taqqoslash"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M18 21V10M12 21V4M6 21v-7"/>
          </svg>
        </button>
        <button 
          className={`mp-pc-action-btn ${wished ? "active" : ""}`} 
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          title="Saralanganlar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={wished ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Rasm va uning ustidagi chegirma foizi */}
      <div className="mp-pc-image-container">
        <img src={image} alt={name} className="mp-pc-main-img" />
        {discount && <div className="mp-pc-discount-pill">{discount}</div>}
      </div>

      {/* Mahsulot nomi */}
      <h3 className="mp-pc-title-text" title={name}>{name}</h3>

      {/* Muddatli to'lov ramkasi */}
      {monthly && (
        <div className="mp-pc-installment-badge">
          {monthly} so'm/oyiga
        </div>
      )}

      {/* Narxlar va Qizil Savat tugmasi */}
      <div className="mp-pc-price-section">
        {oldPrice && (
          <div className="mp-pc-old-price">{oldPrice} so'm</div>
        )}
        <div className="mp-pc-row-bottom">
          <span className="mp-pc-current-price">{price} so'm</span>
          <button className="mp-pc-add-to-cart-btn" title="Savatga qo'shish">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   3. GENERIC SECTION COMPONENT (Umumiy bo'lim maketi)
   ════════════════════════════════════════════════════════════════ */
function Section({ title, products, href = "#" }) {
  return (
    <section className="mp-section-container">
      <div className="mp-section-header">
        <h2 className="mp-section-title">{title}</h2>
        <Link href={href} className="mp-section-see-all">
          Barchasi &rsaquo;
        </Link>
      </div>
      <div className="mp-section-products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   4. DATA (Siz yuborgan haqiqiy rasmlar bilan to'ldirilgan data)
   ════════════════════════════════════════════════════════════════ */
const conditionersData = [
  {
    id: 1,
    name: "Konditsioner ARTEL MARVARID 12BE INVERTER",
    image: "https://cdn.mediapark.uz/imgs/e4b8cbce-6ee2-4200-b6e2-b02602a0bf5a_%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D0%BA%D0%B0-(2).webp",
    yandex: false,
    monthly: "410 064",
    oldPrice: "5 564 000",
    price: "3 789 000",
    discount: "-32%",
  },
  {
    id: 2,
    name: "Konditsioner SHIVAKI ELEGANT 12BE INVERTER",
    image: "https://cdn.mediapark.uz/imgs/9567dca0-f48c-4675-a412-8c507bf64ebe_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(6).webp",
    yandex: false,
    monthly: "444 155",
    oldPrice: "5 661 000",
    price: "4 104 000",
    discount: "-28%",
  },
  {
    id: 3,
    name: "Konditsioner AUX ASW-H12A4/CAR",
    image: "https://cdn.mediapark.uz/imgs/2aa72117-f231-4a5a-af30-bbea31d5aead_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(8).webp",
    yandex: false,
    monthly: "486 904",
    oldPrice: "5 142 000",
    price: "4 499 000",
    discount: "-13%",
  },
  {
    id: 4,
    name: "Konditsioner AVALON RUSSEL AW12BE INVERTER",
    image: "https://cdn.mediapark.uz/imgs/13127ded-5b6e-4813-8cf2-8d0c63123290_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(7).webp",
    yandex: false,
    monthly: "578 029",
    oldPrice: "7 483 000",
    price: "5 341 000",
    discount: "-29%",
  },
  {
    id: 5,
    name: "Konditsioner Artel Shahrisabz S FDI 12BE INVERTER",
    image: "https://cdn.mediapark.uz/imgs/0ca16ff3-f2b5-4f67-a7ea-ff0612c0abad_1.webp",
    yandex: false,
    monthly: "462 878",
    oldPrice: "5 200 000",
    price: "4 277 000",
    discount: "-18%",
  },
];

const juicersData = [
  {
    id: 6,
    name: "Kir yuvish mashinasi SAMSUNG WW80AGAS22AE/LD",
    image: "https://cdn.mediapark.uz/imgs/446e9fde-32b2-401b-b34d-a53dc6f82a44_Artboard-1.webp",
    yandex: false,
    monthly: "576 839",
    oldPrice: "8 150 000",
    price: "5 330 000",
    discount: "-35%",
  },
  {
    id: 7,
    name: "Kir yuvish mashinasi LG F2V3PS6J",
    image: "https://cdn.mediapark.uz/imgs/2573506e-1fd3-434b-a124-f7227c8cc4be_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.webp",
    yandex: false,
    monthly: "606 060",
    oldPrice: "7 500 000",
    price: "5 600 000",
    discount: "-25%",
  },
  {
    id: 8,
    name: "Kir yuvish mashinasi LG F2V3PS6W",
    image: "https://cdn.mediapark.uz/imgs/aa3f91b4-99ac-45c7-ae66-55c025b775a0_Artboard-2.webp",
    yandex: false,
    monthly: "595 237",
    oldPrice: "6 900 000",
    price: "5 500 000",
    discount: "-20%",
  },
  {
    id: 9,
    name: "Kir yuvish mashinasi Samsung WW80AG6L28BELD",
    image: "https://cdn.mediapark.uz/imgs/85eb55f5-0752-414b-aaa5-d1f979587028.webp",
    yandex: false,
    monthly: "649 241",
    oldPrice: "8 550 000",
    price: "5 999 000",
    discount: "-30%",
  },
  {
    id: 10,
    name: "Kir yuvish mashinasi avtomat LG F2V5PS2S",
    image: "https://cdn.mediapark.uz/imgs/0a1f65e9-fb05-4e19-a34a-ab1169230664_Artboard-1.webp",
    yandex: false,
    monthly: "622 293",
    oldPrice: "7 499 000",
    price: "5 750 000",
    discount: "-23%",
  },
];

/* ════════════════════════════════════════════════════════════════
   5. STYLES (Mediapark Sayti bilan 1ga1 nusxa CSS)
   ════════════════════════════════════════════════════════════════ */
const componentStyles = `
  .mp-main-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #ffffff;
    padding-bottom: 40px;
  }

  .mp-new-banner-container {
    max-width: 1440px;
    margin: 20px auto;
    padding: 0 20px;
  }

  .mp-new-banner-img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    display: block;
  }

  .mp-section-container {
    max-width: 1440px;
    margin: 0 auto 30px auto;
    padding: 0 20px;
  }

  .mp-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .mp-section-title {
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .mp-section-see-all {
    color: #1f2937;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    background: #f3f4f6;
    padding: 6px 14px;
    border-radius: 20px;
    transition: background 0.2s;
  }

  .mp-section-see-all:hover {
    background: #e5e7eb;
  }

  .mp-section-products-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }

  /* KARTOCHKA DIZAYNI */
  .mp-pc-card {
    background: #ffffff;
    border: 1px solid #f2f2f2;
    border-radius: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 420px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.01);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .mp-pc-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  }

  .mp-pc-badges-wrapper {
    position: absolute;
    top: 14px;
    left: 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 5;
  }

  .mp-pc-badge-yandex {
    background: #7312f3;
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 8px;
    line-height: 1;
  }

  .mp-pc-badge-custom {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 8px;
    line-height: 1;
  }

  .mp-pc-actions-panel {
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 5;
  }

  .mp-pc-action-btn {
    background: #f9f9f9;
    border: none;
    color: #a0aec0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
  }

  .mp-pc-action-btn:hover, .mp-pc-action-btn.active {
    background: #f1f5f9;
    color: #1e293b;
  }

  /* Rasm va Chegirma maydoni */
  .mp-pc-image-container {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 5px;
    position: relative;
  }

  .mp-pc-main-img {
    max-width: 95%;
    max-height: 95%;
    object-fit: contain;
    user-select: none;
  }

  .mp-pc-discount-pill {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #facc15;
    color: #000000;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 10px;
    line-height: 1;
  }

  /* Sarlavha */
  .mp-pc-title-text {
    font-size: 14px;
    font-weight: 500;
    color: #0f172a;
    line-height: 1.4;
    height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 12px 0;
  }

  /* To'lov Tugmasi */
  .mp-pc-installment-badge {
    align-self: flex-start;
    border: 1px solid #1d4ed8;
    color: #1d4ed8;
    font-size: 13px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: 8px;
    margin-bottom: auto;
    background: transparent;
  }

  /* Narxlar va Savat */
  .mp-pc-price-section {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }

  .mp-pc-old-price {
    font-size: 12px;
    color: #94a3b8;
    text-decoration: line-through;
    margin-bottom: 2px;
    line-height: 1;
    height: 12px;
  }

  .mp-pc-row-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mp-pc-current-price {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    line-height: 1;
  }

  .mp-pc-add-to-cart-btn {
    background: #e8162b;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s;
  }

  .mp-pc-add-to-cart-btn:hover {
    background: #c61324;
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .mp-section-products-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 768px) {
    .mp-section-products-grid { grid-template-columns: repeat(2, 1fr); }
    .mp-section-title { font-size: 18px; }
  }
`;

/* ════════════════════════════════════════════════════════════════
   6. MAIN EXPORT COMPONENT
   ════════════════════════════════════════════════════════════════ */
export default function ProductSections() {
  return (
    <div className="mp-main-wrapper">
      <style>{componentStyles}</style>
      
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* Konditsionerlar bo'limi */}
      <Section 
        title="Aqlli sovitish" 
        products={conditionersData} 
        href="/category/conditioners"
      />
      
      {/* Kir yuvish mashinalari bo'limi */}
      <Section 
        title="Aqlli yuvish — aqlli narxda!" 
        products={juicersData} 
        href="/category/washers"
      />
    </div>
  );
}