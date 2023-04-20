//next
import Image from "next/image";

//react
import { useState } from "react";

//style
import classes from "./ImageCarousel.module.scss";

//assets
import Circle from "../../../../../public/images/circle.svg";
import LeftArrow from "../../../../../public/images/left-arrow.svg";
import RightArrow from "../../../../../public/images/right-arrow.svg";

const ImageCarousel = (props: any) => {
  const carouselItem = props.carouselItem;

  const carouselImages = carouselItem.images;

  const imageCount = carouselImages.length;

  const [visibleId, setVisibleId] = useState(0);

  const previousClickHandler = () => {
    setVisibleId((state) => state - 1);
  };

  const nextClickHandler = () => {
    setVisibleId((state) => state + 1);
  };

  const absoluteClickHandler = (index: any) => {
    setVisibleId(() => index);
  };

  return (
    <>
      {
        <Image
          className={classes["image"]}
          alt="product-image"
          fill
          src={
            carouselImages[((visibleId % imageCount) + imageCount) % imageCount]
          }
        />
      }

      <div>
        <ul className={classes["relative-navigation"]}>
          <li>
            <button className={classes["button-image-wrapper"]}>
              <Image
                alt="Previous Image"
                src={LeftArrow}
                fill
                className={classes["icon"]}
                onClick={previousClickHandler}
              />
            </button>
          </li>
          <li>
            <button className={classes["button-image-wrapper"]}>
              <Image
                alt="Next Image"
                src={RightArrow}
                fill
                className={classes["icon"]}
                onClick={nextClickHandler}
              />
            </button>
          </li>
        </ul>
        <ul className={classes["absolute-navigation"]}>
          {carouselImages.map((e, i) => (
            <li key={i}>
              <button className={classes["button-image-wrapper"]}>
                <Image
                  alt={`Image ${i}`}
                  src={Circle}
                  fill
                  onClick={() => absoluteClickHandler(i)}
                  className={classes["icon"]}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ImageCarousel;
