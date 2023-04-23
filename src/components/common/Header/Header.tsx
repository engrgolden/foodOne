//next
import Link from "next/link";
import Image from "next/image";

//assets
import BackArrow from "../../../../public/images/back-arrow.svg";

//style
import classes from "./Header.module.scss";

const Header = (props: any) => {
  const headerProp =
    props.data.trim()[0].toUpperCase() + props.data.trim().slice(1);

  return (
    <header className={classes["header"]}>
      <Link href="../homepage">
        <Image src={BackArrow} alt="Back icon" width={26} height={26}></Image>
      </Link>
      <p>{headerProp}</p>
    </header>
  );
};

export default Header;
