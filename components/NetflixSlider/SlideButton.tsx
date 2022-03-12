import { Icons } from "components/Icons";
import React from "react";

type SlideButtonProps = {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  type: string;
};

const SlideButton: React.VFC<SlideButtonProps> = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <Icons.Arrow />
    </span>
  </button>
);

export default SlideButton;
