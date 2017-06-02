import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  CodePane
} from "spectacle";

import code from "../../code/env-vars.sh";

@Radium
class CodeSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in">
        <CodePane lang="bash" source={code} className="big-code"/>
      </div>
    );
  }
}

export default (
  <Slide key="env-vars-intro">
    <SlideTitleComic>Environment variables</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);
