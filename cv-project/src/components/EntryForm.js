import React, { Component } from "react";

export default class EntryForm extends Component {
  // checks section title in data, returns appropriate form
  // form submision updates data state in App
  //  - all end values must be strings (ie. not dates)
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <form>
        <h1>hello</h1>
      </form>
    );
  }
}
