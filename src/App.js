import React from 'react';
import logo from './logo.svg';
import './App.css';
import Team from "./Team";

export default app class services extends React.component{
  constructor(props){
    super(props);
    this .state={
      icons:["mobile.png","webdesign.png","security.png","scalability.png","databaseAdmin.png","consultancy.png"],
      tittle:["MObile Applications","Responsive Web Design","Security","Scalability & Performance","System & Database Administration","IT Consultancy"],
      description:["We create elegant mobile applications with stunning features that will give you are wider reach and show your clients how far you are willing to go to serve them better.",
      "We design, develop, commission and maintain fast, beautiful and websites that will look great on any screen and keep your visitors coming back.",
      "We carry out through penetration tests and identify potential vulnerabitity in your network infrastructure; hardware, software and dependent resources inclusive. Our team of security experts will plug these weaknesses, and provide continuous guidance on how to minimize creating others as your resources grow.",
      "We pride ourselves in being able to make your application handle millions of user requests as quickly and efficiently as it handles a single user. This is vital in creating a pleasant user experience, and keep them loyal to you.",
      "We will manage your server installation, topology and configuration, minimize your downtimes making your services available at user convenience and keep your clientelle happy.",
      "Need guidance on how to handle problems in the computer technology sphere? Talk to us. We will put all the knowledge and years of experience to use to help you in the right direction."]
      
    }
  }
  render(){
    return(
      <fragment>

        <div class="one">
      <img src={this.state.icons[0]}></img>
      <ul>
        <li>{this.state.tittle[0]}</li>
        <li>{this.state.description[0]}</li>
      </ul>
      
      <div class="two">
      <img src={this.state.icons[1]}></img>
      <ul>
        <li>{this.state.tittle[1]}</li>
        <li>{this.state.description[1]}</li>
      </ul>

      <div class="three">
      <img src={this.state.icons[2]}></img>
      <ul>
        <li>{this.state.tittle[2]}</li>
        <li>{this.state.description[2]}</li>
      </ul>

      <div class="four">
      <img src={this.state.icons[3]}></img>
      <ul>
        <li>{this.state.tittle[3]}</li>
        <li>{this.state.description[3]}</li>
      </ul>

      <div class="five">
      <img src={this.state.icons[4]}></img>
      <ul>
        <li>{this.state.tittle[4]}</li>
        <li>{this.state.description[4]}</li>
      </ul>

      <div class="six">
      <img src={this.state.icons[5]}></img>
      <ul>
        <li>{this.state.tittle[5]}</li>
        <li>{this.state.description[5]}</li>
      </ul>

  </fragment>
    );
  }

}



