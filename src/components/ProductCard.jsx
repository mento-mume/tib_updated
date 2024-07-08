import PropTypes from "prop-types";
import AddButton from "./AddButton.jsx";
const ProductCard = ({ imageUrl, name, amount }) => {
  return (
    <div className="w-full h-[292px] ">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[212]px object-cover rounded-t"
      />
      <div className="p-4">
        <p className="text-[10px] font-normal ">
          Styled by <span className="text-sm">TIB</span>
        </p>
        <h3 className="text-sm font-semibold mb-2">{name}</h3>

        <div className="flex flex-row justify-between items-center">
          <p className="text--700 text-sm mb-4 text-secondary font-bold font-sans pt-[12px]">
            ${amount}
          </p>
          <AddButton />
          {/* <button className=" rounded-[7px] h-[24px] w-[60px] px-[12px] py-[6px] border-[1.5px]  border-[#A91818] text-opacity-50 text-center text-[#A91818]">
            Add
          </button> */}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default ProductCard;
