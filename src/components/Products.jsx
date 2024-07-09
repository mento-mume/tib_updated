import ProductCard from "./ProductCard";
import Shirt from "../assets/shirt.png";
const Products = () => {
  const products = [
    {
      imageUrl: Shirt,
      name: "Product Name",
      amount: "100",
    },
    {
      imageUrl: Shirt,
      name: "Product Name",
      amount: "100",
    },
  ];
  return (
    <div className="mx-[30px]  h-full mt-[25px]  ">
      <div className="flex flex-row justify-between">
        <p className=" text-sm font-bold">New</p>
        <p className=" text-sm font-bold text-secondary"> View All</p>
      </div>

      <div className="flex flex-row w-full h-full gap-x-4 mt-2">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            amount={product.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
