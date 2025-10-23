//redux
import { useAppDispatch } from "@component/components/hooks/SelectorDispatchTyped";
import { ItemModalActions } from "@component/components/store/itemModalSlice";

//style
import classes from "./SearchSuggestions.module.scss";

const SearchSuggestions = (props: any) => {
  const dispatch = useAppDispatch();

  const viewItemHandler = (event: any) => {
    dispatch(ItemModalActions.loader({ id: event.target.dataset.id }));
  };

  return (
    <ul className={classes["search-suggestion__wrapper"]}>
      {props.suggestions.map((suggestion: any) => (
        <li
          key={suggestion.id}
          data-id={suggestion.id}
          className={classes["search-suggestion"]}
          onClick={viewItemHandler}
        >
          {suggestion.title}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
