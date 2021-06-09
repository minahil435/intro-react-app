import React, { Component } from "react";


export class header extends Component {
    constructor(props){
        super(props)

    }

    render (){
        return (<div style = {styles.divStyle}>Minahil Shafique</div>
         )
    }
}

const styles = {
    divStyle:{
      backgroundColor: "green",
      textAlign : "center",
      height : "70px"
    }
}


  export default header;