//components
import Header from "../Header/Header";
import Content from "./Content/Content";
import { getFoodItems } from "@component/components/store/foodItemsSlice";

// react
import { useEffect } from "react";

//redux
import {
  useAppSelector,
  useAppDispatch,
} from "@component/components/hooks/SelectorDispatchTyped";

const FilteredPage = (props: any) => {
  const dispatch = useAppDispatch();
  const foodItemsState = useAppSelector((state) => state.foodItems);
  const display = foodItemsState.isLoaded;
  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  return (
    <>
      {display && (
        <>
          <Header data={props.data.header} />
          <Content data={props.data} />
        </>
      )}
    </>
  );
};

export default FilteredPage;
