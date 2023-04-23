//import Home from "@component/components/Home/Home";

//next;
import { useRouter } from "next/router";

//components
import FilteredPage from "@component/components/common/FilteredPage/FilteredPage";

const Category: () => JSX.Element = () => {
  const router = useRouter();
  const id = router.query.category;
  return (
    <>
      <FilteredPage data={{ type: "category", id: id }} />
    </>
  );
};

export default Category;
