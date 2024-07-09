import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import Rectangle from "../assets/rectangle.svg";
import OrderSummary from "../components/OrderSummary";
import CheckoutCard from "../components/Checkoutcard";
const Checkout = () => {
  const orders = [
    {
      subtotal: 500,
      fee: 20,
      total: 520,
    },
  ];
  const product = [
    {
      image: Rectangle,
      name: "Product Name",
      price: 100,
      quantity: 1,
    },

    {
      image: Rectangle,
      name: "Product Name",
      price: 100,
      quantity: 1,
    },

    {
      image: Rectangle,
      name: "Product Name",
      price: 100,
      quantity: 1,
    },
  ];
  return (
    <div>
      <div className="flex flex-row items-center w-full h-10 gap-2 pl-4 gap-x-16 border-y-2 border-[#CBCBCB]">
        <Link to="/">
          <img src={arrow} alt="arrow icon" className="w-10 h-10" />
        </Link>
        <p className="font-semibold font-sans text-sm">Checkout</p>
      </div>
      <div className="flex flex-col mx-4 mt-4 mb-2.5 gap-4">
        <h2 className="text-sm font-heading font-bold">Order Summary</h2>
        {product.map((product, index) => (
          <CheckoutCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
        <div className="flex justify-center gap-4 items-center h-[211px]">
          {orders.map((order, index) => (
            <OrderSummary
              key={index}
              subtotal={order.subtotal}
              fee={order.fee}
              total={order.total}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
