import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  CodePane
} from "spectacle";

import code from "../../code/metacharacters.sh";

@Radium
class CodeSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in">
        <CodePane lang="bash" source={code} style={{ fontSize: "40px" }}/>
      </div>
    );
  }
}

export default (
  <Slide key="metacharacters">
    <SlideTitleComic>Metacharacters</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);