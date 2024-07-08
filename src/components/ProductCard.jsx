import PropTypes from "prop-types";
import AddButton from "./AddButton.jsx";
const ProductCard = ({ imageUrl, name, amount }) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[212]px object-cover rounded-t"
      />
      <div className="flex flex-col bg-[#F6F6F6]  p-2 drop-shadow-[0px_4px_4px_0px_rgba(203, 203, 203, 0.3)] ">
        <p className="text-[10px] font-normal ">
          Styled by <span className="text-sm text-primary">TIB</span>
        </p>
        <h3 className="text-sm font-semibold mb-2">{name}</h3>

        <div className="flex flex-row justify-between items-center">
          <p className="text--700 text-sm text-secondary font-bold font-sans pt-[12px]">
            ${amount}
          </p>
          <AddButton />
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
