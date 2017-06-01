import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  CodePane
} from "spectacle";

import code from "../../code/simplest-dsl.sh";

@Radium
class CodeSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in" style={{ padding: "30px" }}>
        <CodePane lang="bash" source={code} style={{ fontSize: "30px" }}/>
      </div>
    );
  }
}

export default (
  <Slide key="intro-simplest-dsl-syntax-4">
    <SlideTitleComic>Simplest DSL, ever, period.</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);