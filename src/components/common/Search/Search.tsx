//next
import Image from "next/image";

//react
import { Fragment, useRef, useState } from "react";

//assets
import SearchIcon from "../../../../public/images/search.svg";

//styles
import classes from "./Search.module.scss";

//redux
import { useAppSelector } from "@component/components/hooks/SelectorDispatchTyped";

//components
import SearchSuggestions from "./SearchSuggestions";

const Search: () => JSX.Element = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [bestRatedProp, setBestRatedProp] = useState([]);

  const fooditemsArrayState = useAppSelector(
    (state: any) => state.foodItems.items
  );

  const inputChangeHandler = (event: any) => {
    if (fooditemsArrayState.length !== 0 && event.target.value !== "") {
      const searchString = event.target.value.toLowerCase().trim();
      const uniqueState = JSON.parse(JSON.stringify(fooditemsArrayState));
      const filteredState = uniqueState.filter((foodItem: any) =>
        foodItem.title.toLowerCase().includes(searchString)
      );
      const bestRated = filteredState.sort(
        (a: any, b: any) => b.rating - a.rating
      );

      if (bestRated.length > 0) {
        setBestRatedProp(JSON.parse(JSON.stringify(bestRated.slice(0, 3))));
        console.log(bestRatedProp);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  return (
    <Fragment>
      <form className={classes["search"]} action="">
        <input
          className={classes["search-input"]}
          type="search"
          name="search"
          id="search"
          placeholder="search"
          onChange={inputChangeHandler}
        />
        <button className={classes["search-submit"]} type="submit">
          <Image
            className={classes["search-image"]}
            src={SearchIcon}
            width={16}
            height={16}
            alt="Search icon"
          ></Image>
        </button>
      </form>
      {showSuggestions && <SearchSuggestions suggestions={bestRatedProp} />}
    </Fragment>
  );
};

export default Search;
