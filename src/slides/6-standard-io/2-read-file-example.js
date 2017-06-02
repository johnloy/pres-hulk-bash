import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  CodePane
} from "spectacle";

import code from "../../code/read-from-file.sh";

@Radium
class CodeSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in">
        <CodePane lang="bash" source={code} className="big-code" />
      </div>
    );
  }
}

export default (
  <Slide key="read-file-example">
    <SlideTitleComic>Standard I/O: read from a file</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);
