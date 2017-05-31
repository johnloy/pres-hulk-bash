import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="history-options"/>
    );
  }
}

export default (
  <Slide key="history-options">
    <SlideTitleComic>Configuring the shell history</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
