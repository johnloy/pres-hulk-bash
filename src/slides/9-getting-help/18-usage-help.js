import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="usage-help"/>
    );
  }
}

export default (
  <Slide key="usage-help">
    <SlideTitleComic>Usage help</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
