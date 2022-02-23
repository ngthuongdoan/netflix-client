import Button from "components/Button";
import Faq from "components/Faq/Faq";
import Footer from "components/Footer/Footer";
import { Icons } from "components/Icons";
import Section from "components/Section/Section";
import { FAQ_LIST } from "constants/faqs";
import GetStartedForm from "./GetStartedForm";

type HomePageContainerProps = {};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  return (
    <>
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
        wrapperClasses="text-center relative md:px-[70px]"
        backdropClasses="min-h-[600px] py-24"
      >
        <div className="py-[200px]">
          <h1 className="max-w-[640px] w-full inline-block font-bold m-0 break-words lg:text-6xl md:text-5xl sm:text-base">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-lg lg:text-[26px] my-4 mx-auto">Watch anywhere. Cancel anytime.</h2>
          <GetStartedForm />
        </div>
      </Section>

      <Section contentClasses="flex items-center justify-center py-[45px] px-[100px] lg:flex-row lg:text-left xs:flex-col xs:text-center xs:p-3">
        <div className="flex-grow flex flex-col gap-5 mb-20 text-white lg:pr-12 sm:pr-0">
          <h1 className="text-5xl font-bold">Have an Android Phone? Get our new free plan!</h1>
          <h2 className="text-2xl">Watch a selection of new movies and TV shows without adding any payment details!</h2>
          <div className="sm:mx-auto lg:m-0">
            <Button className="h-full text-2xl bg-transparent" icon={<Icons.Arrow size={9} />} iconPosition="end">
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
    </>
  );
};

export default HomePageContainer;
