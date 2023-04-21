//components
import ImageCarousel from "./ImageCarousel";
import Stars from "../../Star/Stars";

//style
import classes from "./Content.module.scss";

//redux
import { useAppSelector } from "@component/components/hooks/SelectorDispatchTyped";

const Content = () => {
  const filteredItems = useAppSelector((state) => state.filteredPage.items);

  return (
    <>
      {filteredItems.map((item: any) => (
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
