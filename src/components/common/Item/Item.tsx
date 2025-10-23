//styles
import classes from "./Item.module.scss";

//components
import Stars from "../Star/Stars";
import ImageCarousel from "../FilteredPage/Content/ImageCarousel";

const Item = (props: any) => {
  console.log(props);
  return (
    <>
      <section
        className={`${classes["product-section"]} + ${
          props.className && props.className
        }`}
      >
        <div className={classes["image-wrapper"]}>
          <ImageCarousel carouselItem={props.item} />
        </div>
        <p>{props.item.title}</p>
        <Stars star={props.item.rating} />
        <p>{props.item.price} per plate</p>
      </section>
    </>
  );
};

export default Item;
