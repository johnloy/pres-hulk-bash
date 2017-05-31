import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="what-creates-subshells"/>
    );
  }
}

export default (
  <Slide key="what-creates-subshells">
    <SlideTitleComic>What creates subshells?</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
