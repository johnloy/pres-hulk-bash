import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="git-subcommands"/>
    );
  }
}

export default (
  <Slide key="exit-status">
    <SlideTitleComic>The anatomy of a cli script: exit status</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
