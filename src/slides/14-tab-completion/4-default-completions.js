import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="default-tab-completions"/>
    );
  }
}

export default (
  <Slide key="default-completions">
    <SlideTitleComic>Default shell completions</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
