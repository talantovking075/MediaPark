import Link from "next/link";

const paymentMethods = [
  {
    name: "Uzcard",
    logo: (
      <svg viewBox="0 0 80 30" width="70" height="26">
        <text x="4" y="22" fontFamily="Arial" fontWeight="900" fontSize="18" fill="#fff">U</text>
        <text x="18" y="22" fontFamily="Arial" fontWeight="700" fontSize="14" fill="#fff">ZCARD</text>
      </svg>
    ),
  },
  {
    name: "Humo",
    logo: (
      <svg viewBox="0 0 80 30" width="70" height="26">
        <text x="4" y="22" fontFamily="Arial" fontWeight="900" fontSize="20" fill="#fff" letterSpacing="2">HUMO</text>
      </svg>
    ),
  },
  {
    name: "Click",
    logo: (
      <svg viewBox="0 0 80 30" width="70" height="26">
        <circle cx="10" cy="15" r="8" fill="#00ADEF"/>
        <text x="22" y="21" fontFamily="Arial" fontWeight="900" fontSize="16" fill="#00ADEF">click</text>
      </svg>
    ),
  },
  {
    name: "Payme",
    logo: (
      <svg viewBox="0 0 80 30" width="70" height="26">
        <rect x="2" y="6" width="76" height="18" rx="4" fill="#00C2B2" opacity=".2"/>
        <text x="10" y="21" fontFamily="Arial" fontWeight="900" fontSize="15" fill="#00C2B2">payme</text>
      </svg>
    ),
  },
  {
    name: "Visa",
    logo: (
      <svg viewBox="0 0 80 30" width="70" height="26">
        <text x="8" y="23" fontFamily="Arial" fontWeight="900" fontSize="22" fill="#fff" fontStyle="italic">VISA</text>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    logo: (
      <svg viewBox="0 0 80 30" width="70" height="26">
        <circle cx="28" cy="15" r="12" fill="#EB001B"/>
        <circle cx="46" cy="15" r="12" fill="#F79E1B"/>
        <path d="M37 6.8a12 12 0 010 16.4A12 12 0 0137 6.8z" fill="#FF5F00"/>
      </svg>
    ),
  },
];

const footerLinks = {
  "Информация": ["О нас", "Гарантия", "Акция", "Наши магазины"],
  "Услуги": ["Услуги", "Способы оплаты", "Всё о рассрочке", "Партнёрство", "Возврат товара"],
  "Для покупателей": ["Доставка", "Связаться с нами!", "Сервисный центр", "Оставить отзыв", "Вакансии"],
};

const socials = [
  {
    name: "Telegram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.67l-2.94-.918c-.64-.203-.653-.64.136-.954l11.49-4.43c.535-.194 1.002.131.838.853z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1a1f2e", color: "#aaa", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px 24px" }}>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.4fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>

          {/* Brand + Contact */}
          <div>
            <div style={{ fontSize: "20px", fontWeight: 900, fontStyle: "italic", letterSpacing: "-1px", marginBottom: "16px" }}>
              <span style={{ color: "#e8000d" }}>MEDIA</span>
              <span style={{ color: "#fff" }}>PARK</span>
            </div>
            <p style={{ fontSize: "12px", color: "#888", marginBottom: "6px" }}>Возникли вопросы? Готовы помочь:</p>
            <a href="tel:+998712033333" style={{ fontSize: "18px", fontWeight: 900, color: "#fff", textDecoration: "none", display: "block", marginBottom: "14px" }}>
              +998 71 203 33 33
            </a>
            <p style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>График работы:</p>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#ddd" }}>Ежедневно: 09:00 – 21:00</p>
          </div>

          {/* Payment methods */}
          <div>
            <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "14px", textTransform: "uppercase", letterSpacing: ".5px" }}>
              Способы оплаты
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {paymentMethods.map((m) => (
                <div key={m.name} style={{
                  background: "#252b3b",
                  border: "1px solid #2e3447",
                  borderRadius: "10px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {m.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#e8000d", marginBottom: "14px", textTransform: "uppercase", letterSpacing: ".5px" }}>
                {title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #252b3b",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <p style={{ fontSize: "12px", color: "#555" }}>© 2026 Mediapark. Все права защищены.</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {socials.map((s) => (
              <Link key={s.name} href="#" style={{
                width: "34px", height: "34px", borderRadius: "8px",
                background: "#252b3b", color: "#888",
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", transition: "background .15s",
              }}>
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}