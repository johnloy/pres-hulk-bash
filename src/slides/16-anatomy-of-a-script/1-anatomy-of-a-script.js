import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="2-foo"/>
    );
  }
}

export default (
  <Slide key="anatomy-of-a-script">
    <SlideTitleComic>The anatomy of a cli script</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
