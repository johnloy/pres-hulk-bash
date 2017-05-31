import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="simplest-dsl-ever"/>
    );
  }
}

export default (
  <Slide key="intro-simplest-dsl">
    <SlideTitleComic>Simplest DSL, ever, period.</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
