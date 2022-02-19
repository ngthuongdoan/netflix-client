import { Icons } from 'components/Icons';
import GetStartedForm from './GetStartedForm';

type HomePageContainerProps = {};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0  pb-24 border-b-8 border-[#222]">
          <div className="absolute z-[-1] inset-0 bg-black opacity-70"></div>
          <div className="absolute z-[-2] inset-0 bottom-10 overflow-hidden">
            <img
              className="object-cover "
              src="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
              alt=""
            />
          </div>
        </div>

        <header className="pt-7 px-14 flex justify-between">
          <Icons.Netflix size={134} />
          <div className="flex gap-9">
            <button className="button-main">Sign In</button>
            <button className="button-main">Sign In</button>
          </div>
        </header>

        <section className="intro text-center relative">
          <div className="intro__wrapper">
            <h1 className="intro__title inline-block font-bold text-6xl m-0 break-words">Unlimited movies, TV shows, and more.</h1>
            <h2 className="intro__subtitle my-4 mx-auto">Watch anywhere. Cancel anytime.</h2>
            <GetStartedForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePageContainer;
