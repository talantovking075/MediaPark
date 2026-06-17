import Link from "next/link";
import { Eye, Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Как выбрать телевизор для просмотра футбола: 4K, 120 Гц,...",
    excerpt: "В этой статье мы поможем вам разобраться, на что обратить внимание при выборе идеального ТВ...",
    views: 3,
    date: "10-06-2026",
    emoji: "⚽",
    bg: "bg-slate-800",
  },
  {
    id: 2,
    title: "Vivo представила смартфон V70 Lite 5G",
    excerpt: "Устройство получило 50-мегапиксельную камеру Sony и новейший процессор средней категории...",
    views: 12,
    date: "10-06-2026",
    emoji: "📱",
    bg: "bg-neutral-200",
  },
  {
    id: 3,
    title: "Приложение Telegram снова вышло для Apple Watch",
    excerpt: "Приложение уже можно скачать через App Store. Полная поддержка быстрых ответов и стикеров.",
    views: 15,
    date: "09-06-2026",
    emoji: "⌚",
    bg: "bg-blue-600",
  },
  {
    id: 4,
    title: "Apple назвала победителей Design Awards 2026: среди...",
    excerpt: "В этом году победителей выбрали в шести категориях. В каждой категории представлен один софт...",
    views: 20,
    date: "09-06-2026",
    emoji: "🍎",
    bg: "bg-black",
  },
  {
    id: 5,
    title: "Apple представила iOS 27: что нового, какие iPhone получат...",
    excerpt: "Новая версия мобильной операционной системы получила обновленный ИИ и кастомизацию виджетов...",
    views: 20,
    date: "09-06-2026",
    emoji: "📲",
    bg: "bg-purple-700",
  },
];

const tags = ["Все", "Приложения", "Данные", "Программы", "Советы", "Ноутбук", "Облака", "Смартфон", "Компьютер", "Новости"];

export default function Articles() {
  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Полезные статьи</h2>
        <Link href="#" className="text-[#E31E24] hover:text-[#c9171c] text-sm font-bold flex items-center gap-1 transition">
          Посмотреть все <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-5">
        {tags.map((tag, i) => (
          <button
            key={tag}
            className={`text-xs px-3.5 py-2 rounded-xl border font-semibold transition-all ${
              i === 0
                ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-red-200 hover:text-[#E31E24]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Article cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href="#"
            className="group flex flex-col bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300"
          >
            <div className={`${article.bg} h-40 flex items-center justify-center text-5xl select-none group-hover:scale-102 transition-transform duration-300`}>
              {article.emoji}
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-[13px] font-bold text-neutral-800 mb-1.5 line-clamp-2 group-hover:text-[#E31E24] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">{article.excerpt}</p>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-medium text-neutral-400 border-t border-neutral-50 pt-2.5 mt-auto">
                <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}