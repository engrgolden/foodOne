//next
import Image from "next/image";
import Link from "next/link";

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
  const [bestRatedProp, setBestRatedProp] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [searchLink, setSearchLink] = useState(<></>);
  const searchLinkRef = useRef<HTMLAnchorElement>(null);

  const fooditemsArrayState = useAppSelector(
    (state: any) => state.foodItems.items
  );

  const setter = (
    bestprop: any = [],
    suggestions: any = false,
    submit: any = true,
    link: any = <></>
  ) => {
    setBestRatedProp(bestprop);
    setShowSuggestions(suggestions);
    setDisableSubmit(submit);
    setSearchLink(link);
  };

  const inputChangeHandler = (event: any) => {
    const searchString = event.target.value.toLowerCase().trim();
    const uniqueState = JSON.parse(JSON.stringify(fooditemsArrayState));
    if (searchString !== "") {
      if (uniqueState.length !== 0) {
        const bestRated = uniqueState
          .filter((foodItem: any) =>
            foodItem.title.toLowerCase().includes(searchString)
          )
          .sort((a: any, b: any) => b.rating - a.rating);

        if (bestRated.length > 0) {
          setter(
            JSON.parse(JSON.stringify(bestRated.slice(0, 3))),
            true,
            false,
            <Link href={`./search/${searchString}`} ref={searchLinkRef} />
          );
        } else {
          setter([{ id: 0, title: "no results" }], true, true, undefined);
        }
      } else {
        setter(undefined, false, true, undefined);
      }
    } else {
      setter(undefined, false, true, undefined);
    }
  };

  const searchSubmitHandler = (event: any) => {
    event.preventDefault();
    if (searchLinkRef.current !== null) {
      searchLinkRef.current.click();
    }
  };

  return (
    <section>
      <form
        className={classes["search"]}
        action=""
        onSubmit={searchSubmitHandler}
      >
        <input
          className={classes["search-input"]}
          type="search"
          name="search"
          id="search"
          placeholder="search"
          onChange={inputChangeHandler}
        />
        <button
          className={classes["search-submit"]}
          type="submit"
          disabled={disableSubmit}
        >
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
      {searchLink}
    </section>
  );
};

export default Search;
