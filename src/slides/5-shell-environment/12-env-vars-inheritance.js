import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="env-vars-inheritance"/>
    );
  }
}

export default (
  <Slide key="env-vars-inheritance">
    <SlideTitleComic>Environment variable inheritance</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
