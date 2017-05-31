import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="ps"/>
    );
  }
}

export default (
  <Slide key="ps-t">
    <SlideTitleComic>The ps command</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
