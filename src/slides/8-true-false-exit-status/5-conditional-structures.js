import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="conditional-constructs"/>
    );
  }
}

export default (
  <Slide key="conditional-structures">
    <SlideTitleComic>Conditional structures</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
