import React, { Component } from "react";
import "./App.css";

import Body from "./components/body"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"



export class App extends Component {
  render (){
      return ( <div>
        <div><Header /></div>
        <div style = {styles.boxStyle}>
          <div style = {styles.leftBoxStyle}><Sidebar /></div>
          <div style = {styles.rightBoxStyle}><Body /></div>
        </div>
        <div><Footer /></div>
        </div>
      )
  }
}

const styles = {
    boxStyle:{
      display : "flex",
      flexDirection : "row",
      justifyContent : "center",
       alignItems : "center",
       width : "100%" , 
       backgroundColor : "orange",
 
      
       
   },
   leftBoxStyle:{
     width : "20%" ,
       
   },
   rightBoxStyle:{
    width : "80%" ,
  }


}
   




export default App;