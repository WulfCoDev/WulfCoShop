import { useCart, useDispatchCart } from "./CartContext";


const ViewCart = () => {
    const cart = useCart();
    const dispatch = useDispatchCart();
  
    // Calculate the total price of the cart items
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  
    // Function to remove an item from the cart
    const removeFromCart = (id) => {
      dispatch({ type: 'REMOVE_ITEM', id });
    };
  
    return (
      <div className="view-cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} width="50" />
                  <span>{item.title}</span>
                </div>
                <div>
                  <span>Quantity: {item.quantity}</span>
                  <span>Price: ${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && <div>Total Price: ${totalPrice}</div>}
      </div>
    );
  };
  
  export default ViewCart;