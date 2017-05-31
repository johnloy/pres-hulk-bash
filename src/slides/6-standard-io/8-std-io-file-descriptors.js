import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="std-io-file-descriptors"/>
    );
  }
}

export default (
  <Slide key="std-io-file-descriptors">
    <SlideTitleComic>TTY as standard in, out, and error</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
