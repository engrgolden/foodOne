//styles
import classes from "./ItemModal.module.scss";

//redux
import { useAppSelector, useAppDispatch } from "../hooks/SelectorDispatchTyped";

//components
import Item from "../common/Item/Item";

//redux
import { ItemModalActions } from "../store/itemModalSlice";

const ItemModal = (props: any) => {
  const dispatch = useAppDispatch();
  const foodItemsState = useAppSelector((state: any) => state.foodItems);
  const selectedItem = foodItemsState.items.filter(
    (item: any) => item.id === Number(props.id)
  );

  const hideModalHandler = (event: any) => {
    dispatch(ItemModalActions.unloader());
  };
  return (
    <section className={classes["modal-background"]} onClick={hideModalHandler}>
      <Item className={classes["modal-item"]} item={selectedItem[0]} />
    </section>
  );
};

export default ItemModal;
