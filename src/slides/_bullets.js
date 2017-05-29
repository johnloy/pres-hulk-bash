import React from "react";
import Radium from "radium"
import Slide from "../components/slide";
import SlideTitleComic from "../components/slide-title-comic";
import {
  List,
  ListItem,
  Appear
} from "spectacle";

const styles = {
  content: {
    background: "rgba(43, 5, 49, .90)",
    position: "absolute",
    top: "80px",
    right: "40px",
    bottom: "40px",
    left: "40px",
    padding: "60px"
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

@Radium
class BulletsSlide extends React.Component {
  render() {
    return (
      <div style={styles.content} className="zoom-in">
        <List textSize="24px" textColor="white" style={styles.list}>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Use source control (git, svn, mercurial)
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Run servers (http, database))
              </span>
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="bar">
    <SlideTitleComic>The Bourne Shell...</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);
