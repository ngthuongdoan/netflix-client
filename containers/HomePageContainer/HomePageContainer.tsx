import { VideoState } from "type/Video";
import Button from "components/Button";
import { IconProps, Icons } from "components/Icons";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fadeInVideo } from "utils/fadeInVideo";
import HomeIntro from "./HomeIntro/HomeIntro";

type HomePageContainerProps = {};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  return (
    <div>
      <HomeIntro />
      <section>
        <h1>asdasdas</h1>
      </section>
    </div>
  );
};

export default HomePageContainer;
