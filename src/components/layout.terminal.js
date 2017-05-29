import React from "react";
import Terminal from "../components/terminal";

export default class TerminalLayout extends React.Component {
  render() {
    const { recording } = this.props;
    return (
      <div>
        <div className="comic-book">
          The Bourne shell...
        </div>,
        <Terminal id={recording}/>
        { this.props.children }
      </div>
    );
  }
}

// TerminalLayout.defaultProps = {
//   ...Slide.defaultProps,
//   align: "top",
//   bgImage,
//   maxWidth: "auto",
//   transition: []
// };
