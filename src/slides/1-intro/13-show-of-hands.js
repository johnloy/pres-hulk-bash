import * as React from "react";
import Slide from "../../components/slide";

const bgImage = require("../../images/hulk-feriggno-bixby.jpg");

class ImageSlide extends React.Component {
  render() {
    return (
      <span/>
    );
  }
}

export default (
  <Slide key="show-of-hands" bgImage={bgImage}>
    <ImageSlide/>
  </Slide>
);
