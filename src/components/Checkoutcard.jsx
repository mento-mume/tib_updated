import PropTypes from "prop-types";
import deleteIcon from "../assets/deleteIcon.svg";
const CheckoutCard = ({ image, name, price, quantity }) => {
  return (
    <div className="flex items-center bg-[#EFEFEF] rounded-lg shadow-md p-4 gap-4">
      <div className="w-[100px] h-[100px] rounded-xl bg-white">
        <img src={image} alt={name} className="rounded-md w-full" />
      </div>
      <div className="flex flex-col justify-between bg-white drop-shadow-md p-2 gap-2 w-3/4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-normal">
              Styled by <span className="text-sm text-primary">TIB</span>
            </p>
            <h3 className="text-sm font-semibold mb-2">{name}</h3>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-red-600 text-sm font-bold">${price}</p>
          <div className="flex items-center border rounded-lg gap-0.5">
            <button className="px-2 py-1 border-gray-800 rounded-l-xl">
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button className="px-2 py-1 rounded-r-lg border-gray-800">
              +
            </button>
          </div>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <img src={deleteIcon} alt="delete Icon" />
      </button>
    </div>
  );
};
CheckoutCard.propTypes = {
  product: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CheckoutCard;
