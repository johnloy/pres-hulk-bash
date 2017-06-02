import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="reverse-history-search"/>
    );
  }
}

export default (
  <Slide key="ctrl-r">
    <SlideTitleComic>Reverse incremental history search</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
