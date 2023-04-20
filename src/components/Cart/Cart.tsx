//redux
import { useSelector, useDispatch } from "react-redux";
import { cartItemsActions } from "../store/cartItemsSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const CartState = useSelector((state: any) => state.cartItems);

  const randomHandler = () => {
    console.log(CartState.string);
    dispatch(cartItemsActions.removeItem());
  };

  return (
    <>
      <p onClick={randomHandler}>hi</p>
    </>
  );
};

export default Cart;
