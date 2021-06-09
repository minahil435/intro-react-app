import React, { Component } from "react";


export class sidebar extends Component {
    state = {
        backgroundColor : "orange",
      }

    changeColor = (color) => {
        this.setState({ 
            backgroundColor: color,
         });
      }

    render (){
        return (<div style= {{background:this.state.backgroundColor}}> 
            <ul>
                <li><button onClick={() => this.setState({  backgroundColor : "green" })}>green</button></li>
                <li><button onClick={() => this.setState({  backgroundColor : "blue" })}>blue</button></li>
                <li><button onClick={() =>  this.setState({  backgroundColor : "red" })}>red</button></li> 
            </ul>
             </div>
         )
    }
}

  export default sidebar;