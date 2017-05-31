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
            <span style={styles.listItemText}>Javascript</span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>C#</span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>Python</span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>Ruby</span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>Java</span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>Go</span>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="real-languages">
    <SlideTitleComic>"Real" languages</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);

