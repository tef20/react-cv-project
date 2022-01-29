import React, { Component } from "react";
import Subsection from "./Subsection";
import Entry from "./EntryWrapper";
import { exampleData } from "../data/example_data";
import templates from "../data/itemTemplates";
import PopupOverlay from "./PopupOverlay";
import EntryForm from "./EntryForm";
import { toggleState } from "./tools";
import { editItem, handleFormSubmit, toggleFormPopup } from "./formTools";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [...exampleData.profile] };

    this.handleFormSubmit = handleFormSubmit.bind(this);
    this.toggleFormPopup = toggleFormPopup.bind(this);
    this.editItem = editItem.bind(this);
  }

  toggleButtonHidden = (value) => toggleState("buttonHidden", value);

  render() {
    const { description, id } = this.state.items[0];
    const content = <p className='entry--details-description'>{description}</p>;
    const entries = [
      <Entry
        key={id}
        id={id}
        content={content}
        editItem={() => {
          this.toggleFormPopup(id);
        }}
      />,
    ];
    return (
      <>
        {this.state.formPopup && (
          <PopupOverlay
            content={
              <EntryForm
                formHeader={"Profile"}
                itemId={id}
                itemTemplate={templates["profile"]}
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
        <Subsection title='Profile' content={entries} />
      </>
    );
  }
}
