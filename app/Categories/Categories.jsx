"use client";
import Link from "next/link";

// Siz yuborgan rasmlar aniq tartibda ob'ektga joylandi
const categories = [
  { name: "Smartfonlar", img: "https://cdn.mediapark.uz/imgs/95c5850d-bf76-4736-b75c-85d3adc4ef09_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(7)-(2).webp", href: "#", span: 1 },
  { name: "Konditsionerlar", img: "https://cdn.mediapark.uz/imgs/b9fb5d8e-982a-4533-aaf9-9df070539e3d_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(4)-(8).webp", href: "#", span: 1 },
  { name: "Sovutgichlar", img: "https://cdn.mediapark.uz/imgs/cdde5c2e-6763-4b13-ab50-265291e13b6a_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(10).webp", href: "#", span: 1 },
  { name: "Televizorlar", img: "https://cdn.mediapark.uz/imgs/64efef69-fe00-4ef4-b110-b1d59968ff69_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(15).webp", href: "#", span: 1 },
  { name: "Changyutgichlar", img: "https://cdn.mediapark.uz/imgs/4e10d642-c782-4bad-92cb-00474d3d9bcb_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(13).webp", href: "#", span: 1 },
  { name: "Sharbat siqqichlar", img: "https://cdn.mediapark.uz/imgs/17492eff-7ba8-4777-9e67-5b506e4f4bd5_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(5)-(3).webp", href: "#", span: 1 },
  { name: "Suv uchun kulerlar", img: "https://cdn.mediapark.uz/imgs/1922442a-0135-40ae-b6f1-ece10e05b50e_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(8).webp", href: "#", span: 2 }, // Keng blok
  { name: "Elektr choynaklar", img: "https://cdn.mediapark.uz/imgs/c75c94af-485e-45a5-be80-abf485424919_category-(14).webp", href: "#", span: 2 }, // Keng blok
  { name: "Hamma kategoriyalar", img: null, href: "#", isAll: true, span: 2 },
];

export default function Categories() {
  return (
    <>
      <style>{`
        .cat-section {
          background-color: #f6f6f6; /* Mediapark original foni */
          padding: 32px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .cat-container {
          max-width: 1440px;
          margin: 0 auto;
        }

        .cat-heading {
          font-size: 22px;
          font-weight: 700;
          color: #1d2125;
          margin-bottom: 20px;
          letter-spacing: -0.3px;
        }

        /* 6 ta ustunli murakkab grid tizimi */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .cat-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-radius: 14px;
          padding: 16px 20px;
          text-decoration: none;
          min-height: 95px;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .cat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
        }

        /* Ustunlar kengligi boshqaruvi */
        .span-1 { grid-column: span 1; }
        .span-2 { grid-column: span 2; }

        .cat-name {
          font-size: 15px;
          font-weight: 600;
          color: #1d2125;
          line-height: 1.3;
          max-width: 65%;
          z-index: 2;
        }

        /* Rasmlarni o'ng burchakka chiroyli joylashtirish */
        .cat-img-wrapper {
          position: absolute;
          right: 12px;
          bottom: 8px;
          top: 8px;
          width: 35%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* Hamma kategoriyalar tugmasi o'qi */
        .cat-card-all {
          background: #ffffff;
        }
        
        .cat-all-arrow {
          font-size: 20px;
          color: #1d2125;
          transition: transform 0.2s ease;
        }
        
        .cat-card-all:hover .cat-all-arrow {
          transform: translateX(4px);
        }

        /* Ekran o'lchamlariga qarab moslashuvchanlik (Responsive) */
        @media (max-width: 1100px) {
          .cat-grid { grid-template-columns: repeat(4, 1fr); }
          .span-2 { grid-column: span 2; }
        }
        
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
          .span-1, .span-2 { grid-column: span 1; }
          .cat-name { font-size: 13px; max-width: 60%; }
        }
      `}</style>

      <section className="cat-section">
        <div className="cat-container">
          <h2 className="cat-heading">
            Mediapark - O‘zbekistondagi maishiy texnika va elektronika eksperti
          </h2>

          <div className="cat-grid">
            {categories.map((cat, idx) =>
              cat.isAll ? (
                <Link 
                  key={idx} 
                  href={cat.href} 
                  className={`cat-card cat-card-all span-${cat.span}`}
                >
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-all-arrow">→</span>
                </Link>
              ) : (
                <Link 
                  key={idx} 
                  href={cat.href} 
                  className={`cat-card span-${cat.span}`}
                >
                  <span className="cat-name">{cat.name}</span>
                  <div className="cat-img-wrapper">
                    <img src={cat.img} alt={cat.name} className="cat-img" />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}