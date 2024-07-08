import PropTypes from "prop-types";
const Card = ({ imageUrl, text }) => {
  return (
    <div className="w-[60px] h-[74px] ">
      <img src={imageUrl} alt={text} className="w-full " />
      <div className="p-2">
        <p className="text-gray-700 text-xs">{text}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
