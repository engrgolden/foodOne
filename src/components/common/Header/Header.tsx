//next
import Link from "next/link";
import Image from "next/image";

//assets
import BackArrow from "../../../../public/images/back-arrow.svg";

//style
import classes from "./Header.module.scss";

//redux
import { useAppSelector } from "@component/components/hooks/SelectorDispatchTyped";
const Header = () => {
  const filteredPageState = useAppSelector((state) => state.filteredPage);
  const headerProp =
    filteredPageState.header.trim()[0].toUpperCase() +
    filteredPageState.header.trim().slice(1);

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
