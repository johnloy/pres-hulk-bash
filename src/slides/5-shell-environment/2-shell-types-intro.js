import * as React from "react";
import Slide from "../../components/slide";
import Terminal from "../../components/terminal";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <Terminal id="shell-types"/>
    );
  }
}

export default (
  <Slide key="shell-types-intro">
    <SlideTitleComic>Login, non-login, interactive, non-interactive</SlideTitleComic>
    <TerminalSlide/>
  </Slide>
);
