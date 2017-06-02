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
                xterm — X-Windows
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Terminal - macOS
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                gnome-terminal - Gnome
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                SSH
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Screen and Tmux
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Asciinema player
              </span>
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="terminal-emulators">
    <SlideTitleComic>Terminal emulators</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);