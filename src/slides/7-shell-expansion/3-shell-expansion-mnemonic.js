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
              {"(Best)race: {}"}
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              (To)ilde: ~
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              (Prepare)arameter: $VAR
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              (Cake)ommand: $(commands)
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              (At)rithmetic: ((n+n))
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              {"(Parties)rocess: <(commands)"}
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              (With)ord splitting: token token
            </span>
          </ListItem>
          <ListItem>
            <span style={styles.listItemText}>
              (Frosting)ilename: /*.*
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
