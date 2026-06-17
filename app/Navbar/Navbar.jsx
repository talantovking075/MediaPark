'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import "./Navbar.css"
// ── Tashqaridan uzatish mumkin, default qiymatlar ──
const DEFAULT_NAV_CATEGORIES = [
  { label: 'Акции', type: 'sale' },
  { label: 'Dyson', type: 'brand' },
  { label: 'Apple', type: 'link' },
  { label: 'Samsung', type: 'link' },
  { label: 'Смартфоны', type: 'link' },
  { label: 'Кондиционеры', type: 'link' },
  { label: 'Вентиляторы', type: 'link' },
  { label: 'Соковыжималки', type: 'link' },
  { label: 'Холодильники', type: 'link' },
  { label: 'Морозильники', type: 'link' },
  { label: 'Мелкая техника для кухни', type: 'link' },
]

const DEFAULT_CATALOG_CATEGORIES = [
  { icon: '📱', label: 'Smartfonlar' },
  { icon: '💻', label: 'Noutbuklar' },
  { icon: '📺', label: 'Televizorlar' },
  { icon: '❄️', label: 'Muzlatgichlar' },
  { icon: '🌀', label: 'Kir yuvish mashinalari' },
  { icon: '🎮', label: "O'yin pristavkalari" },
  { icon: '🎧', label: 'Audio texnika' },
  { icon: '📷', label: 'Fotoapparat' },
]

// Search placeholder uchun aylanib turadigan so'zlar
const SEARCH_PLACEHOLDERS = [
  'Смартфоны',
  'Samsung Galaxy S25',
  'Телевизор 55 дюйм',
  'Кондиционер LG',
  'Ноутбук HP',
  'Холодильник Artel',
  'Наушники Sony',
  'Стиральная машина',
]

export default function Navbar({
  navCategories = DEFAULT_NAV_CATEGORIES,
  catalogCategories = DEFAULT_CATALOG_CATEGORIES,
  cartCount = 3,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const [placeholderText, setPlaceholderText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [charIdx, setCharIdx] = useState(0)

  // Placeholder typing animatsiyasi
  useEffect(() => {
    const target = SEARCH_PLACEHOLDERS[placeholderIdx]

    if (isTyping) {
      if (charIdx < target.length) {
        const t = setTimeout(() => {
          setPlaceholderText(target.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 70)
        return () => clearTimeout(t)
      } else {
        // To'liq yozildi — 1.8s kut, keyin o'chira boshlaydi
        const t = setTimeout(() => setIsTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setPlaceholderText(target.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 40)
        return () => clearTimeout(t)
      } else {
        // O'chirildi — keyingi so'zga o'tadi
        setPlaceholderIdx(i => (i + 1) % SEARCH_PLACEHOLDERS.length)
        setIsTyping(true)
      }
    }
  }, [charIdx, isTyping, placeholderIdx])

  return (
    <>
      <style>{`
        .mp * { box-sizing: border-box; margin: 0; padding: 0; }
        .mp a { text-decoration: none; color: inherit; }
        .mp button { font-family: inherit; cursor: pointer; border: none; background: none; }

        .mp {
          position: sticky; top: 0; z-index: 100;
          background: #fff;
          font-family: "Inter","Segoe UI",Arial,sans-serif;
          box-shadow: 0 1px 0 #e5e7eb, 0 2px 12px rgba(0,0,0,.06);
        }

        /* TOP BAR */
        .mp-top {
          border-bottom: 1px solid #f0f0f0;
          padding: 7px 24px;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.8rem; color: #444;
        }
        .mp-top-left  { display: flex; align-items: center; gap: 20px; }
        .mp-top-right { display: flex; align-items: center; gap: 20px; }
        .mp-top-right a { color: #444; transition: color 120ms; }
        .mp-top-right a:hover { color: #e8162b; }
        .mp-mediablog {
          background: #1d4ed8; color: #fff !important;
          font-weight: 700; padding: 3px 12px; border-radius: 6px; font-size: 0.8rem;
          transition: background 150ms !important;
        }
        .mp-mediablog:hover { background: #1e3fa8 !important; }

        /* MAIN ROW */
        .mp-main {
          display: flex; align-items: center; gap: 20px;
          padding: 0 24px; height: 72px;
        }

        /* Logo */
        .mp-logo { display: flex; align-items: baseline; flex-shrink: 0; }
        .mp-logo-red  { font-size: 1.75rem; font-weight: 900; color: #e8162b; letter-spacing: -0.5px; line-height: 1; }
        .mp-logo-dark { font-size: 1.75rem; font-weight: 900; color: #111; letter-spacing: -0.5px; line-height: 1; }

        /* Catalog button */
        .mp-cat-btn {
          display: flex; align-items: center; gap: 10px;
          background: #e8000d; color: #fdfdfdff;
          border-radius: 10px; padding: 0 22px; height: 46px;
          font-size: 1rem; font-weight: 700; flex-shrink: 0;
          transition: background 150ms;
        }
        
        .mp-burger-icon { display: flex; flex-direction: column; gap: 4.5px; width: 18px; }
        .mp-burger-icon span { display: block; height: 2px; background: #fff; border-radius: 2px; }

        /* Search */
        .mp-search {
          flex: 1; display: flex; height: 46px;
          border: 1.5px solid #e0e0e0; border-radius: 10px;
          overflow: hidden; transition: border-color 150ms;
          position: relative;
        }
        .mp-search:focus-within { border-color: #e8162b; }

        .mp-search-input {
          flex: 1; padding: 0 18px; font-size: 0.9375rem;
          border: none; outline: none; color: #111;
          background: transparent; font-family: inherit;
        }

        /* Placeholder qatlami — faqat input bo'sh bo'lganda ko'rinadi */
        .mp-placeholder-layer {
          position: absolute; left: 18px; top: 50%; transform: translateY(-50%);
          font-size: 0.9375rem; color: #aaa;
          pointer-events: none; white-space: nowrap; overflow: hidden;
          display: flex; align-items: center; gap: 1px;
          transition: opacity 150ms;
        }
        .mp-placeholder-cursor {
          display: inline-block; width: 2px; height: 16px;
          background: #aaa; margin-left: 1px; border-radius: 1px;
          animation: mp-blink 0.8s step-end infinite;
        }
        @keyframes mp-blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .mp-search-btn {
          width: 54px; height: 46px; background: #e8162b; color: #fff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 150ms;
        }
        .mp-search-btn:hover { background: #c5101f; }

        /* Actions */
        .mp-actions { display: flex; align-items: center; gap: 0; margin-left: 4px; flex-shrink: 0; }
        .mp-action {
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 8px 14px; color: #374151; font-size: 0.6875rem; font-weight: 500;
          border-radius: 8px; transition: color 150ms, background 150ms;
          position: relative; white-space: nowrap;
        }
        .mp-action:hover { color: #e8162b; background: #fff5f5; }
        .mp-cart-badge {
          position: absolute; top: 4px; right: 8px;
          background: #e8162b; color: #fff; font-size: 0.6rem; font-weight: 700;
          min-width: 16px; height: 16px; border-radius: 999px;
          display: flex; align-items: center; justify-content: center; padding: 0 4px;
        }

        /* Mobile burger */
        .mp-mob-burger {
          display: none; flex-direction: column; gap: 5px;
          width: 38px; height: 38px; align-items: center; justify-content: center;
          border: 1.5px solid #e5e7eb; border-radius: 8px; flex-shrink: 0;
        }
        .mp-mob-burger span { display: block; width: 18px; height: 2px; background: #374151; border-radius: 2px; }

        /* CATEGORY STRIP */
        .mp-strip {
          display: flex; align-items: center; gap: 8px;
          padding: 0 24px; height: 46px;
          border-top: 1px solid #f3f3f3;
          overflow-x: auto; scrollbar-width: none;
        }
        .mp-strip::-webkit-scrollbar { display: none; }

        .mp-cat-sale {
          display: inline-flex; align-items: center;
          background: #22c55e; color: #fff;
          font-size: 0.8125rem; font-weight: 700;
          padding: 5px 16px; border-radius: 999px;
          white-space: nowrap; flex-shrink: 0;
          position: relative; overflow: hidden; transition: background 150ms;
        }
        .mp-cat-sale:hover { background: #16a34a; }
        .mp-cat-sale::after {
          content: ''; position: absolute; top: 0; left: -60%;
          width: 40%; height: 100%; background: rgba(255,255,255,.35);
          transform: skewX(-20deg); animation: mp-shine 2.5s infinite;
        }
        @keyframes mp-shine { 0%{left:-60%} 60%,100%{left:130%} }

        .mp-cat-brand {
          display: inline-flex; align-items: center;
          border: 1.5px solid #d1d5db; color: #374151;
          font-size: 0.8125rem; font-weight: 600;
          padding: 4px 16px; border-radius: 999px;
          white-space: nowrap; flex-shrink: 0;
          transition: border-color 150ms, color 150ms;
        }
        .mp-cat-brand:hover { border-color: #e8162b; color: #e8162b; }

        .mp-cat-link {
          color: #374151; font-size: 0.8125rem; font-weight: 500;
          white-space: nowrap; flex-shrink: 0; padding: 4px 0;
          transition: color 150ms;
        }
        .mp-cat-link:hover { color: #e8162b; }

        /* CATALOG DROPDOWN */
        .mp-dropdown {
          position: absolute; left: 0; right: 0; z-index: 300;
          background: #fff; border-top: 1px solid #eee;
          box-shadow: 0 12px 40px rgba(0,0,0,.14);
          padding: 20px 24px 24px;
        }
        .mp-dropdown-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 4px; list-style: none;
        }
        .mp-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 14px; border-radius: 10px;
          color: #111; font-size: 0.9rem; font-weight: 500;
          transition: background 150ms, color 150ms;
        }
        .mp-dropdown-item:hover { background: #fff5f5; color: #e8162b; }
        .mp-di-icon { font-size: 1.3rem; width: 30px; text-align: center; flex-shrink: 0; }
        .mp-overlay { position: fixed; inset: 0; z-index: -1; }

        /* MOBILE MENU */
        .mp-mob-menu { background: #fff; border-top: 1px solid #eee; }
        .mp-mob-inner { padding: 12px 16px; display: flex; flex-direction: column; gap: 2px; }
        .mp-mob-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 10px; color: #111; font-size: 0.9375rem;
          border-radius: 8px; transition: background 150ms;
        }
        .mp-mob-item:hover { background: #f5f5f5; }

        @media (max-width: 1100px) {
          .mp-action > span:last-child { display: none; }
          .mp-action { padding: 8px 10px; }
        }
        @media (max-width: 768px) {
          .mp-top { display: none; }
          .mp-actions { display: none; }
          .mp-mob-burger { display: flex; }
          .mp-strip { display: none; }
          .mp-main { gap: 10px; padding: 0 16px; }
        }
      `}</style>

      <div className="mp">

        {/* TOP BAR */}
        <div className="mp-top">
          <div className="mp-top-left">
            <span>📞 +998 71 203 33 33</span>
            <span>📍 Ташкент</span>
          </div>
          <div className="mp-top-right">
            <Link href="/our" style={{ color: "#444", textDecoration: "none" }}>
              О нас
            </Link>
            <a href="#" className="mp-mediablog">Mediablog ↗</a>
            <a href="#">Доставка</a>
            <a href="#">Магазины</a>
            <a href="#">Рассрочка</a>
            <a href="#">Связаться с нами!</a>
            <a href="#">Русский ∨</a>
          </div>
        </div>

        {/* MAIN ROW */}
        <div className="mp-main">
          <a href="/" className="mp-logo">
            <span className="mp-logo-red">MEDIA</span>
            <span className="mp-logo-dark">PARK</span>
          </a>

          <button className="mp-cat-btn" onClick={() => setCatalogOpen(!catalogOpen)}>
            <span className="mp-burger-icon"><span /><span /><span /></span>
            Каталог
          </button>

          {/* Search with animated placeholder */}
          <div className="mp-search">
            <input
              className="mp-search-input"
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            {/* Faqat input bo'sh bo'lganda placeholder ko'rinadi */}
            {!searchValue && (
              <div className="mp-placeholder-layer">
                <span>{placeholderText}</span>
                <span className="mp-placeholder-cursor" />
              </div>
            )}
            <button className="mp-search-btn">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Actions */}
          <div className="mp-actions">
            <a href="#" className="mp-action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span>Статус заказа</span>
            </a>
            <a href="#" className="mp-action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <span>Сравнить</span>
            </a>
            <a href="#" className="mp-action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Корзина</span>
              {cartCount > 0 && <span className="mp-cart-badge">{cartCount}</span>}
            </a>
            <a href="#" className="mp-action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Избранное</span>
            </a>
            <a href="#" className="mp-action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Войти</span>
            </a>
          </div>

          <button className="mp-mob-burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>

        {/* CATEGORY STRIP — props orqali ham uzatish mumkin */}
        <nav className="mp-strip">
          {navCategories.map(({ label, type }) => {
            if (type === 'sale') return <a key={label} href="#" className="mp-cat-sale">{label}</a>
            if (type === 'brand') return <a key={label} href="#" className="mp-cat-brand">{label}</a>
            return <a key={label} href="#" className="mp-cat-link">{label}</a>
          })}
        </nav>

        {/* CATALOG DROPDOWN */}
        {catalogOpen && (
          <div className="mp-dropdown">
            <ul className="mp-dropdown-grid">
              {catalogCategories.map((cat, i) => (
                <li key={i}>
                  <a href="#" className="mp-dropdown-item">
                    <span className="mp-di-icon">{cat.icon}</span>
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mp-overlay" onClick={() => setCatalogOpen(false)} />
          </div>
        )}

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mp-mob-menu">
            <div className="mp-mob-inner">
              {catalogCategories.map((cat, i) => (
                <a key={i} href="#" className="mp-mob-item">
                  <span>{cat.icon}</span> {cat.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}