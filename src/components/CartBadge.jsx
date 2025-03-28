import { useCartStore } from "../store/cartStore";

const CartBadge = ({ onClick }) => {
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg">
      🛒 {cartCount}
    </button>
  );
};

export default CartBadge;
