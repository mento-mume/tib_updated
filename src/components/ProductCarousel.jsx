// import image1 from "../assets/tops.svg";
// import image2 from "../assets/buttoms.svg";
// import image3 from "../assets/dresses.svg";
// import image4 from "../assets/suits.svg";
// import image5 from "../assets/sandals.svg";

// import { useState } from "react";
// const categories = [
//   { name: "Tops", icon: image1 },
//   { name: "Bottoms", icon: image2 },
//   { name: "Dresses", icon: image3 },
//   { name: "Suits", icon: image4 },
//   { name: "Sandals", icon: image5 },
//   { name: "Suits", icon: image4 },
// ];

// function ProductCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="overflow-x-auto">
//       <div className="flex space-x-4 p-4">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center cursor-pointer ${
//               activeIndex === index ? "text-primary" : "text-gray-400"
//             }`}
//             onClick={() => setActiveIndex(index)}
//           >
//             <div
//               className={`text-3xl ${
//                 activeIndex === index ? "rounded-full p-2" : ""
//               }`}
//             >
//               <img
//                 src={category.icon}
//                 alt={category.name}
//                 className="w-12 h-12"
//               />
//             </div>
//             <span className="mt-2">{category.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCarousel;

import image1 from "../assets/tops.svg";
import image2 from "../assets/buttoms.svg";
import image3 from "../assets/dresses.svg";
import image4 from "../assets/suits.svg";
import image5 from "../assets/sandals.svg";

import { useState } from "react";

const categories = [
  { name: "Tops", icon: image1 },
  { name: "Bottoms", icon: image2 },
  { name: "Dresses", icon: image3 },
  { name: "Suits", icon: image4 },
  { name: "Sandals", icon: image5 },
  { name: "Tops", icon: image1 },
  { name: "Bottoms", icon: image2 },
  { name: "Dresses", icon: image3 },
  { name: "Suits", icon: image4 },
  { name: "Sandals", icon: image5 },
];

function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 p-4 lg:justify-center lg:space-x-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition duration-300 ${
              activeIndex === index ? "text-primary" : "text-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className={`text-3xl ${
                activeIndex === index ? "rounded-full p-2 bg-gray-200" : ""
              }`}
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </div>
            <span className="mt-2 text-sm md:text-base lg:text-lg">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
