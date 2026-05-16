import { CartProvider } from './context/CartContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import Brands from './components/Brands'
import Banner from './components/Banner'
import InstagramSection from './components/InstagramSection'
import Cart from './components/Cart'
import Footer from './components/Footer'

export default function App() {
  return (
    <CartProvider>
      <Nav />
      <Hero />
      <Categories />
      <ProductGrid id="new-in" title="New In" subtitle="The latest arrivals from our luxury partners" />
      <Brands />
      <Banner />
      <ProductGrid id="girls" title="Girls" subtitle="Effortless style for your little princess" filter="girls" />
      <ProductGrid id="boys" title="Boys" subtitle="Sharp looks for the little gentleman" filter="boys" />
      <ProductGrid id="baby" title="Baby" subtitle="The softest luxury for your newest arrival" filter="baby" />
      <InstagramSection />
      <Footer />
      <Cart />
    </CartProvider>
  )
}
