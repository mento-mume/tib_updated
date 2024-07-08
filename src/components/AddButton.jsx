import { useState } from "react";

const AddButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[80px] h-[32px] gap-[8px] border-2 rounded-[7px] transition-colors duration-300 ${
        isSelected
          ? "bg-[#A91818] text-white"
          : "border-[#A91818] text-[#A91818] hover:bg-[#FF76761F] hover:text-black"
      }`}
    >
      {isSelected ? "Added" : "Add"}
    </button>
  );
};

export default AddButton;
