import React, { Component } from "react";
import EditPopup from "./EditPopup";
import { capitalize } from "./tools";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
      popupOverlay: false,
      itemUnderEdit: "",
    };
  }

  toggleHideAddButton = (e, hidden) => {
    this.setState((prevState) => ({
      buttonHidden: hidden ?? !prevState.buttonHidden,
    }));
  };

  render() {
    // title
    // buttons
    // content
    const { props, state } = this;
    return (
      <section
        className='section'
        onMouseOver={(e) => this.toggleHideAddButton(e, false)}
        onMouseOut={(e) => this.toggleHideAddButton(e, true)}
      >
        <div className='section--header'>
          {props.title && (
            <h2 className='section--header-title'>{capitalize(props.title)}</h2>
          )}
          {props.addEntryHandler && (
            <button
              className={`section--header-add ${
                state.buttonHidden ? "hidden" : ""
              }`}
              type='button'
              onClick={() => {
                // fire popup with
                //  - form
                //  - addItem
              }}
              onClick={() => props.addItem()}
            >
              ➕
            </button>
          )}
        </div>
        {props.content?.length ? (
          <div className='section--content'>{props.content}</div>
        ) : (
          <p className='faded'>{`${props.title} details go here...`}</p>
        )}
      </section>
    );
  }
}
