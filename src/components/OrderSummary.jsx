// components/OrderSummary.js

const OrderSummary = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md w-full">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">$500</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Shipping fee</span>
        <span className="font-medium">$20</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600">Total</span>
        <span className="font-medium">$520</span>
      </div>
      <button className="w-full bg-red-700 text-white py-2 rounded-md">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
