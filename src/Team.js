import React from 'react';
import logo from './logo.svg';
import 'App.js';
import './App.css';


export default app class team extends React.component{
  constructor(props){
    super(props);
    this .state={
      images:["teamImage.png","teamImage2.png","teamImage3.png"],
      name:["James Malwa","John Walker","Peter Dreamer"],
      tittle:["CEO","COO","Hiring Manager"]  
    }
  
  render(){
    return(
      <fragment>

        <div class="first">
      <img src={this.state.images[0]}></img>
      <ul>
        <li>{this.state.name[0]}</li>
        <li>{this.state.tittle[0]}</li>
      </ul>
      
      <div class="second">
      <img src={this.state.images[1]}></img>
      <ul>
        <li>{this.state.name[1]}</li>
        <li>{this.state.tittle[1]}</li>
      </ul>

      <div class="third">
      <img src={this.state.images[2]}></img>
      <ul>
        <li>{this.state.name[2]}</li>
        <li>{this.state.tittle[2]}</li>
      </ul>


  </fragment>
    );

}

export default team();


