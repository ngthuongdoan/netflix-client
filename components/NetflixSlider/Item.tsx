import useSizeElement from "hooks/useSizeElement";
import React, { LegacyRef } from "react";
import { Movie } from "types/Movie";
import Mark from "./Mark/Mark";

type ItemProps = {
  movie: Movie;
  currentSlide: Movie | null;
  elementRef: LegacyRef<HTMLDivElement> | null;
};

const Item: React.VFC<ItemProps> = ({ movie, currentSlide, elementRef }) => {
  const isActive = currentSlide && currentSlide.id === movie.id;

  return (
    <div ref={elementRef} className={`slider-item ${isActive && "slider-item--open"}`}>
      <img src={movie.image} alt="" />
      {isActive && <Mark />}
    </div>
  );
};
export default Item;
