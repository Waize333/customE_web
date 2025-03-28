import { useState } from "react";
import HeroSection from "./components/HeroSection";
import CategorySlider from "./components/CategorySlider";
import CategoryList from "./components/CategoryList";
import CartBadge from "./components/CartBadge";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/*<Navbar />*/}
      {/* 🏠 Hero Section */}
      <HeroSection />

      {/* 📜 Category Slider */}
      <CategorySlider onCategorySelect={setSelectedCategory} />

      {/* 🍕 Category List */}
      <CategoryList selectedCategory={selectedCategory} />

      {/* 🛒 Floating Cart Badge */}
      <CartBadge onClick={() => setCartOpen(true)} />

      {/* 🛍️ Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* 📌 Footer */}
      <Footer />
    </div>
  );
};

export default App;
