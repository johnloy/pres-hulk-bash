import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="commands"/>
    );
  }
}

export default (
  <Slide key="commands">
    <SlideTitleComic>Commands</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
