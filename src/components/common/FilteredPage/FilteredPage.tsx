//components
import Header from "../Header/Header";
import Content from "./Content/Content";
import { getFoodItems } from "@component/components/store/foodItemsSlice";

// react
import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

const FilteredPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  const display = useSelector((state) => state.filteredPage.header);
  return (
    display && (
      <>
        <Header />
        <Content />
      </>
    )
  );
};

export default FilteredPage;
