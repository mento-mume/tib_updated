import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="max-w-full h-[144px] mb-4">
      <img src={hero} alt={hero} className="w-full h-full" />
    </div>
  );
};

export default Hero;
