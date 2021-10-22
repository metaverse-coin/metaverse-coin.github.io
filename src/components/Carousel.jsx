import React from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import useWindowDimensions from "../hooks/useWindowDimensions";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import wvideo1 from "../assets/display/1.mp4";
import wvideo2 from "../assets/display/2.mp4";
import wvideo3 from "../assets/display/3.mp4";
import wvideo4 from "../assets/display/4.mp4";

import mvideo1 from "../assets/mobile/1.mp4";
import mvideo2 from "../assets/mobile/2.mp4";
import mvideo3 from "../assets/mobile/3.mp4";
import mvideo4 from "../assets/mobile/4.mp4";

const wvideos = [wvideo1, wvideo2, wvideo3, wvideo4];
const mvideos = [mvideo1, mvideo2, mvideo3, mvideo4];

function Video(props) {
  const { width, height } = useWindowDimensions();

  return <ReactPlayer url={props.url} height={height} width={width} controls />;
}

export default function HeaderCarousel() {
  const { widescreen } = useWindowDimensions();

  const videos = widescreen ? wvideos : mvideos;

  return (
    <div>
      <Carousel
        autoPlay={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        useKeyboardArrows
        transitionTime={0}
        dynamicHeight
      >
        {videos.map((v, i) => (
          <Video key={i} url={v} />
        ))}
      </Carousel>
    </div>
  );
}
