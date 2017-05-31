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
          <ListItem>
            <span style={styles.listItemText}>
              Login, interactive
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              Login, non-interactive
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              Non-login, interactive
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              Non-login, non-interactive
            </span>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="startup-files-1">
    <SlideTitleComic>Startup files</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);