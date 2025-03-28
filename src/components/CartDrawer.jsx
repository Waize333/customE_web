import { useCartStore } from "../store/cartStore";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className={`fixed right-0 top-12 h-full w-80 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform`}>
      <button className="p-2 text-red-500" onClick={onClose}>Close ❌</button>
      <h2 className="text-xl font-bold p-4">Cart</h2>
      {cart.length === 0 ? <p className="p-4">Your cart is empty.</p> : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="p-4 border-b">
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button className="mt-4 bg-green-500 text-white p-2 w-full" onClick={clearCart}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
