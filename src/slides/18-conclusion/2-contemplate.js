import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  Appear
} from "spectacle";

const bgImage = require("../../images/hulk-meditating.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="image" bgImage={bgImage}>
    <Appear>
      <div>
        <SlideTitleComic>Contemplate. And thank you.</SlideTitleComic>
      </div>
    </Appear>
    <ImageSlide/>
  </Slide>
);

