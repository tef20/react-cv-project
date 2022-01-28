import React, { Component } from "react";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
    };
  }

  toggleState = (key, value) => {
    this.setState((prevState) => ({
      [key]: value ?? !prevState[key],
    }));
  };

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);

  render() {
    const { content, id } = this.props;
    return (
      <div
        className='entry--wrapper'
        onMouseEnter={(e) => {
          e.stopPropagation();
          this.toggleButtonHidden(false);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          this.toggleButtonHidden(true);
        }}
      >
        <div className='entry--content'>{content}</div>
        <div className={"entry--buttons"}>
          <button
            type='button'
            className={`editButton ${this.state.buttonHidden ? "hidden" : ""}`}
            onClick={() => this.props.editItem(id)}
          >
            ✏️
          </button>
          <button
            type='button'
            className={`deleteButton ${
              this.state.buttonHidden ? "hidden" : ""
            }`}
            onClick={() => this.props.removeItem(id)}
          >
            ❌
          </button>
        </div>
      </div>
    );
  }
}
