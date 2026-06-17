
const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Удобная доставка",
    desc: "Гарантируем надежную и безопасную доставку вашего товара в выбранное вами время.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: "Любой способ оплаты",
    desc: "Оплачивайте покупки не только через национальные платёжные системы, но и с помощью VISA и Mastercard.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Гарантия и надёжный сервис",
    desc: "Гарантия на 1 год на все товары, включая бесплатную доставку и ремонт от компании...",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Доступные и низкие цены",
    desc: "Мы предлагаем вам товары по конкурентоспособным ценам.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Магазины по всему Узбекистану",
    desc: "У нас есть 38 торговых точек по всей стране.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
      </svg>
    ),
    title: "Грандиозные акции и скидки",
    desc: "У нас всегда действуют ежедневные скидки и большие ежемесячные акции.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Можно и в рассрочку",
    desc: "Оплачивайте по частям и получите всё, что хотите прямо сейчас.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Услуга самовывоза",
    desc: "Заберите свои покупки, когда вам будет удобно.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
      </svg>
    ),
    title: "Обмен и возврат товаров",
    desc: "При наличии дефектов, вы можете легко обменять товар на другой или вернуть деньги.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: "Качественное обслуживание",
    desc: "Наши консультанты каждый месяц проходят спец-обучения для улучшения качества сервиса.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8000d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Наличие предзаказов",
    desc: "Вы можете заранее заказать самые горячие новинки вместе с Mediapark.",
  },
];

export default function Features() {
  return (
    <section style={{ padding: "24px 16px 32px", background: "#f7f7f7" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#111", marginBottom: "20px" }}>
        Почему именно Mediapark?
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
        gap: "10px",
      }}>
        {features.map((f) => (
          <div key={f.title} style={{
            background: "#fff",
            border: "1px solid #ebebeb",
            borderRadius: "12px",
            padding: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              background: "#fff0f0",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
            }}>
              {f.icon}
            </div>
            <p style={{ fontSize: "12px", fontWeight: "700", color: "#111", marginBottom: "6px", lineHeight: "1.4" }}>
              {f.title}
            </p>
            <p style={{ fontSize: "11px", color: "#666", lineHeight: "1.5", margin: 0 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}