// Import React
import React from "react";
const PropTypes = React.PropTypes;

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.playerContainer = document.getElementById(this.props.id);
    this.player = this.playerContainer.firstElementChild;
  }
  componentDidMount() {
    const player = this.player;
    const playerContainer = this.playerContainer;
    playerContainer.classList.add('active');
    player.play();
  }

  componentWillUnmount() {
    const player = this.player;
    const playerContainer = this.playerContainer;
    player.pause();
    player.currentTime = 0;
    playerContainer.classList.remove('active');
  }

  render() {
    return <div/>;
  }

}

Terminal.propTypes = {
  id: PropTypes.string
};

export default Terminal;
