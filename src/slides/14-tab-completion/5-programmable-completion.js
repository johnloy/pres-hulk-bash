import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="programmable-completion"/>
    );
  }
}

export default (
  <Slide key="print-compspecs">
    <SlideTitleComic>Programmable completion</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
