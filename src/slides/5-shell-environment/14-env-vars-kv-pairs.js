import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="env-vars-kv-pairs"/>
    );
  }
}

export default (
  <Slide key="env-vars-kv-pairs">
    <SlideTitleComic>Inspecting environment variables</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
