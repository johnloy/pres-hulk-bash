import React from "react";
import { Slide as SpectacleSlide } from "spectacle";

const bgImage = require('../images/hulk-comic-green.jpg');

export default class Slide extends SpectacleSlide {
  render() {
    React.Children.toArray(this.props.children);
    this.props.children.push(
      <div className="comic-book">
        The Bourne shell...
      </div>
    );
    return {
      ...SpectacleSlide.prototype.render.call(this),
      children: this.props.children
    };
  }
}

Slide.defaultProps = {
  ...SpectacleSlide.defaultProps,
  align: "top",
  bgImage,
  maxWidth: "auto",
  transition: []
};
