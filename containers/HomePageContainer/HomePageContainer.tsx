import HomeIntro from "./HomeIntro/HomeIntro";
import MovieCard from "components/MovieCard/MovieCard";
import Slider, { Settings as SlickSetting } from "react-slick";

type HomePageContainerProps = {};
const settings: SlickSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  className: "custom-slider",
  arrows: false,
};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  return (
    <div>
      <div>
        <HomeIntro />
        <div className="px-10">
          <Slider {...settings}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
