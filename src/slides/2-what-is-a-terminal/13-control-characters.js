import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="control-characters"/>
    );
  }
}

export default (
  <Slide key="control-characters">
    <SlideTitleComic>Control characters</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
