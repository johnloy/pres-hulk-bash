import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="tab-completion"/>
    );
  }
}

export default (
  <Slide key="tab-completion">
    <SlideTitleComic>Tab completion</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
