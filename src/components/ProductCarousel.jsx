import Card from "./Card";
import image1 from "../assets/tops.svg";
import image2 from "../assets/buttoms.svg";
import image3 from "../assets/dresses.svg";
import image4 from "../assets/suits.svg";
import image5 from "../assets/sandals.svg";

const ProductCarousel = () => {
  const cards = [
    {
      imageUrl: image1,
      text: "Tops",
    },
    {
      imageUrl: image2,
      text: "Buttoms",
    },
    {
      imageUrl: image3,
      text: "Dresses",
    },
    {
      imageUrl: image4,
      text: "Suits",
    },
    {
      imageUrl: image5,
      text: "Sandals",
    },
  ];

  return (
    <div className="mt-[22px] ml-4 mb-4">
      <div className="font-heading text-sm font-bold mb-4">Product</div>
      <div className="flex flex-row justify-between">
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
