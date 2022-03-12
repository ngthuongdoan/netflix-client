import React from "react";
import { Movie } from "types/Movie";

const SliderContext = React.createContext<{
  onSelectSlide(movie: Movie): void;
  onCloseSlide(): void;
  currentSlide: Movie | null;
  elementRef: React.MutableRefObject<null> | null;
}>({
  onSelectSlide(movie: Movie) {},
  onCloseSlide() {},
  currentSlide: null,
  elementRef: null,
});

export default SliderContext;
