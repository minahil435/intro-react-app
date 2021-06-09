import React, { Component } from "react";


export class footer extends Component {
    constructor(props){
        super(props)

    }

    render (){
        return (<div style = {styles.divStyle}>CopyRight Minahil Shafique</div>
         )
    }
}

const styles = {
    divStyle:{
   
            backgroundColor: "brown",
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            alignItems : "center",
            height : "70px"
    }
}

  export default footer;