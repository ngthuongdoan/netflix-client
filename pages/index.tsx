import IndexPageContainer from "containers/IndexPageContainer/IndexPageContainer";
import AuthLayout from "layouts/AuthLayout/AuthLayout";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <AuthLayout>
      <IndexPageContainer />
    </AuthLayout>
  );
};
export default Index;
