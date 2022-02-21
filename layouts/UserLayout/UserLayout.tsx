import Avatar from "components/Avatar/Avatar";
import Footer from "components/Footer/Footer";
import { Icons } from "components/Icons";

type UserLayoutProps = {};

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="fixed w-full top-5 px-5 flex justify-between lg:px-14">
        <div className="flex items-center gap-12">
          <Icons.Netflix size={92} />
          <nav>
            <ul className="inline-flex gap-5 text-sm text-[#E5E5E5]">
              <li>
                <a href="">Trang chủ</a>
              </li>
              <li>
                <a href="">Phim T.hình</a>
              </li>
              <li>
                <a href="">Phim</a>
              </li>
              <li>
                <a href="">Mới & Phổ biến</a>
              </li>
              <li>
                <a href="">Danh sách của tôi</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-6 items-center">
          <Icons.Magnify size={24} />
          <Icons.Bell size={24} />
          <Avatar />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
