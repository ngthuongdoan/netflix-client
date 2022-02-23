/* eslint-disable no-param-reassign */
export function fadeInVideo(videoElement: HTMLVideoElement, time: number = 50) {
  videoElement.style.opacity = "0";
  var op = 0;
  var timer = setInterval(function () {
    if (op >= 1) clearInterval(timer);
    videoElement.style.opacity = "" + op;
    videoElement.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1 || 0.1;
  }, time);
}
