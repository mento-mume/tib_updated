import Hero from "../components/Hero";
import Products from "../components/Products";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <>
      <ProductCarousel />
      <Hero />
      <Products />
    </>
  );
};

export default Home;
