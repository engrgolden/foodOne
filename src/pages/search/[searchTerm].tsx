//next;
import { useRouter } from "next/router";

//components
import FilteredPage from "@component/components/common/FilteredPage/FilteredPage";

const SearchPage: () => JSX.Element = () => {
  const router = useRouter();
  const id = router.query.searchTerm;
  return (
    <>
      <FilteredPage
        data={{ type: "search", id: id, header: "Search Results" }}
      />
    </>
  );
};

export default SearchPage;
