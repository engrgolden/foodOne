//components
import Item from "../../Item/Item";

//style
import classes from "./Content.module.scss";

//react
import { useState, useEffect } from "react";

//redux
import { useAppSelector } from "@component/components/hooks/SelectorDispatchTyped";

const Content = (props: any) => {
  const foodItemsState = useAppSelector((state: any) => state.foodItems);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (foodItemsState.isLoaded) {
      switch (props.data.type) {
        case "category":
          setFilteredItems(
            JSON.parse(
              JSON.stringify(
                foodItemsState.items.filter(
                  (foodItem: any) => foodItem.category === props.data.id
                )
              )
            )
          );
          break;
        case "search":
          setFilteredItems(
            JSON.parse(
              JSON.stringify(
                foodItemsState.items.filter((foodItem: any) =>
                  foodItem.title
                    .toLowerCase()
                    .includes(props.data.id.toLowerCase())
                )
              )
            )
          );
          break;

        default:
          console.log("pass");
      }
    }
  }, [foodItemsState, props]);

  return (
    <section className={classes["wrapper"]}>
      {Boolean(filteredItems.length) &&
        filteredItems.map((item: any, index: any) => (
          <div
            key={item.id}
            className={classes["item-wrapper"]}
            style={{
              backgroundColor: Boolean(index % 2)
                ? `rgb(${240},${240},${240})`
                : `rgb(${200},${200},${200})`,
            }}
          >
            <Item item={item} />
          </div>
        ))}
    </section>
  );
};

export default Content;
