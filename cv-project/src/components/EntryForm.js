import React, { Component } from "react";

export default class EntryForm extends Component {
  // checks section title in data, returns appropriate form
  // form submision updates data state in App
  //  - all end values must be strings (ie. not dates)
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data.items.find(
        (item) => item.id === this.props.itemUnderEdit
      ),
    }; // editting, take from props
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
    const { title, data } = this.props;
    const { name } = data;
    console.log({ STATE: this.state });
    return (
      <form onSubmit={(e) => this.props.handleFormSubmit(e, name, this.state)}>
        <h1>{`Add to ${title}`}</h1>
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
        <label htmlFor='descriptor'>Position:</label>
        <input
          type='text'
          name='descriptor'
          onChange={this.handleChange}
          value={this.state["descriptor"] || ""}
          placeholder='eg. Position'
        />
        <label htmlFor='institution'>Company:</label>
        <input
          type='text'
          name='institution'
          onChange={this.handleChange}
          value={this.state["institution"] || ""}
          placeholder='eg. Company'
        />
        <label htmlFor='location'>Location:</label>
        <input
          type='text'
          name='location'
          onChange={this.handleChange}
          value={this.state["location"] || ""}
          placeholder='eg. City'
        />
        <label htmlFor='description'>Description:</label>
        <input
          type='textarea'
          name='description'
          onChange={this.handleChange}
          value={this.state["description"] || ""}
          placeholder='eg. Responsibilities and achievements.'
        />
        <button>hit me</button>
      </form>
    );
  }
}
