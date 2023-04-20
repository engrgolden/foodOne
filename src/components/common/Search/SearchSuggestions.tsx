//style
import classes from "./SearchSuggestions.module.scss";

const SearchSuggestions = (props: any) => {
  return (
    <ul className={classes["search-suggestion__wrapper"]}>
      {props.suggestions.map((suggestion) => (
        <li key={suggestion.id} className={classes["search-suggestion"]}>
          {suggestion.title}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
