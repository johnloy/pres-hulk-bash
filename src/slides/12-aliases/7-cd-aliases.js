import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="navigation-aliases"/>
    );
  }
}

export default (
  <Slide key="cd-aliases">
    <SlideTitleComic>Aliases for navigation</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
