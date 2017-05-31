import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="command-lists"/>
    );
  }
}

export default (
  <Slide key="command-list-examples">
    <SlideTitleComic>Command lists and pipelines</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
