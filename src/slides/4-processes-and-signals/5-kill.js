import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="kill"/>
    );
  }
}

export default (
  <Slide key="kill">
    <SlideTitleComic>The kill command</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
