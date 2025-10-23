import Home from "@component/components/Home/Home";
import { getFoodItems } from "@component/components/store/foodItemsSlice";
import { wrapper } from "@component/components/store";
import { NextPage } from "next/types";

const Homepage: NextPage = () => {
  return (
    <>
      <Home />
    </>
  );
};

Homepage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getFoodItems());
    }
);

export default Homepage;
