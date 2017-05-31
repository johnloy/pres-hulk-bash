import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="quoting"/>
    );
  }
}

export default (
  <Slide key="quoting">
    <SlideTitleComic>Quoting</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
