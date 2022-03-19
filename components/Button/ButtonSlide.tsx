import { Icons } from "components/Icons";
import React from "react";

type ButtonSlideProps = {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  type: "prev" | "next";
};

const ButtonSlide: React.VFC<ButtonSlideProps> = ({ onClick, type }) => (
  <button className={`slider-button slider-button--${type}`} onClick={onClick}>
    <span>
      <Icons.SlideArrow />
    </span>
  </button>
);

export default ButtonSlide;
