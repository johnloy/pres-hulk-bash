import React from "react";
import { Slide as SpectacleSlide } from "spectacle";
// import ImageLayout from "../layout.image";
const bgImage = require("../images/hulk-comic-2.jpg");

export default class Slide extends SpectacleSlide { }

Slide.defaultProps = {
  ...Slide.defaultProps,
  align: "top",
  bgImage,
  maxWidth: "auto",
  maxHeight: "auto",
  transition: []
};
