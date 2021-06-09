import React, { Component } from "react";
import myImage from './photo1.jpg';


export class box extends Component {
    constructor(props){
        super(props)

    }

    render (){
        return (<div style = {{  
        backgroundImage : `url(${myImage})`,
        backgroundColor: "black",
        height : "100px",
        width :"100px",
        margin : "5px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color : "white"}}>{this.props.name}</div>
         )
    }
}



  export default box;

//   <div style={{ backgroundImage: `url(${this.props.source})` }} />