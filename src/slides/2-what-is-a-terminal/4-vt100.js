import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  Appear
} from "spectacle";

const bgImage = require("../../images/hulk-feriggno-bixby.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="vt100" bgImage={bgImage}>
    <SlideTitleComic>Grandpappy</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);
