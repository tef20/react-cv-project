import React, { Component } from "react";
import EditPopup from "./EditPopup";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
      popupOverlay: false,
    };
  }

  toggleState = (key, value) => {
    this.setState((prevState) => ({
      [key]: value ?? !prevState[key],
    }));
  };

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);
  
  togglePopup = (value) => this.toggleState("popupOverlay", value);

  render() {
    return (
      <section
        className='section'
        onMouseEnter={() => this.toggleButtonHidden(false)}
        onMouseLeave={() => this.toggleButtonHidden(true)}
      >
        {this.state.popupOverlay && (
          <EditPopup
            data={this.props.content}
            togglePopup={() => this.togglePopup()}
          />
        )}
        <div className='section--header'>
          <h2 className='section--header-title'>{this.props.title}</h2>
          <button
            className={`section--add ${
              this.state.buttonHidden ? "hidden" : ""
            }`}
            type='button'
            name={this.props.title}
            onClick={this.togglePopup}
          >
            ➕
          </button>
        </div>
        <div className='section--content'>{this.props.content}</div>
      </section>
    );
  }
}
