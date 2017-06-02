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
               ps —  list processes
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                pstree - list processes as a tree 
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                top - list processes, refreshed periodically, sorted
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                pgrep - search for PID by name
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                pkill - search and kill processes by name
              </span>
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="process-commands">
    <SlideTitleComic>Process management</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);
