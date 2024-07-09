// components/OrderSummary.js
import PropTypes from "prop-types";
const OrderSummary = ({ subtotal, fee, total }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md w-full">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">{subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Shipping fee</span>
        <span className="font-medium">{fee}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600">Total</span>
        <span className="font-medium">{total}</span>
      </div>
      <button className="w-full bg-red-700 text-white py-2 rounded-md">
        Checkout
      </button>
    </div>
  );
};
OrderSummary.propTypes = {
  subtotal: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default OrderSummary;
