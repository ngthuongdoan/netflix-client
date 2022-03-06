import HomeIntro from "./HomeIntro/HomeIntro";
import SliderSection from "components/SliderSection/SliderSection";

type HomePageContainerProps = {};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  return (
    <div>
      <div>
        <HomeIntro />
        <SliderSection className="-mt-12" slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 2, 2, 2, 2, 2]} title="My List"></SliderSection>
      </div>
    </div>
  );
};

export default HomePageContainer;
