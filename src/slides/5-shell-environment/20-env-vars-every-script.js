import * as React from "react";
import Radium from "radium";
import Slide from "../../components/slide";
import SlideTitleComic from "../../components/slide-title-comic";
import {
  List,
  ListItem,
  Appear
} from "spectacle";
import styles from "../../styles";

@Radium
class BulletsSlide extends React.Component {
  render() {
    return (
      <div className="content zoom-in">
        <List textSize="24px" textColor="white" style={styles.list}>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                $0 — The filename of the command being run
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                $# - The number of arguments passed to the command
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                $? - The exit status of the command
              </span>
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="env-vars-every-script">
    <SlideTitleComic>Special variables</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);
