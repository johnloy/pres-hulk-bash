import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="intro-wut-solved"/>
    );
  }
}

export default (
  <Slide key="intro-wut-solved">
    <SlideTitleComic>Git status for all repos in a directory</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
