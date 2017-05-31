import * as React from "react";
import Slide from "../../components/slide";
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
  <Slide key="intro-wut-hulk" bgImage={bgImage}>
    <SlideTitleComic>Wut?</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);


