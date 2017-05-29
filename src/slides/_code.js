import React from "react";
import Radium from "radium";
import Slide from "../components/slide";
import SlideTitleComic from "../components/slide-title-comic";
import {
  CodePane
} from "spectacle";
import code from "../code/echo.sh";

const styles = {
  content: {
    background: "rgba(43, 5, 49, .90)",
    position: "absolute",
    top: "80px",
    right: "40px",
    bottom: "40px",
    left: "40px",
    padding: "40px"
  }
};


@Radium
class CodeSlide extends React.Component {
  render() {
    return (
      <div style={styles.content} className="zoom-in">
        <CodePane lang="bash" source={code} className="big-code"/>
      </div>
    );
  }
}

export default (
  <Slide key="baz">
    <SlideTitleComic>Code slide...</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);
