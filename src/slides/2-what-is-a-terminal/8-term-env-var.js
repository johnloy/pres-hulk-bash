import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="term-env-var"/>
    );
  }
}

export default (
  <Slide key="term-env-vars">
    <SlideTitleComic>$TERM</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
