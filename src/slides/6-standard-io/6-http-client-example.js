import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  CodePane
} from "spectacle";

import code from "../../code/http-client.sh";

@Radium
class CodeSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in">
        <CodePane lang="bash" source={code} className="medium-code" />
      </div>
    );
  }
}

export default (
  <Slide key="http-client-example">
    <SlideTitleComic>HTTP client. Woah!</SlideTitleComic>
    <CodeSlide/>
  </Slide>
);
