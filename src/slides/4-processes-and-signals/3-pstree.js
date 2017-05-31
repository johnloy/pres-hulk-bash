import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="pstree"/>
    );
  }
}

export default (
  <Slide key="pstree">
    <SlideTitleComic>The pstree command</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
