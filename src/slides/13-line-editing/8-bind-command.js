import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="bind-command"/>
    );
  }
}

export default (
  <Slide key="bind-command">
    <SlideTitleComic>The bind command</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
