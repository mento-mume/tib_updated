import menu from "../assets/menu-square.svg";
import basket from "../assets/basket.svg";
const Footer = () => {
  return (
    // <div className="flex w-full pt-2 px-8 h-[72px]">
    //   <div className="flex flex-row justify-between items-center w-full">
    //     <div className="items-center">
    //       <img src={menu} alt="menuicon"></img>
    //       <p>Products</p>
    //     </div>
    //     <div>
    //       <img src={basket} alt="basketIcon"></img>
    //       <p className="items-center">Basket</p>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full pt-2 px-8 h-18">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={menu} alt="menuicon" />
          <p>Products</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={basket} alt="basketIcon" />
          <p>Basket</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
