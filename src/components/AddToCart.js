import { useCartContext } from "../context/cart";
function AddToCart({ product }) {
  const { cart, addToCart, removeFromCart } = useCartContext();

  const productInCart = cart[product.id];

  const handleRemoveFromCart = () => {
    console.log("handle remove to cart");
    removeFromCart(product);
  };
  const handleAddToCart = () => {
    console.log("handle add to cart");
    addToCart(product);
  };

  if (!productInCart) {
    return (
      <div className="add-to-cart" onClick={handleAddToCart}>
        Add To Cart{" "}
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div className="add" onClick={handleRemoveFromCart}>
          -
        </div>
        <div className="quantity">{productInCart.quantity}</div>
        <div className="add" onClick={handleAddToCart}>
          +
        </div>
      </div>
    );
  }
}

export default AddToCart;
