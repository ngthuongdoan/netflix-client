import MovieCard from "components/MovieCard/MovieCard";
import Title from "components/Title/Title";
import Slider from "components/NetflixSlider/Slider";
import SliderItem from "components/NetflixSlider/Item";
import { useState } from "react";
import useSizeElement from "hooks/useSizeElement";
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
  {
    id: 7,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "1983",
  },
  {
    id: 8,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Russian doll",
  },
  {
    id: 9,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "The rain",
  },
  {
    id: 10,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Sex education",
  },
  {
    id: 11,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Elite",
  },
  {
    id: 12,
    image:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    imageBg:
      "https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76",
    title: "Black mirror",
  },
];

const SliderSection: React.VFC<SliderSectionProps> = ({ slides, className = "", title }) => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const { width, elementRef } = useSizeElement();

  return (
    <div className={className}>
      <Title className="px-10">{title}</Title>
      <Slider currentSlide={currentSlide} width={width}>
        {movies.map((movie) => (
          <SliderItem elementRef={elementRef} currentSlide={currentSlide} movie={movie} key={movie.id} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
