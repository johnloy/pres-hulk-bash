import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

const bgImage = require("../../images/hulk-feriggno-bixby.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="intro-three-amigos" bgImage={bgImage}>
    <SlideTitleComic>Who would you rather be?</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);


