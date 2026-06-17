"use client";
import { useState, useEffect } from "react";

// Asosiy slider rasmlari (chap tomon uchun)
const slides = [
  { id: 1, imgUrl: "https://cdn.mediapark.uz/imgs/94b4bf73-d67d-45dd-8ceb-5bd448ac56eb_New-UZ.webp" },
  { id: 2, imgUrl: "https://cdn.mediapark.uz/imgs/ade75735-640b-4c83-bc35-3bb8f7931b49_WEB-uz-(74).webp" },
  { id: 3, imgUrl: "https://cdn.mediapark.uz/imgs/162cce2a-2ea1-4f57-81d9-80b45da80cab_WEB_UZ-(182).webp" },
  { id: 4, imgUrl: "https://cdn.mediapark.uz/imgs/d15c5992-0fb4-4aa4-ba80-5a1926569fb5_WEB_UZ-(180).webp" },
];

// Kun mahsulotlari ro'yxati (o'ng tomon uchun)
const dailyProducts = [
  {
    id: 1,
    name: "Barbekyu BBQ-2020B",
    monthly: "76 623 so'm / oy",
    oldPrice: "1 206 000",
    price: "724 000",
    discount: "-40%",
    imgUrl: "https://cdn.mediapark.uz/imgs/3f531007-18c9-4566-b5bb-472886c57aed_Artboard3-1300.webp",
  },
  {
    id: 2,
    name: "Sovutgich Artel HD 345",
    monthly: "124 800 so'm / oy",
    oldPrice: "2 150 000",
    price: "1 498 000",
    discount: "-30%",
    imgUrl: "https://cdn.mediapark.uz/imgs/112191a7-e159-4fee-984a-9551fbe1e31e_Artboard-1.webp",
  },
  {
    id: 3,
    name: "Elektrogril Kitfort KT-1650",
    monthly: "89 450 so'm / oy",
    oldPrice: "1 450 000",
    price: "850 000",
    discount: "-41%",
    imgUrl: "https://cdn.mediapark.uz/imgs/f5cf2fd0-0468-4e47-afc3-3cb492f840f3_Artboard-1.webp",
  },
];

export default function Banner() {
  const [slide, setSlide] = useState(0);
  const [daily, setDaily] = useState(0);
  const [secs, setSecs] = useState(6 * 3600 + 21 * 60 + 10);
  const [hovered, setHovered] = useState(false);

  // Taymer hisoblagichi
  useEffect(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  // Chap slider avtomat aylanishi
  useEffect(() => {
    if (hovered) return;
    const t = setInterval(() => setSlide(c => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [hovered]);

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mi = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const sc = String(secs % 60).padStart(2, "0");

  const prod = dailyProducts[daily];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        
        .bn-wrap {
          display: grid;
          grid-template-columns: 1fr 480px; /* O'ng tomon kengligi sizning styledagidek max-width: 480px moslandi */
          gap: 20px;
          max-width: 100%;
          margin: 20px 0;
          padding: 0 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        /* ── LEFT SLIDER (Chap tomon) ── */
        .bn-slider {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          height: 415px;
          background: #000;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          cursor: pointer;
          user-select: none;
        }
        .bn-slide-layer {
          position: absolute;
          inset: 0;
          transition: opacity 500ms ease-in-out;
          pointer-events: none;
        }
        .bn-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bn-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.25);
          backdrop-filter: blur(6px);
          color: white;
          font-size: 20px;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s ease;
          font-weight: bold;
        }
        .bn-slider:hover .bn-arrow { opacity: 1; }
        .bn-arrow-l { left: 16px; }
        .bn-arrow-r { right: 16px; }
        .bn-arrow:hover { background: rgba(255,255,255,0.4); }

        /* ── KUN MAHSULOTLARI (Siz yuborgan HTML'dagi aniq stylar) ── */
        .kun-maxsulotlar {
          background: #fff;
          border-radius: 12px;
          padding: 16px;
          width: 100%;
          height: 415px; /* Slider bilan bo'yi tenglashtirildi */
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #eee;
        }
        .header h2 {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
        }

        /* Countdown */
        .countdown {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .countdown-box {
          background: #f0f0f0;
          border-radius: 4px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .countdown-sep {
          font-weight: 700;
          color: #666;
          font-size: 14px;
          padding: 0 1px;
        }

        /* Mahsulot kontenti */
        .slide-content {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 4px;
          flex: 1;
        }
        .product-img {
          width: 140px;
          height: 140px;
          object-fit: contain;
          flex-shrink: 0;
          border-radius: 8px;
        }
        .product-info { flex: 1; }

        /* Badges */
        .badges {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .badge-discount {
          background: #FFD700;
          color: #1a1a1a;
          font-size: 12px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
        }
        .badge-chegirma {
          background: #E53935;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
        }

        .product-name {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 6px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-monthly {
          display: inline-block;
          border: 1px solid #ddd;
          border-radius: 20px;
          padding: 3px 10px;
          font-size: 12px;
          color: #555;
          margin-bottom: 10px;
        }

        /* Narxlar va Savat */
        .price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .old-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
          display: block;
          margin-bottom: 2px;
        }
        .new-price {
          font-size: 20px;
          font-weight: 800;
          color: #1a1a1a;
        }
        .new-price span { font-size: 14px; font-weight: 500; }

        .cart-btn {
          background: #E53935;
          color: #fff;
          border: none;
          border-radius: 10px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .cart-btn:hover { background: #c62828; }
        .cart-btn svg { width: 20px; height: 20px; }

        /* Custom Pagination (Nuqtachalar) */
        .swiper-pagination {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding-bottom: 4px;
        }
        .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: #ddd;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          padding: 0;
        }
        .swiper-pagination-bullet-active {
          background: #E53935;
          width: 20px;
          border-radius: 4px;
        }

        /* Nav Arrows (Pastki boshqaruv o'qlari) */
        .nav-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 6px;
        }
        .nav-btn {
          background: none;
          border: 1px solid #ddd;
          border-radius: 50%;
          width: 32px; height: 32px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #555;
          transition: all 0.2s;
        }
        .nav-btn:hover { border-color: #E53935; color: #E53935; }
        .nav-btn svg { width: 16px; height: 16px; }

        @media (max-width: 768px) {
          .bn-wrap { grid-template-columns: 1fr; gap: 12px; }
          .bn-slider, .kun-maxsulotlar { height: auto; }
          .bn-slider { min-height: 300px; }
        }
      `}</style>

      <div className="bn-wrap">
        
        {/* ── CHAP TOMON: BANNER SLIDER ── */}
        <div 
          className="bn-slider"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className="bn-slide-layer"
              style={{
                opacity: idx === slide ? 1 : 0,
                zIndex: idx === slide ? 1 : 0,
              }}
            >
              <img src={s.imgUrl} alt="banner" className="bn-slide-img" />
            </div>
          ))}

          <button className="bn-arrow bn-arrow-l" onClick={() => setSlide(c => (c - 1 + slides.length) % slides.length)}>‹</button>
          <button className="bn-arrow bn-arrow-r" onClick={() => setSlide(c => (c + 1) % slides.length)}>›</button>
        </div>

        {/* ── O'NG TOMON: KUN MAHSULOTLARI (HTML styledagi aniq variant) ── */}
        <div className="kun-maxsulotlar">
          <div className="header">
            <h2>Kun maxsulotlari</h2>
            <div className="countdown">
              <div className="countdown-box">{h[0]}</div>
              <div className="countdown-box">{h[1]}</div>
              <span className="countdown-sep">:</span>
              <div className="countdown-box">{mi[0]}</div>
              <div className="countdown-box">{mi[1]}</div>
              <span className="countdown-sep">:</span>
              <div className="countdown-box">{sc[0]}</div>
              <div className="countdown-box">{sc[1]}</div>
            </div>
          </div>

          <div className="slide-content">
            <img className="product-img" src={prod.imgUrl} alt={prod.name} />
            <div className="product-info">
              <div className="badges">
                <span className="badge-discount">{prod.discount}</span>
                <span className="badge-chegirma">Chegirma</span>
              </div>
              <div className="product-name">{prod.name}</div>
              <div className="product-monthly">{prod.monthly}</div>
              
              <div className="price-row">
                <div className="prices">
                  <span className="old-price">{prod.oldPrice} so'm</span>
                  <span className="new-price">{prod.price} <span>so'm</span></span>
                </div>
                <button className="cart-btn" title="Savatga qo'shish">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sahifalash nuqtalari (Pagination) */}
          <div className="swiper-pagination">
            {dailyProducts.map((_, i) => (
              <button
                key={i}
                className={`swiper-pagination-bullet ${daily === i ? 'swiper-pagination-bullet-active' : ''}`}
                onClick={() => setDaily(i)}
              />
            ))}
          </div>

          {/* Pastki navigatsiya tugmalari */}
          <div className="nav-row">
            <button className="nav-btn" onClick={() => setDaily(c => (c - 1 + dailyProducts.length) % dailyProducts.length)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="nav-btn" onClick={() => setDaily(c => (c + 1) % dailyProducts.length)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}