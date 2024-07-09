import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="w-full h-[144px] mb-4 sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
      <img src={hero} alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
};

export default Hero;
