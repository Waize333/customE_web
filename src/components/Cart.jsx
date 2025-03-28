const Cart = ({ cart }) => {
    return (
      <div className="p-4 bg-gray-100">
        <h2 className="text-xl font-bold">🛒 Your Cart</h2>
        {cart.map((item, index) => (
          <p key={index}>{item.name} - ${item.price}</p>
        ))}
      </div>
    );
  };
  
  export default Cart;
  