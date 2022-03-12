import React, { useState } from "react";
import SliderContext from "./context";
import Content from "./Content";
import SliderWrapper from "./SliderWrapper";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import { Movie } from "types/Movie";
import SlideButton from "./SlideButton";

type SliderProps = {
  activeSlide?: Movie;
};

const Slider: React.FC<SliderProps> = ({ children, activeSlide = null }) => {
  const [currentSlide, setCurrentSlide] = useState<Movie | null>(activeSlide);
  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } = useSliding(width, React.Children.count(children));

  const handleSelect = (movie: Movie) => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={`slider ${currentSlide !== null && "slider--open"}`}>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
