// Import React
import React from "react";
import ReactDOM from "react-dom";

const bgImage = require('../images/hulk-comic.jpg');

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
    const player = document.getElementById('foo');
    player.style.position = 'relative';
    player.style.opacity = 1;
    player.style.zIndex = 1000; 
    player.firstElementChild.play();
  }

  render() {
    return (<div/>);
  }

}

const TermSlide = (
  <Slide transition={["zoom"]} key="terminal" bgImage={bgImage}>
    <Fill>
        <TerminalComponent />
    </Fill>
  </Slide>
);

export default TermSlide;
