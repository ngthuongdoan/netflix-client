import MovieCard from "components/MovieCard/MovieCard";
import Title from "components/Title/Title";
import Slider from "components/NetflixSlider/Slider";
import SliderItem from "components/NetflixSlider/Item";
// import Slider, { Settings as SlickSetting } from "react-slick";

type SliderSectionProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slides: Array<any>;
  title: string;
  className?: string;
};
const movies = [
  {
    id: 1,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "1983",
  },
  {
    id: 2,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Russian doll",
  },
  {
    id: 3,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "The rain",
  },
  {
    id: 4,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Sex education",
  },
  {
    id: 5,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Elite",
  },
  {
    id: 6,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Black mirror",
  },
];
// const settings: SlickSetting = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 6,
//   slidesToScroll: 6,
//   initialSlide: 0,
//   className: "custom-slider",
//   arrows: true,
//   adaptiveHeight: true,
// };

const SliderSection: React.VFC<SliderSectionProps> = ({ slides, className = "", title }) => {
  return (
    <div className={`px-10 ${className}`}>
      <div>
        <Title>{title}</Title>
        <Slider>
          {movies.map((movie) => (
            <SliderItem movie={movie} key={movie.id} />
          ))}
        </Slider>
        {/* <Slider {...settings}>{slides && slides.length > 0 && slides.map((slide, index) => <MovieCard key={index} />)}</Slider> */}
      </div>
    </div>
  );
};

export default SliderSection;
