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
  <Slide key="splitting-subcommands">
    <SlideTitleComic>Splitting subcommands</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
