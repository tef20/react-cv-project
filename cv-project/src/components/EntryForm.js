import React, { Component } from "react";

export default class EntryForm extends Component {
  // checks section title in data, returns appropriate form
  // form submision updates data state in App
  //  - all end values must be strings (ie. not dates)
  constructor(props) {
    super(props);
    this.state = {}; // editting, take from props
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
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { section } = this.props;
    return (
      <form
        onSubmit={(e) =>
          this.props.handleFormSubmit(e, section, this.state)
        }
      >
        <h1>Add to Employment</h1>
        <label htmlFor='startDate'>Start date:</label>
        <input
          type='date'
          name='startDate'
          id=''
          onChange={this.handleChange}
          value={this.state["startDate"] || ""}
        />
        <label htmlFor='endDate'>End date:</label>
        <input
          type='date'
          name='endDate'
          id=''
          onChange={this.handleChange}
          value={this.state["endDate"] || ""}
        />
        <label htmlFor='position'>Position:</label>
        <input
          type='text'
          name='position'
          onChange={this.handleChange}
          value={this.state["position"] || ""}
          placeholder='eg. Position | Company | Location'
        />
        <label htmlFor='description'>Description:</label>
        <input
          type='textarea'
          name='description'
          onChange={this.handleChange}
          value={this.state["description"] || ""}
          placeholder='eg. Key responsibilities and achievements in this roll.'
        />
        <button>hit me</button>
      </form>
    );
  }
}
