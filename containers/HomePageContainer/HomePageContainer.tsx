import Button from "components/Button/Button";
import { useEffect, useRef, useState } from "react";

type HomePageContainerProps = {};

const HomePageContainer: React.VFC<HomePageContainerProps> = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setTimeout(() => {
      setIsPlay(true);
    }, 1500);
  }, [videoRef]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (isPlay && videoRef && videoRef.current) {
  //         videoRef.current.pause();
  //         videoRef.current.currentTime = 0;
  //         setIsPlay(false);
  //       }
  //     }, 20000);
  //   }, [isPlay, videoRef]);

  return (
    <div>
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-[-3] overflow-hidden">
          <div className=" z-[-2]">
            <div className="absolute inset-0 z-0 " style={{ background: "linear-gradient(77deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 85%)" }}></div>
            {isPlay ? (
              <video ref={videoRef} autoPlay muted controls={false} onPause={() => setIsPlay(false)} className="object-cover w-full">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/netfl-2a471.appspot.com/o/X2Convert.com%20fate_stay_night_unlimited_blade_works_english_dub_trailer_-1601310300822870143.mp4?alt=media&token=3093fad3-698e-4aa1-9f66-4baf04ffa06f&#t=30,35"
                  type="video/mp4"
                ></source>
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className="object-cover w-full"
                src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfekVXolASpTLszt3zjkEwEDYRDecAJh56p7TeF_7Cs_wow73a0zCIR45Md8P6nYS67ajI1ny9HfvY24zoOcnpvP3zRB.webp?r=c76"
                alt=""
              />
            )}
          </div>
        </div>

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
            <Button>Phát</Button>
            <Button>Thông tin khác</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContainer;
