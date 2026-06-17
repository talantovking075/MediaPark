import React from 'react'
import AboutAwards from './components/AboutAwards/AboutAwards'
import AboutContact from './components/AboutContact/AboutContact'
import AboutDelivery from './components/AboutDelivery/AboutDelivery'
import AboutInfo from './components/AboutInfo/AboutInfo'
import AboutStats from './components/AboutStats/AboutStats'
import AboutValues from './components/AboutValues/AboutValues'
import AboutVideo from './components/AboutVideo/AboutVideo'

export default function OurPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%' }}>
      
      {/* 1. AboutHero - Katta Jamoaviy Rasm Banneri (To'g'ridan-to'g'ri shu yerda) */}
      <section 
        style={{
          backgroundImage: 'url("https://mediapark.uz/images/about-back.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: '900', letterSpacing: '2px' }}>
          MEDIAPARK
        </h1>
      </section>

      {/* 2. Biz haqimizda matnli qism */}
      <AboutInfo />

      {/* 3. Statistika (10 let, 35 tochek...) */}
      <AboutStats />

      {/* 4. Video blok (21000+ va video player) */}
      <AboutVideo />

      {/* 5. Cennosti (Qadriyatlar bloklari) */}
      <AboutValues />

      {/* 6. Nagradi (Mukofotlar) */}
      <AboutAwards />

      {/* 7. Delivery / Dostavka foni */}
      <AboutDelivery />

      {/* 8. Kontakt formasi va Top-kompaniyalar logotiplari */}
      <AboutContact />
    </div>
  )
}