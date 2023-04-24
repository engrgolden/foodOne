//next
import Link from "next/link";
import Image from "next/image";

//assets
import MenuBurgerIcon from "../../../public/images/menu-burger.svg";
import LocationIcon from "../../../public/images/location.svg";

//styles
import classes from "./HomeNavigation.module.scss";

const HomeNavigation = () => {
  return (
    <>
      <header className={classes["header"]}>
        <Link href="/navigation">
          <Image
            height={16}
            width={16}
            src={MenuBurgerIcon}
            alt="Menu burger icon"
          />
        </Link>
        <Link href="/location">
          <Image
            height={16}
            width={16}
            src={LocationIcon}
            alt="Location icon"
          />
        </Link>
      </header>
    </>
  );
};

export default HomeNavigation;
