//next
import Link from "next/link";
import Image from "next/image";

//assets
import HomeIcon from "../../../public/images/home.svg";
import CartIcon from "../../../public/images/cart.svg";
import ProfileIcon from "../../../public/images/profile.svg";
import SettingsIcon from "../../../public/images/settings.svg";

//styles
import classes from "./HomeFooter.module.scss";

const HomeFooter = () => {
  return (
    <footer className={classes["footer"]}>
      <Link href="./homepage">
        <Image src={HomeIcon} width={26} height={26} alt="Home Icon" />
      </Link>
      <Link href="./cart">
        <Image src={CartIcon} width={26} height={26} alt="Cart Icon" />
      </Link>
      <Link href="./profile">
        <Image src={ProfileIcon} width={26} height={26} alt="Profile Icon" />
      </Link>
      <Link href="./settings">
        <Image src={SettingsIcon} width={26} height={26} alt="Settings Icon" />
      </Link>
    </footer>
  );
};

export default HomeFooter;
