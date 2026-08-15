import { useState } from "react";
import "./Cart.css";

const initialCart = [
  {
    id: 1,
    title: "Apple iPhone 16 Pro Max (256GB)",
    price: 129999,
    qty: 1,
    image:
      "https://m.media-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 29999,
    qty: 2,
    image:
      "https://m.media-amazon.com/images/I/61+btxzpfDL._SX679_.jpg",
  },
];

function Cart() {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const handleCheckout = async(req,res,next) => {
    try{
      const response = await fetch("http://localhost:5000/products/checkout",)
    }catch(err){
      next(err);
    }
  }
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-left">

        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <h3>Your Cart is Empty</h3>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div className="item-details">
                <h3>{item.title}</h3>

                <p className="price">
                  ₹{item.price.toLocaleString()}
                </p>

                <div className="qty-section">

                  <button onClick={() => decreaseQty(item.id)}>
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>

              <div className="item-total">
                ₹{(item.price * item.qty).toLocaleString()}
              </div>

            </div>
          ))
        )}
      </div>

      <div className="cart-right">

        <h3>
          Subtotal ({cart.length} items)
        </h3>

        <h2>₹{subtotal.toLocaleString()}</h2>

        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;