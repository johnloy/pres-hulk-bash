import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="2-foo"/>
    );
  }
}

export default (
  <Slide key="extended-test-example">
    <SlideTitleComic>Extended test</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
