import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="control-characters-list"/>
    );
  }
}

export default (
  <Slide key="control-characters-list">
    <SlideTitleComic>Control characters</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
