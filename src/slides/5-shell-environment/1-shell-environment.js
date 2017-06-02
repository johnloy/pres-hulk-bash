import * as React from "react";
import Slide from "../../components/slide";

class SectionSlide extends React.Component {
  render() {
    return (
      <div className="content content-section-title zoom-in">
        <h1 className="section-title">
          The shell and subshell environments
        </h1>
      </div>
    );
  }
}

export default (
  <Slide key="processes-and-signals">
    <SectionSlide/>
  </Slide>
);


