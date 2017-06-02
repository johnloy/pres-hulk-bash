import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  Appear
} from "spectacle";

const bgImage = require("../../images/jason-bourne.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="intro-1977-2" bgImage={bgImage}>
    <SlideTitleComic>1977: The shell is bourne</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);

