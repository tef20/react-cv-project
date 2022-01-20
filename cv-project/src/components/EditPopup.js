import React, { Component } from "react";
import EntryForm from "./EntryForm";

export default class EditPopup extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div
        id='popup-overlay'
        className='popup-overlay'
        onClick={(e) =>
          e.target.id === "popup-overlay" && this.props.togglePopup()
        }
      >
        {this.props.content && (
          <div className='popup-container'>
            {this.props.content}
          </div>
        )}
      </div>
    );
  }
}
