import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  Appear
} from "spectacle";

const bgImage = require("../../images/vt100.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="intro-1978" bgImage={bgImage}>
    <SlideTitleComic>1978: DEC VT100</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);

