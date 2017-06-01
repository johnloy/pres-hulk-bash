import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import Terminal from "../../components/terminal";

const bgImage = require("../../images/hulk-feriggno-bixby.jpg");

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="terminfo"/>
    );
  }
}

export default (
  <Slide key="terminfo" bgImage={bgImage}>
    <SlideTitleComic>Terminfo</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);

