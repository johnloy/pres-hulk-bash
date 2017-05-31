import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="standard-io"/>
    );
  }
}

export default (
  <Slide key="standard-io">
    <SlideTitleComic>Standard I/O and redirection</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
