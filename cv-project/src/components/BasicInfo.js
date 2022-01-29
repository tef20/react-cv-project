import React, { Component } from "react";
import EntryForm from "./EntryForm";
import templates from "../data/itemTemplates";
import { exampleData as data } from "../data/example_data";
import profilePic from "../images/blank_avatar.webp";
import { toggleState } from "./tools";
import PopupOverlay from "./PopupOverlay";
import { editItem, handleFormSubmit, toggleFormPopup } from "./formTools";

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUnderEdit: null,
      buttonHidden: true,
      formPopup: false,
      items: [...data.basicInfo],
    };

    this.handleFormSubmit = handleFormSubmit.bind(this);
    this.toggleFormPopup = toggleFormPopup.bind(this);
    this.editItem = editItem.bind(this);
    this.toggleState = toggleState.bind(this);
  }

  toggleButtonHidden = (value) => this.toggleState("buttonHidden", value);

  render() {
    const { id, name, jobTitle, phone, email, picture } = this.state.items[0];

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
        <div className='headerEditButtonBar'>
          <button
            type='button'
            className={`editButton header ${
              this.state.buttonHidden ? "hidden" : ""
            }`}
            onClick={() => this.toggleFormPopup(id)}
          >
            ✏️
          </button>
        </div>
        <div className='header--profile-pic-container'>
          <img
            className='header--profile-pic'
            src={picture || profilePic}
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
                formHeader={"Basic Info"}
                itemId={id}
                itemTemplate={templates["basicInfo"]}
                togglePopup={this.toggleFormPopup}
                formSubmitHandler={(e, idForEdit, updatedItem) => {
                  e.preventDefault();
                  this.editItem(idForEdit, updatedItem);
                  this.toggleFormPopup();
                }}
                existingEntry={this.state.items[0]}
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
