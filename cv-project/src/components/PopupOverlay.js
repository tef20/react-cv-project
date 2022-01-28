import React, { Component } from "react";

export default class PopupOverlay extends Component {
  closePopup = (e) => {
    e.target.id === "popup-overlay" && this.props.togglePopup();
  }

  render() {
    return (
      <div
        id='popup-overlay'
        className='popup-overlay'
        onClick={this.closePopup}
      >
        {this.props.content && (
          <div className='popup-container'>{this.props.content}</div>
        )}
      </div>
    );
  }
}
