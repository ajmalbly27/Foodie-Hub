import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 min-h-[70vh]">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="m-auto sm:w-9/12 lg:w-6/12">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add Items to the cart!</h1>
        )}
        <CartItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
