import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="info-command"/>
    );
  }
}

export default (
  <Slide key="info-command">
    <SlideTitleComic>The info command</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
