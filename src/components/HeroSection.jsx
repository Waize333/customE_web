import HeroBg from "../assets/HeroBg.jpeg"; // Import the background image
import Logo from "../assets/logo.jpeg"; // Import the logo image

const HeroSection = () => {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }} // Dynamically set background
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <img src={Logo} alt="Restaurant Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold">Your Website Name</h1>
      </div>
    </div>
  );
};

export default HeroSection;
