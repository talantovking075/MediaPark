import Banner from './Banner/Banner'
import Categories from './Categories/Categories'
import NewProducts from './NewProducts/NewProducts'
import Features from './Features/Features'
import AppPromo from './AppPromo/App2'
import ProductSections from './ProductSelection/ProductSelection'
import Brends from './Brend/Brend'
import Articles from './Articles/Articles'
import Navbar from './Navbar/Navbar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <NewProducts />
      <ProductSections />
      <Articles />
      <Brends />
      <Features />
      <AppPromo />
    </>
  )
}