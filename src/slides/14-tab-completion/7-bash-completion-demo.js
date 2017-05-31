import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="bash-completion-demo"/>
    );
  }
}

export default (
  <Slide key="bash-completion-demo">
    <SlideTitleComic>The bash completion project</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
