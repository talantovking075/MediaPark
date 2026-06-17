import './globals.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export const metadata = {
  title: 'Mediapark.uz — Maishiy texnika va elektronika',
  description: 'O\'zbekistonda eng yaxshi maishiy texnika va elektronika internet-do\'koni. Toshkent va butun O\'zbekiston bo\'ylab yetkazib berish.',
  keywords: 'maishiy texnika, elektronika, smartfon, televizor, muzlatgich, Toshkent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}