//next
import Link from "next/link";

//styles
import classes from "./HomeCategories.module.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { filteredPageActions } from "../store/filteredPageSlice";

const HomeCategories = () => {
  const dispatch = useDispatch();
  const categoriesArrayState = useSelector(
    (state) => state.foodItems.categories
  );

  const filteredItemsState = useSelector(
    (state) => state.foodItems.filteredItems
  );

  const categoryLinkClickHandler = (event) => {
    const propTitle = event.target.innerText;
    console.log(filteredItemsState[propTitle]);
    dispatch(
      filteredPageActions.change({
        header: propTitle,
        items: filteredItemsState[propTitle],
      })
    );
  };

  return (
    <section className={classes["homepage-categories"]}>
      <h3 className={classes["homepage-categories-title"]}>Meal Categories</h3>
      {JSON.stringify(categoriesArrayState) !== "[]" && (
        <ul className={classes["homepage-categories-list"]}>
          {categoriesArrayState.map((category, index) => (
            <div
              className={classes["homepage-categories-list-wrapper"]}
              key={index}
            >
              <li className={classes["homepage-categories-list-item"]}>
                <Link
                  onClick={categoryLinkClickHandler}
                  href={`./category/ ${category}`}
                  className={classes["homepage-categories-list-link"]}
                >
                  {category}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HomeCategories;
