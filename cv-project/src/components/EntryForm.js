import React, { Component } from "react";

export default class EntryForm extends Component {
  // checks section title in data, returns appropriate form
  // form submision updates data state in App
  //  - all end values must be strings (ie. not dates)
  constructor(props) {
    super(props);
    const entry =
      props.data[props.section] || props.data.sections[props.section];
    this.state = { ...JSON.parse(JSON.stringify(entry)) };
  }

  // Add
  // Remove
  // Edit

  // key info
  // profile
  // employment
  // education
  // projects?

  render() {
    return (
      <form>
        <h1>hello</h1>
      </form>
    );
  }
}
