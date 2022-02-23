import Button from "components/Button";
import Footer from "components/Footer/Footer";
import { Icons } from "components/Icons";

type AuthLayoutProps = {};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <header className="absolute w-full pt-7 px-4 flex justify-between lg:px-14 z-50">
        <Icons.Netflix size={134} />
        <div className="flex gap-9">
          <Button>Sign In</Button>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
