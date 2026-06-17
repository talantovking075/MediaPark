"use client";

import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import NewProducts from './NewProducts/NewProducts';
import Features from './Features/Features';
import AppPromo from './AppPromo/App2';
import ProductSections from './ProductSelection/ProductSelection';
import Brends from './Brend/Brend';
import Articles from './Articles/Articles';
import Navbar from './Navbar/Navbar';

// Global responsiv stillar uchun modulni import qilamiz
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navbar odatda full-width (to'liq ekran) bo'ladi */}
      <Navbar />
      
      {/* Asosiy kontent qismi */}
      <main className={styles.mainContent}>
        
        {/* Banner ham to'liq ekran bo'lishi mumkin yoki kontent ichida */}
        <div className={styles.fullWidthSection}>
          <Banner />
        </div>

        {/* Qolgan barcha seksiyalar uchun umumiy max-width va padding cheklovlari */}
        <div className={styles.container}>
          
          <section className={styles.sectionGap}>
            <Categories />
          </section>

          <section className={styles.sectionGap}>
            <NewProducts />
          </section>

          <section className={styles.sectionGap}>
            <ProductSections />
          </section>

          <section className={styles.sectionGap}>
            <Articles />
          </section>

          <section className={styles.sectionGap}>
            <Brends />
          </section>

          <section className={styles.sectionGap}>
            <Features />
          </section>

        </div>

        {/* AppPromo (Ilovani yuklab olish) odatda yana to'liq kenglikda chiroyli turadi */}
        <div className={styles.fullWidthSection}>
          <AppPromo />
        </div>

      </main>
    </div>
  );
}