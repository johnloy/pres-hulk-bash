import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="env-vars-functions"/>
    );
  }
}

export default (
  <Slide key="env-vars-functions">
    <SlideTitleComic>Function environment variables</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
