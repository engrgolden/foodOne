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

const FilteredPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  const display = useAppSelector((state) => state.filteredPage.header);
  return (
    <>
      {display && (
        <>
          <Header />
          <Content />
        </>
      )}
    </>
  );
};

export default FilteredPage;
