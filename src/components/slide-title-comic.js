import React from "react";
class SlideTitleComic extends React.Component {
  render() {
    return (
      <div className="comic-book">
        {this.props.children}
      </div>
    );
  }
}

export default SlideTitleComic;
