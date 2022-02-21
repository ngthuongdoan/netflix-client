import HomePageContainer from "containers/HomePageContainer/HomePageContainer";
import UserLayout from "layouts/UserLayout/UserLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <UserLayout>
      <HomePageContainer />
    </UserLayout>
  );
};
export default Home;
