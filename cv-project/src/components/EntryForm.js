import React, { Component } from "react";

export default class EntryForm extends Component {
  // checks section title in data, returns appropriate form
  // form submision updates data state in App
  //  - all end values must be strings (ie. not dates)
  constructor(props) {
    super(props);
  }

  // Add
  // Remove
  // Edit

  // key info
  // profile
  // employment
  // education
  // projects?

  // 

  render() {
    return (
      <form>
        <h1>Add to Employment</h1>
        <label htmlFor="startDate">Start date:</label>
        <input type='date' name='startDate' id='' />
        <label htmlFor="endDate">End date:</label>
        <input type='date' name='endDate' id='' />
        <label htmlFor="position"></label>
        <input
          type='text'
          name="position"
          value=''
          placeholder='eg. Position | Company | Location'
        />
        <label htmlFor="description">Description:</label>
        <input
          type='textarea'
          name="description"
          value=''
          placeholder='eg. Key responsibilities and achievements in this roll.'
        />
      </form>
    );
  }
}
