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
  <Slide key="bash-developer" bgImage={bgImage}>
    <SlideTitleComic>Bash "developer" lol</SlideTitleComic>
    <ImageSlide/>
  </Slide>
);
