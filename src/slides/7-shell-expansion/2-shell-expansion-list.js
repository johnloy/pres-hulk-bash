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
        <List textSize="20px" textColor="white" style={styles.list} className="smaller-list">
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                {"Brace: {foo,bar,baz}"}
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Tilde: ~
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Parameter: $VAR
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Command: $(commands)
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Arithmetic: ((n+n))
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                {"Process: <(commands)"}
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Word splitting: token token
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <span style={styles.listItemText}>
                Filename: /*.*
              </span>
            </ListItem>
          </Appear>
        </List>
      </div>
    );
  }
}

export default (
  <Slide key="shell-expansions-list">
    <SlideTitleComic>Shell expansions</SlideTitleComic>
    <BulletsSlide/>
  </Slide>
);
