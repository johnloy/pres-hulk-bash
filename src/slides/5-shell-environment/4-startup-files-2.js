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
                ~/.bash_profile – login shells
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                ~/.bashrc - interactive shells, including login
              </span>
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="startup-files-2">
    <SlideTitleComic>Startup files</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);
