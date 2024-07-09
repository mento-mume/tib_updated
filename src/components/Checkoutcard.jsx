import PropTypes from "prop-types";

const CheckoutCard = ({ product }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 gap-4">
      <div className="w-1/4">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md w-full"
        />
      </div>
      <div className="flex flex-col justify-between w-3/4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-normal">
              Styled by <span className="text-sm text-primary">TIB</span>
            </p>
            <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-red-600 text-sm font-bold">${product.price}</p>
          <div className="flex items-center border rounded-lg">
            <button className="px-2 py-1">-</button>
            <span className="px-2">{product.quantity}</span>
            <button className="px-2 py-1">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
CheckoutCard.propTypes = {
  product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CheckoutCard;
