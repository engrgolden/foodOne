//components
import HomeNavigation from "./HomeNavigation";
import Search from "../common/Search/Search";
import HomeCategories from "./HomeCategories";
import HomeItems from "./HomeItems";
import HomeFooter from "./HomeFooter";
import ItemModal from "./ItemModal";

//redux
import { useAppSelector } from "../hooks/SelectorDispatchTyped";

//style
import classes from "./Home.module.scss";

const Home = () => {
  const itemModalState = useAppSelector((state) => state.itemModal);

  return (
    <>
      {itemModalState.show && <ItemModal id={itemModalState.id} />}
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
