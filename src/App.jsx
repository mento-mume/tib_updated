import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ProductCarousel from "./components/ProductCarousel";
// import Hero from "./components/Hero";
// import Products from "./components/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <div className="flex flex-col min-h-screen">
    //     <Header />
    //     <ProductCarousel />
    //     <Hero />
    //     <Products />
    //     <main className="flex-grow">
    //       {/* <div className="min-h-screen flex items-center justify-center bg-gray-100"></div> */}
    //       <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>
  );
};

export default App;
