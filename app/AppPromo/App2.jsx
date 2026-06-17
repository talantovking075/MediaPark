import React from 'react';

export default function AppPromo() {
  return (
    <section className="mp-promo-section" style={{
      background: "#f5f5f5",
      padding: "50px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      overflow: "hidden",
      position: "relative",
      minHeight: "440px",
      flexWrap: "wrap",
    }}>
      
      {/* Kichik ekranlar uchun dinamik media qoidalar */}
      <style>{`
        @media (max-width: 1024px) {
          .mp-promo-section { gap: 30px !important; padding: 40px 20px !important; }
          .mp-promo-title { font-size: 30px !important; }
        }
        @media (max-width: 768px) {
          .mp-promo-section { flex-direction: column !important; text-align: center !important; }
          .mp-promo-left { max-width: 100% !important; display: flex; flex-direction: column; align-items: center; }
          .mp-promo-buttons { justify-content: center !important; }
          .mp-promo-right { gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .mp-promo-title { font-size: 24px !important; }
          .mp-promo-phone { width: 190px !important; height: 380px !important; }
          .mp-promo-qr { display: none !important; } /* Juda kichik telefonda QR kodni yashirish maqsadga muvofiq */
        }
      `}</style>

      {/* Orqa fondagi qizil aylana effekt */}
      <div style={{
        position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)",
        width: "500px", height: "500px", background: "#e8000d",
        borderRadius: "50%", opacity: .05, zIndex: 1, pointerEvents: "none",
      }}/>

      {/* CHAP TOMONDAGI MATNLAR BO'LIMI */}
      <div className="mp-promo-left" style={{ flex: "1 1 400px", maxWidth: "500px", minWidth: "300px", zIndex: 2 }}>
        {/* Kichik Logo */}
        <div style={{ fontSize: "20px", fontWeight: 900, fontStyle: "italic", letterSpacing: "-1px", marginBottom: "16px" }}>
          <span style={{ color: "#e8000d" }}>MEDIA</span>
          <span style={{ color: "#111" }}>PARK</span>
        </div>
        
        {/* Sarlavha */}
        <h2 className="mp-promo-title" style={{ fontSize: "36px", fontWeight: 900, color: "#111", lineHeight: 1.15, marginBottom: "14px" }}>
          Твой магазин в<br />Твоём телефоне
        </h2>
        
        {/* Ta'rif matni */}
        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, marginBottom: "28px", maxWidth: "360px" }}>
          Найдите смартфоны, планшеты и все виды актуальной электроники в мобильном приложении MEDIAPARK.
        </p>

        {/* Tugmalar qutisi */}
        <div className="mp-promo-buttons" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {/* App Store */}
          <a href="#" style={{
            background: "#111", color: "#fff", padding: "10px 16px",
            borderRadius: "12px", display: "flex", alignItems: "center",
            gap: "10px", textDecoration: "none", whiteSpace: "nowrap",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "8px", color: "#999", textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 500 }}>доступно в</div>
              <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1, marginTop: "2px" }}>App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a href="#" style={{
            background: "#111", color: "#fff", padding: "10px 16px",
            borderRadius: "12px", display: "flex", alignItems: "center",
            gap: "10px", textDecoration: "none", whiteSpace: "nowrap",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z"/>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "8px", color: "#999", textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 500 }}>доступно в</div>
              <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1, marginTop: "2px" }}>Google Play</div>
            </div>
          </a>

          {/* App Gallery */}
          <a href="#" style={{
            background: "#e8000d", color: "#fff", padding: "10px 16px",
            borderRadius: "12px", display: "flex", alignItems: "center",
            gap: "10px", textDecoration: "none", whiteSpace: "nowrap",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="3"/>
              <line x1="12" y1="18" x2="12" y2="18.5" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "8px", color: "#ffaaaa", textTransform: "uppercase", letterSpacing: ".5px", fontWeight: 500 }}>доступно в</div>
              <div style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1, marginTop: "2px" }}>App Gallery</div>
            </div>
          </a>
        </div>
      </div>

      {/* O'NG TOMONDAGI TELEFON MAKTI VA QR KOD */}
      <div className="mp-promo-right" style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "28px", 
        flexShrink: 0, 
        zIndex: 2,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>

        {/* QR Code ko'rinishi */}
        <div className="mp-promo-qr" style={{
          background: "#fff", borderRadius: "16px", padding: "20px",
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "12px", boxShadow: "0 4px 24px rgba(0,0,0,.04)",
        }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=https://mediapark.uz/app"
            alt="QR kod"
            width={110}
            height={110}
            style={{ borderRadius: "8px", display: "block" }}
          />
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#666" }}>Сканируйте QR-код</span>
        </div>

        {/* Telefon maketi (Phone Mockup) */}
        <div className="mp-promo-phone" style={{
          width: "215px", height: "420px", background: "#111",
          borderRadius: "36px", padding: "12px", position: "relative",
          boxShadow: "0 12px 48px rgba(0,0,0,.12)", flexShrink: 0,
        }}>
          {/* Notch qismi */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "80px", height: "24px", background: "#111",
            borderRadius: "0 0 14px 14px", zIndex: 10,
          }}/>
          
          {/* Telefon ichki ekrani */}
          <div style={{
            background: "#fff", borderRadius: "26px", height: "100%",
            overflow: "hidden", display: "flex", flexDirection: "column",
          }}>
            {/* Status bar */}
            <div style={{
              padding: "20px 14px 6px", display: "flex",
              justifyContent: "space-between", fontSize: "9px", fontWeight: 700, color: "#111",
            }}>
              <span>9:41</span>
              <span style={{ letterSpacing: "1px" }}>▊▊▊</span>
            </div>

            {/* Qidiruv qatori */}
            <div style={{
              margin: "6px 10px", background: "#f2f2f2", borderRadius: "20px",
              padding: "7px 12px", fontSize: "9px", color: "#bbb", display: "flex",
              alignItems: "center", gap: "6px",
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              искать товары...
            </div>

            {/* Seksiyalar sarlavhasi */}
            <div style={{
              padding: "10px 12px 6px", fontSize: "11px", fontWeight: 700,
              color: "#111", display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span>Электроника</span>
              <span style={{ color: "#e8000d", fontSize: "9px", fontWeight: 600 }}>Все &rsaquo;</span>
            </div>

            {/* Kategoriya griddlari */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "6px", padding: "0 10px" }}>
              {[
                { label: "Смартфоны", bg: "#e0e7ff" },
                { label: "Ноутбуки", bg: "#dbeafe" },
                { label: "Компьютеры", bg: "#ede9fe" },
                { label: "Аксессуары", bg: "#fce7f3" },
                { label: "Наушники", bg: "#d1fae5" },
                { label: "Телевизоры", bg: "#f1f5f9" },
              ].map((c) => (
                <div key={c.label} style={{
                  background: c.bg, borderRadius: "10px", padding: "10px 4px",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                }}>
                  <div style={{ width: "24px", height: "24px", background: "rgba(255,255,255,.6)", borderRadius: "6px" }}/>
                  <span style={{ fontSize: "7px", color: "#555", fontWeight: 600, textAlign: "center" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}