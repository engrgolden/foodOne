//components
import HomeNavigation from "./HomeNavigation";
import Search from "../common/Search/Search";
import HomeCategories from "./HomeCategories";
import HomeItems from "./HomeItems";
import HomeFooter from "./HomeFooter";

//redux
import { useAppDispatch } from "../hooks/SelectorDispatchTyped";
import { getFoodItems } from "../store/foodItemsSlice";

//react
import { useEffect } from "react";

//style
import classes from "./Home.module.scss";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFoodItems());
  }, [dispatch]);

  return (
    <>
      <div className={classes["home"]}>
        <HomeNavigation />
        <Search />
        <HomeCategories />

        <HomeItems />
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
