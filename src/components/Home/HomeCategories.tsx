//next
import Link from "next/link";

//styles
import classes from "./HomeCategories.module.scss";

//redux
import { useAppSelector } from "../hooks/SelectorDispatchTyped";

const HomeCategories = () => {
  const categoriesArrayState = useAppSelector(
    (state) => state.foodItems.categories
  );

  return (
    <section className={classes["homepage-categories"]}>
      <h3 className={classes["homepage-categories-title"]}>Meal Categories</h3>
      {JSON.stringify(categoriesArrayState) !== "[]" && (
        <ul className={classes["homepage-categories-list"]}>
          {categoriesArrayState.map((category: any, index: any) => (
            <div
              className={classes["homepage-categories-list-wrapper"]}
              key={index}
            >
              <li className={classes["homepage-categories-list-item"]}>
                <Link
                  href={`./category/${category}`}
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
