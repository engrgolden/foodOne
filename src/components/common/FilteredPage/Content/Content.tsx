//components
import ImageCarousel from "./ImageCarousel";
import Stars from "../../Star/Stars";

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
                  foodItem.title.includes(props.data.id)
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
    <>
      {Boolean(filteredItems.length) &&
        filteredItems.map((item: any) => (
          <section key={item.id} className={classes["product-section"]}>
            <div className={classes["image-wrapper"]}>
              <ImageCarousel carouselItem={item} />
            </div>
            <p>{item.title}</p>
            <Stars star={item.rating} />
            <p>{item.price} per plate</p>
          </section>
        ))}
    </>
  );
};

export default Content;
