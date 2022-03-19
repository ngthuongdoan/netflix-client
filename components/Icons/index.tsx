import React from "react";
import Arrow from "./Arrow";
import Bell from "./Bell";
import Facebook from "./Facebook";
import Info from "./Info";
import Instagram from "./Instagram";
import Magnify from "./Magnify";
import Muted from "./Muted";
import Netflix from "./Netflix";
import Play from "./Play";
import Plus from "./Plus";
import Reload from "./Reload";
import Twitter from "./Twitter";
import Unmute from "./Unmute";
import SlideArrow from "./SlideArrow";
import Youtube from "./Youtube";

export type IconProps = {
  size?: number;
  color?: string;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  className?: string;
};

export const Icons = {
  Arrow,
  Bell,
  Facebook,
  Info,
  Instagram,
  Magnify,
  SlideArrow,
  Muted,
  Netflix,
  Play,
  Plus,
  Reload,
  Twitter,
  Unmute,
  Youtube,
};
