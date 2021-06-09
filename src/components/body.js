import React, { Component } from "react";
import Box from "./box"
import myImage from './photo2.jpg';


export class body extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (<div style={styles.divStyle}>
      <div>
        <img style={{
          height: "200px",
          width: "200px",
          backgroundPosition: 'center',
          margin : "24px",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }} src={myImage} alt="BigCo Inc. logo" />
      </div>
      <div style = {{marginLeft : "24px"}}>I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.</div>
      <div style={styles.boxStyle}><div><Box name="square 1" image="photo1" /></div>
        <div><Box name="square 2" image="photo2" /></div>
        <div><Box name="square 3" image="photo3" /></div></div>
    </div>
    )
  }
}

const styles = {
  divStyle: {
    backgroundColor: "yellow",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
}

export default body;
