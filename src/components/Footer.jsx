import menu from "../assets/menu-square.svg";
import basket from "../assets/basket.svg";
const Footer = () => {
  return (
    <div className="flex w-full pt-2 px-8 h-18 gap-[72px]">
      <div className="flex flex-row justify-between items-center">
        <div>
          <img src={menu} alt="menuicon"></img>
          <p>Products</p>
        </div>
        <div>
          <img src={basket} alt="basketIcon"></img>
          <p>Basket</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
