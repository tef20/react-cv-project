import React, { Component } from "react";
import EntryForm from "./EntryForm";

export default class EditPopup extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    console.log(e.target);
    // if (e.target )
  }

  render() {
    return (
      <div className='popup-overlay' onClick={this.props.togglePopup}>
        {this.props.data && (
          <div className='popup-container'>
            <EntryForm data={this.props.data} />
          </div>
        )}
      </div>
    );
  }
}
