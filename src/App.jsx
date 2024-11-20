import BusinessStats from "./BusinessStats/BusinessStats"
import Client from "./Client/Client"
import Feature from "./Feature/Feature"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Contact from "./Contact/Contact"
import About from "./About/About"
import Products from "./Products/Products"
import ProductDetails from "./ProductDetails/ProductDetails"
import Services from "./Services/Services"
import FloatingCatalogDownload from "./CatalogDownload/FloatingCatalogDownload"
import ScrollToTop from "./ScrollToTop/ScrollToTop"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Feature />
              <BusinessStats />
              <Client />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingCatalogDownload />  
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App