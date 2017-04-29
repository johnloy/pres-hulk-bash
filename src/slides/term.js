// Import React
import React from "react";
import ReactDOM from "react-dom";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  Slide,
  Fill
} from "spectacle";

class TerminalComponent extends React.Component {
  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    const script = document.createElement("script");
    script.src = "https://asciinema.org/a/a0wqk5qzsz1bjbxdrrcs29tj5.js";
    script.id = "asciicast-a0wqk5qzsz1bjbxdrrcs29tj5";
    script.dataset.autoplay = 1;
    script.dataset.speed = 5;
    script.dataset.size = "big";
    this.el.appendChild(script);
  }

  render() {
    return (<span/>);
  }

}

const TermSlide = (
  <Slide transition={["zoom"]} key="terminal">
    <Fill>
        <TerminalComponent />
    </Fill>
  </Slide>
);

export default TermSlide;
