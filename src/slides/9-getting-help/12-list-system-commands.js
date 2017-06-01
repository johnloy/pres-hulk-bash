import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="man-sections"/>
    );
  }
}

export default (
  <Slide key="list-system-commands">
    <SlideTitleComic>Man page "sections"</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
