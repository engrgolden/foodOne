//styles
import classes from "./HomeItems.module.scss";

//redux
import { useAppSelector } from "../hooks/SelectorDispatchTyped";

//next
import Image from "next/image";
import Link from "next/link";

//components
import Stars from "../common/Star/Stars";

const HomeItems = () => {
  const fooditemsArrayState = useAppSelector(
    (state: any) => state.foodItems.items
  );
  return (
    <section className={classes["homepage-items"]}>
      <h3 className={classes["homepage-items-title"]}>Popular Meals</h3>
      {JSON.stringify(fooditemsArrayState) !== "[]" && (
        <ul className={classes["homepage-items-list"]}>
          {fooditemsArrayState.map((foodItem: any) => (
            <li key={foodItem.id} className={classes["homepage-item"]}>
              <div className={classes["homepage-item__image-wrapper"]}>
                <Image
                  className={classes["homepage-item__image"]}
                  src={foodItem.thumbnail}
                  alt={foodItem.title}
                  fill
                />

                <button className={classes["homepage-item__view"]}>
                  <Link
                    className={classes["homepage-item__view-link"]}
                    href={`./view/${foodItem.id}`}
                  >
                    View
                  </Link>{" "}
                  <hr />
                </button>
              </div>
              <div className={classes["homepage-content"]}>
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
  );
};

export default HomeItems;
