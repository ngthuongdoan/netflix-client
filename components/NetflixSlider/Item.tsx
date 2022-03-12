import React from "react";
import SliderContext from "./context";
import Mark from "./Mark";
import { Movie } from "types/Movie";
type ItemProps = {
  movie: Movie;
};
const Item: React.VFC<ItemProps> = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div ref={elementRef} className={`item ${isActive && "item--open"}`}>
          <img src={movie.image} alt="" />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
