import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white mt-[60px] p-2.5 ml-px gap-2.5">
      <div className="container mx-auto flex justify-between items-center  ">
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <img src={menu} alt="Logo" className="w-8 h-8" />
          </button>
        </div>

        <div className="text-2xl font-heading">TIB</div>
        <div>
          <img src={search} alt="search" className="w-8 h-8" />
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
        >
          <ul className="md:flex md:space-x-4 text-center md:text-left">
            <li>
              <Link to="/" className="block py-2 px-4 text-secondary md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-4 text-secondary md:p-0"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 text-secondary md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
