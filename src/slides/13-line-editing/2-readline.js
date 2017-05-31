import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="readline"/>
    );
  }
}

export default (
  <Slide key="readline">
    <SlideTitleComic>Readline</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
