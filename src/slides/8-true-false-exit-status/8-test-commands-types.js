import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="test-commands-types"/>
    );
  }
}

export default (
  <Slide key="test-commands-types">
    <SlideTitleComic>The test command</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
