import ProductCard from "./ProductCard";
import Link from "next/link";

const juicers = [
  {
    id: 1,
    name: "Соковыжималка Moulinex JU550D10",
    emoji: "🧃",
    monthly: "224 025",
    oldPrice: "2 713 000",
    price: "2 070 000",
    discount: "-24%",
    badges: [],
  },
  {
    id: 2,
    name: "Соковыжималка Kenwood JMP601SI",
    emoji: "🥤",
    monthly: "243 398",
    oldPrice: "2 849 000",
    price: "2 249 000",
    discount: "-21%",
    badges: [],
  },
  {
    id: 3,
    name: "Соковыжималка Moulinex ZU420E10",
    emoji: "🍊",
    monthly: "227 164",
    oldPrice: "3 365 000",
    price: "2 099 000",
    discount: "-38%",
    badges: [],
  },
  {
    id: 4,
    name: "Соковыжималка NUTRIBULLET NBJ200G",
    emoji: "🥗",
    monthly: "205 519",
    oldPrice: "2 399 000",
    price: "1 899 000",
    discount: "-21%",
    badges: [],
  },
  {
    id: 5,
    name: "Соковыжималка Moulinex ZU600110",
    emoji: "🍋",
    monthly: "292 099",
    oldPrice: "3 368 000",
    price: "2 699 000",
    discount: "-20%",
    badges: [{ text: "Хит продаж", bg: "#ec4899", color: "#fff" }],
  },
];

export default function JuicersSection() {
  return (
    <section className="px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">🥤 Свежий сок каждый день!</h2>
        <Link href="#" className="text-red-600 hover:underline text-sm font-medium">
          Все →
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {juicers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}