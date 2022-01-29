import React, { Component } from "react";

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    return !Object.keys(state).length && props.existingEntry
      ? { ...props.existingEntry }
      : null;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, id) => {
    this.props.formSubmitHandler(e, id, { ...this.state });
  };

  render() {
    const { itemId, formHeader, itemTemplate } = this.props;
    return (
      <form onSubmit={(e) => this.handleSubmit(e, itemId)}>
        <h1>{formHeader}</h1>
        {itemTemplate.map((item) => {
          const { name, type, label } = item;
          return (
            <React.Fragment key={name}>
              <label htmlFor={name}>{label}</label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  onChange={this.handleChange}
                  value={this.state[name] || ""}
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  onChange={this.handleChange}
                  value={this.state[name] || ""}
                  // placeholder='eg. Responsibilities and achievements.'
                />
              )}
            </React.Fragment>
          );
        })}
        <button>Submit</button>
      </form>
    );
  }
}
