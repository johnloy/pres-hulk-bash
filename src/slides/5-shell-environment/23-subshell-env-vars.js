import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="subshell-env-vars"/>
    );
  }
}

export default (
  <Slide key="subshell-env-vars">
    <SlideTitleComic>In a subshell?</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
