"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Articles.module.css";

const tagsData = [
  "Hammasi", "Ilova", "Ma'lumotlar", "Dasturlar", "Maslahatlar", 
  "Noutbuk", "Bulut", "Smartfon", "Kompyuter", "Yangiliklar", 
  "Layfhak", "Internet", "Texnologiyalar", "AI"
];

const articlesData = [
  {
    id: 1,
    title: "TECNO SPARK 50 Pro taqdim etildi",
    desc: "Qurilma yuqori yangilanish chastotasiga ega ekran, Sony sensori...",
    img: "https://cdn.mediablog.mediapark.uz/corecms/post-thumbnails/01KVAQ3VMBF1APAH7SJ0Q5YZDA.png",
    views: 0,
    date: "17-06-2026"
  },
  {
    id: 2,
    title: "Ustunli konditsionerlar: qayerda ishlatiladi va qanday tanlanadi?",
    desc: "Ushbu sharhda ustunli konditsionerlar, ularning qaysi xonalarga mosligi va u...",
    img: "https://cdn.mediablog.mediapark.uz/corecms/post-thumbnails/01KVA16DB0TZNB6R17KA1V54J7.png",
    views: 7,
    date: "17-06-2026"
  },
  {
    id: 3,
    title: "Endi faqat smartfonlar buklanmaydi: Logitech bir oy...",
    desc: "Buklanganda korpus taxminan 130 darajaga buriladi, qurilma esa batarey...",
    img: "https://cdn.mediablog.mediapark.uz/corecms/post-thumbnails/01KV87QYZ0YGQA05FQQVXJ206W.png",
    views: 7,
    date: "16-06-2026"
  },
  {
    id: 4,
    title: "Uy uchun mukammal sovitkichni qanday to'g'ri tanlash kerak",
    desc: "Quyidagi qo'llanmada sovitkichni ehtiyojingiz, xarid bjudjetingiz va...",
    img: "https://cdn.mediablog.mediapark.uz/corecms/post-thumbnails/01KV7H5RZ25NFAZT673DMX9JNX.png",
    views: 183,
    date: "02-06-2026"
  },
  {
    id: 5,
    title: "HONOR X70 Pro Max 5G smartfoni taqdim etildi",
    desc: "Model mustahkam korpus, balandlikdan qulashdan himoya, yorqin AMOLED-...",
    img: "https://cdn.mediablog.mediapark.uz/corecms/post-thumbnails/01KV7B08FZ2P7XSTYZ2HBM13J6.png",
    views: 53,
    date: "16-06-2026"
  }
];

export default function Articles() {
  const [activeTag, setActiveTag] = useState("Hammasi");

  return (
    <div className={styles.wrapper}>
      {/* Sarlavha paneli */}
      <div className={styles.header}>
        <h2 className={styles.title}>Maqolalar</h2>
        <Link href="/articles" className={styles.seeAll}>
          Hammasini ko'rish <span>&rsaquo;</span>
        </Link>
      </div>

      {/* Teglar ro'yxati */}
      <div className={styles.tagsContainer}>
        {tagsData.map((tag) => (
          <button
            key={tag}
            className={`${styles.tagBtn} ${activeTag === tag ? styles.active : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 5 talik Maqolalar Gridi */}
      <div className={styles.grid}>
        {articlesData.map((article) => (
          <div key={article.id} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={article.img} alt={article.title} className={styles.img} />
            </div>

            <div className={styles.body}>
              <h3 className={styles.cardTitle} title={article.title}>
                {article.title}
              </h3>
              <p className={styles.cardDesc}>
                {article.desc}
              </p>

              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  {article.views}
                </span>
                <span className={styles.metaItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {article.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}