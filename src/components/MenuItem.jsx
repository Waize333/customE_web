import { useState } from "react";
import ItemCustomization from "./ItemCustomization";

const MenuItem = ({ item }) => {
  const [showCustomization, setShowCustomization] = useState(false);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
      {/* Item Image */}
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mb-2" />
      
      {/* Item Name & Price */}
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-gray-500">${item.price}</p>

      {/* Customize & Add Button */}
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        onClick={() => setShowCustomization(true)}
      >
        Customize & Add
      </button>

      {/* Customization Modal */}
      {showCustomization && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowCustomization(false)}
            >
              ✖
            </button>

            {/* Item Customization Component */}
            <ItemCustomization item={item} onClose={() => setShowCustomization(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
