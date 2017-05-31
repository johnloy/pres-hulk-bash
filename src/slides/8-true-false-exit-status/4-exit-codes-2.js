import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="exit-codes"/>
    );
  }
}

export default (
  <Slide key="exit-codes-2">
    <SlideTitleComic>Exit codes</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
