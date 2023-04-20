//next
import Image from "next/image";

//assets
import StarsIcon from "../../../../public/images/star.svg";

//style
import classes from "./Stars.module.scss";

const Stars = (props) => {
  const percentage = (props.star * 100) / 5;
  const gradientString = `linear-gradient(90deg, gold ${percentage}%, white ${percentage}%)`;
  return (
    <div className={classes["wrapper"]} style={{ background: gradientString }}>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <Image
          style={{ left: `${i * 20}%` }}
          src={StarsIcon}
          alt={"stars"}
          width={13}
          key={i}
          height={13}
        />
      ))}
    </div>
  );
};

export default Stars;
