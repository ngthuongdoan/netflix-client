import React, { useState } from "react";
import useSliding from "../../hooks/useSliding";
import useSizeElement from "hooks/useSizeElement";
import { Movie } from "types/Movie";
import Button from "components/Button";

type SliderProps = {
  activeSlide?: Movie;
  currentSlide: Movie | null;
  width: number;
};

const Slider: React.FC<SliderProps> = ({ children, currentSlide, width }) => {
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } = useSliding(width, React.Children.count(children));

  //   const handleSelect = (movie: Movie) => {
  //     setCurrentSlide(movie);
  //   };

  //   const handleClose = () => {
  //     setCurrentSlide(null);
  //   };

  return (
    <div className="slider-wrapper">
      <div className={`slider ${currentSlide !== null ? "slider--open" : ""}`}>
        <div ref={containerRef} className="slider__container" {...slideProps}>
          {children}
        </div>
      </div>
      {hasPrev && <Button.Slide onClick={handlePrev} type="prev" />}
      {hasNext && <Button.Slide onClick={handleNext} type="next" />}
    </div>
  );
};

export default Slider;
