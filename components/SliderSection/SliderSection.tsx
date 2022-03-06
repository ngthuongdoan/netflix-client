import MovieCard from "components/MovieCard/MovieCard";
import Title from "components/Title/Title";
import Slider, { Settings as SlickSetting } from "react-slick";

type SliderSectionProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slides: Array<any>;
  title: string;
  className?: string;
};

const settings: SlickSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  className: "custom-slider",
  arrows: true,
};

const SliderSection: React.VFC<SliderSectionProps> = ({ slides, className = "", title }) => {
  return (
    <div className={`px-10 ${className}`}>
      <div>
        <Title>{title}</Title>
        <Slider {...settings}>{slides && slides.length > 0 && slides.map((slide, index) => <MovieCard key={index} />)}</Slider>
      </div>
    </div>
  );
};

export default SliderSection;
