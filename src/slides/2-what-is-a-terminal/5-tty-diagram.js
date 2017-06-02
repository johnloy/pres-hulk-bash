import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  Appear
} from "spectacle";

const bgImage = require("../../images/tty-diagram.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="tty-diagram" bgImage={bgImage}>
    <SlideTitleComic>TTY</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);
