import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="history-commands"/>
    );
  }
}

export default (
  <Slide key="history-commands">
    <SlideTitleComic>Using history</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
