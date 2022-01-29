import React, { Component } from "react";
import Education from "./Education";
import Employment from "./Employment";
import BasicInfo from "./BasicInfo";
import Profile from "./Profile";
import Projects from "./Projects";

export default class App extends Component {
  render() {
    return (
      <main className='page'>
        <BasicInfo />
        <Profile />
        <Employment />
        <Education />
        <Projects />
      </main>
    );
  }
}
