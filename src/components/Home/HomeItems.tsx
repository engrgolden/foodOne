//assets
import upArrow from "../../../public/images/up-arrow.svg";
import downArrow from "../../../public/images/down-arrow.svg";

//styles
import classes from "./HomeItems.module.scss";

//redux
import { useAppSelector, useAppDispatch } from "../hooks/SelectorDispatchTyped";
import { ItemModalActions } from "../store/itemModalSlice";

//next
import Image from "next/image";
import Link from "next/link";

//components
import Stars from "../common/Star/Stars";

//react
import { useEffect, useState, useRef } from "react";

const HomeItems = () => {
  const dispatch = useAppDispatch();
  const foodItemsState = useAppSelector((state: any) => state.foodItems);

  let [foodItemsToRender, setFoodItemsToRender] = useState(
    foodItemsState.items
  );

  let [sortDirection, setSortDirection] = useState("ascending");

  let selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setFoodItemsToRender(unique(foodItemsState.items));
  }, [foodItemsState.items]);

  const unique = (data: any) => JSON.parse(JSON.stringify(data));

  const specificSetter = (arrayProp: any, key: any, direction: any) => {
    let sortedItems;
    if (key === "default") {
      sortedItems = unique(arrayProp);
    } else if (key === "title") {
      console.log(arrayProp);
      sortedItems = unique(arrayProp).sort((a: any, b: any) =>
        a[key].localeCompare(b[key], undefined, { sensitivity: "base" })
      );
    } else {
      sortedItems = unique(arrayProp).sort((a: any, b: any) =>
        a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
      );
    }

    if (direction === "descending") {
      console.log(unique(arrayProp));
      sortedItems = unique(sortedItems.reverse());
    }

    setFoodItemsToRender(unique(sortedItems));
  };

  const sortDirectionHandler = (event: any) => {
    console.log(event.target.alt);
    if (selectRef.current !== null) {
      setSortDirection(event.target.alt);
      specificSetter(
        foodItemsState.items,
        selectRef.current.value,
        event.target.alt
      );
    }
  };

  const sortValueChangeHandler = (event: any) => {
    specificSetter(foodItemsState.items, event.target.value, sortDirection);
  };

  const viewItemHandler = (event: any) => {
    dispatch(ItemModalActions.loader({ id: event.target.dataset.id }));
  };

  return (
    foodItemsState.isLoaded && (
      <section className={classes["homepage-items"]}>
        <header className={classes["homepage-items__header"]}>
          <h3 className={classes["homepage-items-title"]}>Popular Meals</h3>
          <section
            className={classes["homepage-items-sort"]}
            defaultValue={"default"}
          >
            <label htmlFor="sort">Sort:</label>
            <select
              name="sort"
              id="sort"
              ref={selectRef}
              onChange={sortValueChangeHandler}
            >
              <option value="default">default</option>
              <option value="title">alphabetical</option>
              <option value="price">price</option>
              <option value="rating">rating</option>
            </select>
            <div>
              <button
                onClick={sortDirectionHandler}
                className={classes["homepage-items-sort-direction"]}
                value="ascending"
              >
                <Image src={upArrow} alt="ascending" fill></Image>
              </button>
              <button
                onClick={sortDirectionHandler}
                className={classes["homepage-items-sort-direction"]}
                value="descending"
              >
                <Image src={downArrow} alt="descending" fill></Image>
              </button>
            </div>
          </section>
        </header>
        {JSON.stringify(foodItemsToRender) !== "[]" && (
          <ul className={classes["homepage-items-list"]}>
            {foodItemsToRender.map((foodItem: any) => (
              <li key={foodItem.id} className={classes["homepage-item"]}>
                <div className={classes["homepage-item__image-wrapper"]}>
                  <Image
                    className={classes["homepage-item__image"]}
                    src={foodItem.thumbnail}
                    alt={foodItem.title}
                    fill
                  />

                  <button
                    onClick={viewItemHandler}
                    className={classes["homepage-item__view"]}
                    data-id={foodItem.id}
                  >
                    View
                    <hr />
                  </button>
                </div>
                <div className={classes["homepage-item-content"]}>
                  <p>{foodItem.title}</p>
                  <Stars star={foodItem.rating} />
                  <p>
                    <span
                      style={{
                        textDecoration: "line-through",
                        textDecorationStyle: "double",
                      }}
                    >
                      N
                    </span>
                    {foodItem.price} per plate
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  );
};

export default HomeItems;
