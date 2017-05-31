import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="simple-test"/>
    );
  }
}

export default (
  <Slide key="simple-test">
    <SlideTitleComic>Simple test</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
