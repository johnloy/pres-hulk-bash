import React from "react";
import { render } from "react-dom";
import {
  Deck,
  SlideSet
} from "spectacle";

// Import image preloader util
// import preloader from "spectacle/lib/utils/preloader";
// preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

import slides from "./slides";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="none" controls={false}>
        <SlideSet>
          { slides }
        </SlideSet>
      </Deck>
    );
  }
}

render(<Presentation/>, document.getElementById("root"));
