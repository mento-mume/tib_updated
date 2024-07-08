import { BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCarousel from "./components/ProductCarousel";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ProductCarousel />
        <Hero />
        <Products />
        <main className="flex-grow">
          {/* <div className="min-h-screen flex items-center justify-center bg-gray-100"></div> */}
          <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
