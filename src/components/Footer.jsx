import menu from "../assets/menu-square.svg";
import basket from "../assets/basket.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full pt-2 px-8 h-18 mt-[25px] pb-4">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={menu} alt="menuicon" />
          <p>Products</p>
        </div>
        <Link
          to="/Checkout"
          className="flex flex-col items-center justify-center gap-2"
        >
          <img src={basket} alt="basketIcon" />
          <p>Basket</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
