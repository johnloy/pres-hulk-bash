import React from "react";
import Slide from "../components/slide";
import {
  Fit
} from "spectacle";

const styles = {
  content: {
    background: "rgba(43, 5, 49, .90)",
    position: "absolute",
    top: "40px",
    right: "40px",
    bottom: "40px",
    left: "40px",
    padding: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    listStylePosition: "inherit",
    paddingLeft: "40px",
    margin: 0,
    color: "rgb(122, 100, 125)"
  },
  listItemText: {
    color: "rgb(60, 156, 44)"
  }
};
class SectionSlide extends React.Component {
  render() {
    return (
      <div style={styles.content} className="zoom-in">
        <h1 className="section-title">
          This is a title
        </h1>
      </div>
    );
  }
}

export default (
  <Slide key="bar">
    <SectionSlide/>
  </Slide>
);
