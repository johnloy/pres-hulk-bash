import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="man-ncurses"/>
    );
  }
}

export default (
  <Slide key="ncurses">
    <SlideTitleComic>ncurses</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
