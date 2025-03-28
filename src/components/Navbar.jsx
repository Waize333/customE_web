const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md h-12 flex justify-between items-center px-6 z-50">
        {/* Logo */}
        <div className="text-xl font-bold">🍕 WebNAme</div>
  
        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-800 transition">Home</a>
          <a href="#" className="hover:text-gray-800 transition">Menu</a>
          <a href="#" className="hover:text-gray-800 transition">About</a>
        </div>
  
        <div className="relative">
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  