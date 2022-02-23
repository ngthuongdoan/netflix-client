import Button from "components/Button";
import { Icons } from "components/Icons";
import { useEffect, useState } from "react";
import { VideoState } from "type/Video";
import { fadeInVideo } from "utils/fadeInVideo";

type HomeIntroProps = {};

const HomeIntro: React.VFC<HomeIntroProps> = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const [videoState, setVideoState] = useState(VideoState.NONE);

  function mute(event: React.MouseEvent<HTMLButtonElement>) {
    const videoRef = document.getElementById("background-video") as HTMLVideoElement;
    if (videoRef) {
      videoRef.muted = true;
      setVideoState(VideoState.MUTED);
    }
  }

  function unMute(event: React.MouseEvent<HTMLButtonElement>) {
    const videoRef = document.getElementById("background-video") as HTMLVideoElement;
    if (videoRef) {
      videoRef.muted = false;
      setVideoState(VideoState.UNMUTE);
    }
  }

  function reload(event: React.MouseEvent<HTMLButtonElement>) {
    const videoRef = document.getElementById("background-video") as HTMLVideoElement;

    if (videoRef) {
      videoRef.muted = true;
      videoRef.currentTime = 0;
      videoRef.load();
      setIsPlay(true);
      setVideoState(VideoState.MUTED);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setVideoState(VideoState.MUTED);
      setIsPlay(true);
    }, 1500);
  }, []);

  return (
    <section className="relative min-h-screen">
      <section className="h-full absolute inset-0 z-[-3] overflow-hidden">
        <div className=" z-[-2]">
          <div className="absolute inset-0 z-0 " style={{ background: "linear-gradient(77deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 85%)" }}></div>
          <video
            id="background-video"
            autoPlay
            muted
            controls={false}
            onPause={() => {
              setIsPlay(false);
              setVideoState(VideoState.ENDED);
            }}
            onCanPlayThrough={(event) => {
              fadeInVideo(event.target as HTMLVideoElement, 100);
            }}
            className={`object-cover w-full ani ${!isPlay && "hidden"}`}
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/netfl-2a471.appspot.com/o/X2Convert.com%20fate_stay_night_unlimited_blade_works_english_dub_trailer_-1601310300822870143.mp4?alt=media&token=3093fad3-698e-4aa1-9f66-4baf04ffa06f&#t=30,35"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
          <img
            className={`object-cover w-full ${isPlay && "hidden"}`}
            src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76"
            alt=""
          />
        </div>
      </section>

      <div className="absolute w-[36%] top-[25%] left-[4%] bottom-[35%] z-10">
        <div className="min-h-[13.2vw] mb-[1.2vw]">
          <img
            src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTm8WNLc9uFCRwhy7SIsB34I9Q-W-SSzYycf2vdGhRxxacsdsex29zqZE_0oImAMFKxJBptPVPaplVejTgWkD0yb6TbQeGpOZPnc.webp?r=d25"
            alt="fate-stay-night"
          />
        </div>
        <p className="mb-6 text-white text-[1.4vw]">
          Được chọn tham gia một cuộc đấu bí mật nhằm đoạt lấy Chén Thánh, hai học sinh trung học Rin và Shirou quyết định liên thủ.
        </p>
        <div className="flex gap-3">
          <Button className="button-white" icon={<Icons.Play />} iconPosition="start">
            Phát
          </Button>
          <Button className="button-transparent" icon={<Icons.Info />} iconPosition="start">
            Thông tin khác
          </Button>
        </div>
      </div>

      <div className="absolute right-0  top-[70%] bottom-[55%] flex items-center gap-4">
        {videoState === VideoState.UNMUTE && (
          <Button className="button-icon w-7 h-7" onClick={mute}>
            <Icons.Unmute className="w-full h-full" />
          </Button>
        )}
        {videoState === VideoState.MUTED && (
          <Button className="button-icon w-7 h-7" onClick={unMute}>
            <Icons.Muted className="w-full h-full" />
          </Button>
        )}
        {videoState === VideoState.ENDED && (
          <Button className="button-icon w-7 h-7" onClick={reload}>
            <Icons.Reload className="w-full h-full" />
          </Button>
        )}

        <div className="border-l-4 border-l-[#dcdcdc]">
          <p className="text-white font-light text-sm bg-[rgba(51,51,51,.6)] pl-3 pr-14 py-2">16+</p>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
