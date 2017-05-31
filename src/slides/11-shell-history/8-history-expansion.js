import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="history-expansion"/>
    );
  }
}

export default (
  <Slide key="history-expansion">
    <SlideTitleComic>History expansions</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
