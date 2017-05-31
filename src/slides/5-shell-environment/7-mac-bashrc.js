import * as React from "react";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";

class TerminalSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in">
      </div>
    );
  }
}

export default (
  <Slide key="mac-bashrc">
    <SlideTitleComic>Dammit Apple!</SlideTitleComic>
  </Slide>
);
