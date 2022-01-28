import React, { Component } from "react";
import EntryForm from "./EntryForm";
import templates from "./itemTemplates";
import { exampleData as data } from "../example_data";
import profilePic from "../images/blank_avatar.webp";
import { genID, toggleState } from "./tools";
import PopupOverlay from "./PopupOverlay";
import { handleFormSubmit } from "./formTools";

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUnderEdit: null,
      buttonHidden: true,
      formPopup: false,
      item: { ...data.basicInfo },
    };

    this.handleFormSubmit = handleFormSubmit.bind(this);
    this.toggleState = toggleState.bind(this);
  }

  ids = genID();

  editItem = (id, newItem) => {
    this.setState((prevState) => ({}));
  };

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);
  toggleFormPopup = (value) => this.toggleState("formPopup", value);

  render() {
    console.log({ state: this.state });
    const { id, name, jobTitle, phone, email, picture } = this.state.item;

    const content = (
      <section
        className='section header'
        onMouseEnter={(e) => {
          e.stopPropagation();
          this.toggleButtonHidden(false);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          this.toggleButtonHidden(true);
        }}
      >
        <div className='header--details'>
          <h1 className='header--name'>{name}</h1>
          <h3 className='header--title'>{jobTitle}</h3>
          <p className='header--phone'>{phone}</p>
          <p className='header--email'>{email}</p>
        </div>
        <button
          type='button'
          className={`editButton ${this.state.buttonHidden ? "hidden" : ""}`}
          onClick={() => this.toggleFormPopup(id)}
        >
          ✏️
        </button>
        <div className='header--profile-pic-container'>
          <img
            className='header--profile-pic'
            src={profilePic || picture}
            alt='profile pic'
          />
        </div>
      </section>
    );

    return (
      <>
        {this.state.formPopup && (
          <PopupOverlay
            content={
              <EntryForm
                formHeader={"Basic Information"}
                itemTemplate={templates["basicInfo"]}
                togglePopup={this.toggleFormPopup}
                existingEntry={this.state.item}
              />
            }
            togglePopup={this.toggleFormPopup}
          />
        )}
        {content}
      </>
    );
  }
}
