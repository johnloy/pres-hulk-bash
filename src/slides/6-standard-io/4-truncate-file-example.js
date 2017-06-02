import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  CodePane
} from "spectacle";

import code from "../../code/truncate-file.sh";

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
  <Slide key="truncate-file-example">
    <SlideTitleComic>Standard I/O: truncate a file</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);