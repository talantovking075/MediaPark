"use client";

export default function ProductCard({ product }) {
  return (
    <>
      <style>{`
        .prod-card {
          background: #ffffff;
          border: 1px solid #f2f2f2;
          border-radius: 20px; /* Rasmdagi kabi yumshoq burchaklar */
          padding: 16px;
          display: flex;
          flex-direction: column;
          position: relative;
          height: 410px; /* Barcha cardlar balandligi bir xil turishi uchun */
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-shadow: 0 1px 3px rgba(0,0,0,0.01);
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .prod-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }

        /* Yuqori chap burchak: Badges (Faqat onlayn, IMEI va h.k.) */
        .prod-badges-container {
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 5;
        }

        .prod-static-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
          white-space: nowrap;
          line-height: 1;
        }

        /* Yuqori o'ng burchak: Tarrozi va Sevimli (Yurakcha) */
        .prod-actions-top {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 5;
        }

        .action-icon-btn {
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
        .action-icon-btn:hover {
          background: #f1f5f9;
          color: #1e293b;
        }

        /* Rasm joylashishi */
        .prod-img-container {
          width: 100%;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 25px;
          margin-bottom: 12px;
        }

        .prod-main-img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }

        /* Sariq rangli Chegirma % belgisi */
        .discount-badge {
          background: #facc15;
          color: #000000;
          font-size: 12px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 10px;
          align-self: flex-start;
          margin-bottom: 10px;
          line-height: 1;
        }

        /* Mahsulot nomi (2 qatorda cheklanadi) */
        .prod-title {
          font-size: 14px;
          font-weight: 500;
          color: #0f172a;
          line-height: 1.4;
          height: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 12px;
        }

        /* Muddatli to'lov ramkasi */
        .monthly-payment-container {
          align-self: flex-start;
          border: 1px solid #1d4ed8;
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 8px;
          margin-bottom: auto; /* Elementlarni pastga chiroyli itaradi */
        }

        /* Pastki qator: Narxlar va Savat tugmasi */
        .prod-bottom-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 12px;
        }

        .price-group {
          display: flex;
          flex-direction: column;
        }

        .price-old-text {
          font-size: 12px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-bottom: 2px;
          line-height: 1;
        }

        .price-current-text {
          font-size: 18px;
          font-weight: 700;
          color: #000000;
          line-height: 1;
        }

        /* Qizil rangli dumaloq Savat tugmasi */
        .add-to-cart-btn {
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

        .add-to-cart-btn:hover {
          background: #c61324;
        }
      `}</style>

      <div className="prod-card">
        {/* Badges (Siz kiritgan arraydan keladi) */}
        <div className="prod-badges-container">
          {product.badges?.map((badge, index) => (
            <span 
              key={index} 
              className="prod-static-badge" 
              style={{ backgroundColor: badge.bg, color: badge.color }}
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* O'ng burchak ijobiy ikonkalari (Tarozi va Sevimli) */}
        <div className="prod-actions-top">
          <button className="action-icon-btn" title="Taqqoslash">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 21V10M12 21V4M6 21v-7"/>
            </svg>
          </button>
          <button className="action-icon-btn" title="Saralanganlar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        {/* Rasm */}
        <div className="prod-img-container">
          <img src={product.image} alt={product.name} className="prod-main-img" />
        </div>

        {/* Chegirma foizi (Agar propsda bo'lsa ko'rinadi) */}
        {product.discount && (
          <div className="discount-badge">{product.discount}</div>
        )}

        {/* Mahsulot nomi */}
        <h3 className="prod-title" title={product.name}>
          {product.name}
        </h3>

        {/* Muddatli to'lov ("so'm/oyiga") ramkasi */}
        <div className="monthly-payment-container">
          {product.monthly} so'm/oyiga
        </div>

        {/* Narxlar va Savat tugmasi */}
        <div className="prod-bottom-row">
          <div className="price-group">
            {product.oldPrice && (
              <span className="price-old-text">{product.oldPrice} so'm</span>
            )}
            <span className="price-current-text">{product.price} so'm</span>
          </div>

          <button className="add-to-cart-btn" title="Savatga qo'shish">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}