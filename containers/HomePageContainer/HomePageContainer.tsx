import Button from "components/Button/Button";
import Faq from "components/Faq/Faq";
import { Icons } from "components/Icons";
import Section from "components/Section/Section";
import { FAQ_LIST } from "constants/faqs";
import GetStartedForm from "./GetStartedForm";

type HomePageContainerProps = {};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  return (
    <>
      <div className="relative">
        <header className="absolute w-full pt-7 px-14 flex justify-between">
          <Icons.Netflix size={134} />
          <div className="flex gap-9">
            <Button>Sign In</Button>
          </div>
        </header>

        <Section
          backdrop={
            <>
              <div className="absolute z-[-1] inset-0 bg-gradient-to-b from-[#0f0f0f] to-black  opacity-80"></div>
              <div className="absolute z-[-2] inset-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                  srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/d8140ec9-331f-4537-9743-62684296d353/VN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                  alt=""
                />
              </div>
            </>
          }
          wrapperClasses="text-center relative"
          backdropClasses="min-h-[600px] py-24"
        >
          <div className="py-[200px]">
            <h1 className="w-[600px] inline-block font-bold text-6xl m-0 break-words">Unlimited movies, TV shows, and more.</h1>
            <h2 className="text-[26px] my-4 mx-auto">Watch anywhere. Cancel anytime.</h2>
            <GetStartedForm />
          </div>
        </Section>

        <Section contentClasses="flex items-center justify-center py-[45px] px-[100px]">
          <div className="flex-grow flex flex-col gap-5 pr-12 mb-20 text-white">
            <h1 className="text-5xl font-bold">Have an Android Phone? Get our new free plan!</h1>
            <h2 className="text-2xl">Watch a selection of new movies and TV shows without adding any payment details!</h2>
            <div>
              <Button className="h-full text-2xl bg-transparent" icon={<Icons.Arrow size={9} />}>
                Get the app
              </Button>
            </div>
          </div>
          <div className="w-full h-full ">
            <img className="mx-auto w-[500px] object-contain" src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg" alt="" />
          </div>
        </Section>

        <Section wrapperClasses="py-[70px] px-[45px]" contentClasses="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <ul className="w-full mx-auto flex flex-col gap-2 my-14">
            {FAQ_LIST.map(({ title, answer }, index) => (
              <li key={index}>
                <Faq title={title} content={answer}></Faq>
              </li>
            ))}
          </ul>
          <GetStartedForm />
        </Section>
      </div>
    </>
  );
};

export default HomePageContainer;
