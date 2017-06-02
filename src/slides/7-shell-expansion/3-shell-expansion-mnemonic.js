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
        <List textSize="24px" textColor="white" style={styles.list} className="smaller-list">
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(Best)</span>{'race: {foo,bar,baz}'}
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(To)</span>ilde: ~
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(Prepare)</span>arameter: $VAR
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(Cake)</span>ommand: $(commands)
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(At)</span>rithmetic: ((n+n))
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(Parties)</span>{"rocess: <(commands)"}
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(With)</span>ord splitting: token token
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              <span style={{ color: "#fff" }}>(Frosting)</span>ilename: /*.*
            </span>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="shell-expansions-mnemonic">
    <SlideTitleComic>Shell expansions</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);
