import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="std-in-out-err"/>
    );
  }
}

export default (
  <Slide key="std-in-out-err">
    <SlideTitleComic>Standard in, out, and error</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
