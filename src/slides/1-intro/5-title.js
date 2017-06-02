import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  Appear
} from "spectacle";

const bgImage = require("../../images/cover-slide.png");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="title" bgImage={bgImage}>
    <ImageSlide/>
  </Slide>
);

