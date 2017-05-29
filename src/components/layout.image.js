import React from "react";
import Slide from "../components/slide";

class _ImageLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="comic-book">
          The Bourne shell...
        </div>,
        { this.props.children }
      </div>
    );
  }
}

export default ImageLayout() {

}

// TerminalLayout.defaultProps = {
//   ...Slide.defaultProps,
//   align: "top",
//   bgImage,
//   maxWidth: "auto",
//   transition: []
// };
