//redux
import { useAppSelector, useAppDispatch } from "../hooks/SelectorDispatchTyped";
import { cartItemsActions } from "../store/cartItemsSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const CartState = useAppSelector((state: any) => state.cartItems);

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
