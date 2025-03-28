import { useCartStore } from "../store/cartStore";

const ItemCustomization = ({ item, onClose }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 flex flex-col items-center">
        {/* Item Image */}
        <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg mb-4" />

        {/* Item Name */}
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-500">Customize your order</p>

        {/* Add to Cart Button */}
        <button 
          className="mt-4 bg-green-500 text-white px-4 py-1 rounded"
          onClick={() => { addToCart(item); onClose(); }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCustomization;
