import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="complex-prompt"/>
    );
  }
}

export default (
  <Slide key="complex-ps1">
    <SlideTitleComic>Complex $PS1 with $PROMPT_COMMAND</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
