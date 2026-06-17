"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

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
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Asosiy Grid qismi */}
        <div className={styles.mainGrid}>

          {/* Brend va Kontakt bo'limi */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <span className={styles.logoMedia}>MEDIA</span>
              <span className={styles.logoPark}>PARK</span>
            </div>
            <p className={styles.subtitle}>Возникли вопросы? Готовы помочь:</p>
            <a href="tel:+998712033333" className={styles.phone}>
              +998 71 203 33 33
            </a>
            <p className={styles.subtitle}>График работы:</p>
            <p className={styles.workHours}>Ежедневно: 09:00 – 21:00</p>
          </div>

          {/* To'lov turlari bo'limi */}
          <div className={styles.paymentColumn}>
            <h3 className={styles.heading}>Способы оплаты</h3>
            <div className={styles.paymentGrid}>
              {paymentMethods.map((m) => (
                <div key={m.name} className={styles.paymentCard}>
                  {m.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Havolalar (Linklar) ustunlari */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className={styles.linksColumn}>
              <h3 className={styles.linksHeading}>{title}</h3>
              <ul className={styles.linksList}>
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className={styles.linkItem}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pastki chiziq va Mualliflik huquqi bo'limi */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2026 Mediapark. Все права защищены.</p>
          <div className={styles.socialsGrid}>
            {socials.map((s) => (
              <Link key={s.name} href="#" className={styles.socialCard} aria-label={s.name}>
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}