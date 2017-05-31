import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="history-env-vars"/>
    );
  }
}

export default (
  <Slide key="history-env-vars">
    <SlideTitleComic>Configuring the shell history</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
